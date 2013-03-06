/*{
    "description": "This piece of software is compatible with browsers (tested in chrome, opera) and node."
}*/

// Provide a private context
(function(){
    'use strict';

    // Assign all the private context functions to the lib object for exposure later. e.g. _info.lib
    var lib = {};

    //----------------------------'CONSTANTS'----------------------------------    

    lib._customDoc = {
        description: [
            "The internals of braceDoc. Changing anything here will alter the",
            "behaviour of braceDoc. Use for experimentation."
        ]
    };

    // The regular expression to match /*{ }*/ style comments
    lib.docRegex = /\/\*\{[\s\S]*\}\*\//m;

    lib.docRegex._customDoc = {
        "description": "The regular expression that matches braceDoc style comments."
    };

    //----------------------------HELPERS--------------------------------------

    lib.parseEmbeddedDocFrom = function(functionWithDoc)
    /*{
        "description": [
            "Parses the code from the function passed in to retrieve",
            "the raw documentation. This function assumes that there is",
            "embedded documentation."
        ],
        "args": {
            "description": "The function to parse for documentation",
            "exampleVal": "function()\/*{ description: '' }*\/{}"
        },
        "returns": [
            "The documentation or an error if the documentation is not",
            "valid JSON."
        ]
    }*/
    {
        var code = functionWithDoc.toString();
        
        var braceDocs = lib.docRegex.exec(code);
        
        // Use first braceDoc match
        var rawDocString = braceDocs[0];
        
        // Strip leading /* and trailing *\
        var docString = rawDocString.slice(2, -2);

        var result;
        
        // Parse it
        try {
            result = JSON.parse(docString);
        }
        catch(exception) {
            result = { error: "Failed to parse braceDoc comment.", exception: exception.stack};
        }
        return result;
    };

    lib.docEmbeddedIn = function(functionP)
    /*{
        "description": "Tests if braceDoc style comments is embedded in a function",
        "args": { "description": "function to test for embedded braceDoc comments" },
        "returns": "true if the function has a braceDoc comment, false otherwise"
    }*/
    {
        var code = functionP.toString();
        return lib.docRegex.test(code);
        //return braceDocs && braceDocs.length > 0;
    };

    lib.getDocumentationFor = function(object, argumentsP)
    /*{
        "description": [
            "Attempts to retrieve the documentation for an object. It looks",
            "in two places for the documentation. Either the docs are",
            "assigned to the _customDoc property of the object or they are",
            "embedded in the code for the function. If it is assigned to the",
            "_customDoc then it can take two forms either an object",
            "or a function which returns an object."
        ],
        "args": [
            { "description": "object to get documentation from." },
            {
                "description": "the arguments to be passed to a _customDoc function",
                "exampleVal": "[]"
            }
        ],
        "returns": "The documentation for the function or the error that occurred."
    }*/
    {
        var result;
        //check if it has a customisable documentation in the form of static
        //object or a function
        if("_customDoc" in object) {

            // is the customDoc a dynamic function
            if(object._customDoc instanceof Function) {
                try{
                    var customDocFunc = object._customDoc;
                    result = customDocFunc.apply(customDocFunc, argumentsP);
                } catch(e) {
                    //it is not defined properly fail gracefully
                    result = { error: "Custom doc function failed unexpectedly.", message: e.stack };
                }       
            } else { // assume it is an object literal
                result = object._customDoc;
            }
            
        } else if(lib.docEmbeddedIn(object)) { //assume object is a function
            result = lib.parseEmbeddedDocFrom(object);
        } else {
            result = {
                error: [
                    "This object does not have embedded or custom documentation. If it is a",
                    "global object consider loading it in separately and",
                    "perhaps submitting the docs to the repository"
                ]
            };
        }

        return result;
    };

    lib.isString = function isString(something)
    /*{
        "description": "checks if something is a string",
        "args": "object to test",
        "returns": "true if it is a string, false otherwise."
    }*/
    {
        return typeof something === 'string' || something instanceof String;
    };

    lib.isArray = function isArray(something)
    /*{
        "description": "checks if something is an array",
        "args": "object to test",
        "returns": "true if the object is related to array, false otherwise"
    }*/
    {
        return Object.prototype.toString.call(something) === '[object Array]';
    };

    lib.isFunction = function isFunction(something)
    /*{
        "description": "Tests if the argument is a function."
    }*/
    {
        return Object.prototype.toString.call(something) === '[object Function]';
    };

    lib.isRegExp = function isRegExp(something)
    /*{
        "description": "Tests if the argument is a Regular Expression."
    }*/
    {
        return Object.prototype.toString.call(something) === '[object RegExp]';
    };

    lib.isDate = function isDate(something)
    /*{
        "description": "Tests if the argument is a Date object"
    }*/
    {
        return Object.prototype.toString.call(something) === '[object Date]';
    };

    lib.prettyStringify = function(object, indent)
    /*{
        "description": [
            "Prints documentation in a form that is more readable",
            "for the user"
        ],
        "args": [
            {
                "description": "Object to stringify",
                "required": true
            },
            {
                "description": "The indentation to be prepended to every line of output",
                "required": false
            }
        ],
        "returns": "string with separation between object keys"
    }*/
    {
        var tab = '  ',
            buffer = "",
            objectType = typeof object;

        indent = indent || "";

        // explicitly define each case 
        if(objectType === "number" || objectType === "boolean" || objectType === "undefined" || object === null) {
            buffer += indent + object;
        } else if(lib.isString(object)){
            buffer += indent + object;
        } else if(lib.isArray(object)){
            for (var i = 0; i < object.length; i++) {
                buffer += lib.prettyStringify(object[i], indent + tab) + "\n";
            }
        } else if(lib.isFunction(object)) {
            buffer += indent + "[Function] " + object;
        } else if (lib.isRegExp(object)){
            buffer += indent + "[RegExp] " + object;
        } else if(lib.isDate(object)) {
            buffer += indent + "[Date] " + object;
        } else {
            //normal object
            for(var property in object){
                if(object.hasOwnProperty(property)){
                    buffer += indent + property + ':\n';
                    buffer += indent + "  " + lib.prettyStringify(object[property], indent + tab) +"\n";
                }
            }
        }

        return buffer;
    };

    lib.loadDoc = function(doc, obj, status)
    /*{
        "description": [
            "Loads a doc into objects in the supplied object. The",
            "documentation is assigned to the _customDoc function of the",
            "object it describes. It is assumed that the doc is in the",
            "correct format."
        ],
        "args": [
            {
                "description": "The doc to be loaded",
                "exampleVal": "{ description: '', properties: {key: '...''}}"
            },
            {
                "description": "The object to load docs into",
                "exampleVal": "{ key:{} }"
            },
            {
                "description": "The status of the doc loading",
                "required": false,
                "exampleVal": "{ errors: [], loadedDocs: 0 }"
            }
        ],
        "returns": [
            "A status object with the count of the objects that documentation was",
            "loaded for and the errors which occured."
        ]
    
    }*/
    {
        status = status || {
            errors: [],
            loadedDocs: 0
        };
        
        if(doc.hasOwnProperty('properties')) {
            // Load doc for children
            for(var property in doc.properties) {
                if(obj.hasOwnProperty(property)) {

                    lib.loadDoc(doc.properties[property], obj[property], status);

                } else if(!(property in obj)) { // it is not a valid property at all
                    status.errors.push({
                        message: "unknown property: " + property
                    });
                } // Otherwise it is not a direct property so ignore
            }
            //finished with properties so remove it from doc
            delete doc.properties;
        }
        
        //prevent _customDoc from breaking other libraries by making it
        //non enumerable
        Object.defineProperty(obj, "_customDoc", {
            writable: true,
            configurable: true,
            enumerable: false
        });

        obj._customDoc = doc;

        status.loadedDocs += 1;

        return status;
    };

    function _info()
    /*{
        "description": [
            "Generates a string with the documentation for the object on",
            "which it is called. If the documentation is generated from a",
            "custom function then the args are passed through to that",
            "function."
        ],
        "args": "The arguments to pass through to the customDoc function.",
        "returns": [
            "A formated string with the documentation otherwise the",
            "error which occurred."
        ]
    }*/
    {
        /* jshint validthis:true */
        var doc, docString;
        try {
            doc = lib.getDocumentationFor(this, arguments),
            docString = lib.prettyStringify(doc);
        } catch(e){
            docString = "Exception retrieving doc.\n\n message: " + e.message + "stack:\n" + e.stack() ;
        }
       
        return docString;
    }

    //----------------------------EXPOSED OBJECTS------------------------------
    

    Object.defineProperty(Object.prototype, "_info", {
        configurable: true,
        writable: true,
        enumerable: false,
        value: _info
    });

    // Expose the library
    // The lib is exposed so that it can be customised live such as in the browser.
    _info.lib = lib;
    
}());
