/*{
    "description": "Checks the to see if the documentation is in the expected format. This helps standardise the documentation"
}*/

"use strict";

//--------------------------------REQUIRES-------------------------------------

var specChecker = require('./specChecker'),
    objConformToSpec = specChecker.doesObjConformToSpec,
    is = require('./is');

//--------------------------------'CONSTANTS'----------------------------------

var YES = true;
var NO = false;

//--------------------------------HELPERS--------------------------------------

function isStringOrStringArray(obj, property){
    var valid = YES, errors = [];

    if(!is(obj).aStringOrArrayOfStrings()) {
        valid = NO;
        errors.push('Expected the property: ' + property + ' to be a string or array of strings.');
    }
    return { isValid: valid, errors: errors };
}

function isRawJavascript(obj, property){
    // obj can be anything at all. This could perhaps be restricted.
    return  { isValid: YES, errors: [] };
}

function isBoolean(obj, property){
    var valid = YES, errors = [];

    if(!is(obj).aBoolean()) {
        valid = NO;
        errors.push('Expected the property: ' + property + ' to be a boolean');
    }

    return  { isValid: valid, errors: errors };
}

//--------------------------------DOC SPEC-------------------------------------

var docSpec;

var descriptionSpec = {
    required: YES,
    validator: function descriptionValidator(obj){
        return isStringOrStringArray(obj, 'description');
    }
};

var argSpec = {
    description: descriptionSpec,
    exampleVal: {
        required: NO,
        validator: function exampleValValidator(obj){
            return isRawJavascript(obj, 'exampleVal');
        }
    },
    required: {
        required: NO,
        validator: function argRequiredValidator(obj){
            return isBoolean(obj, 'required');
        }
    }
};

//simplify - decompose
var argsSpec = {
    required: NO,
    validator: function argSpecValidator(args) {
        var isValid = YES, errors = [], result, arg;
        // is it a string
        if(is(args).aStringOrArrayOfStrings()){
            //remove this
        } else if(is(args).anArray()) {  // is it an array
            if(is(args).anArrayOfArrays()) { // is it an array of arrays
                for (var i = args.length - 1; i >= 0; i--) {
                    var signature = args[i];
                    for (var j = signature.length - 1; j >= 0; j--) {
                        arg = signature[j],
                        result = objConformToSpec(arg, argSpec);
                        isValid = result.isValid;
                        errors = errors.concat(result.errors);
                        // result = objConformToSpec(arg, docSpec); // || when it is a function
                        // isValid |= result.isValid;
                        // errors = errors.concat(result.errors);
                    }
                }
            } else if(is(args).anArrayOfDicts()){  // or is it an array of objects
                for (var z = args.length - 1; z >= 0; z--) {
                    arg = args[z];
                    result = objConformToSpec(arg, argSpec);

                    isValid = result.isValid;
                    errors = errors.concat(result.errors);
                }
            } else {
                isValid = NO;
                errors.push('args can only be an array of signatures, a dictionary or a string');
            }
        } else if(is(args).aDict()){
            result = objConformToSpec(args, argSpec);
            isValid = result.isValid;
            errors = errors.concat(result.errors);
            // result = objConformToSpec(args, docSpec); // || when it is a function
            // isValid |= result.isValid;
            // errors = errors.concat(result.errors);

        } else { // is it an object
            isValid = NO;
            errors.push('args can only be an array of signatures, a dictionary or a string');
        }
        return { isValid: Boolean(isValid), errors: errors };
    }
};

var returnsSpec = {
    required: NO,
    validator: function(obj) {
        return isStringOrStringArray(obj, 'returns');
    }
};

var propertiesSpec = {
    required: NO,
    validator: function propsSpecValidator(properties) {
        //is it a dictionary/map
        var valid = NO, errors = [];
        if(is(properties).aDict()){

            valid = YES;
            for(var property in properties){
                if(properties.hasOwnProperty(property)){
                    var value = properties[property];
                    //does each property conform to argSpec

                    var result;
                    if(is(value).aDict()){
                        result = objConformToSpec(properties[property], argSpec);                        
                    } else {
                        result = isStringOrStringArray(value, 'properties');
                    }
                    valid &= result.isValid;
                    errors = errors.concat(result.errors);
                }   
            }   
        }
        return { isValid: Boolean(valid), errors: errors };
        
    }
};

docSpec = {
    description: descriptionSpec,
    returns: returnsSpec,
    properties: propertiesSpec,
    args: argsSpec
};

//--------------------------------EXPORTS--------------------------------------

exports.docValidator = function docValidator(doc)
/*{
    "description": "Tests the passed in documentation against the braceDoc specification",
    "args": "The documentation to be checked.",
    "returns": "An object with isValid and the array of errors that occurred." 
}*/
{
    return objConformToSpec(doc, docSpec);
};

