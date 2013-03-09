/*{
    "description": "Provides all the documentation for the standard JavaScript Function object.",
    "acknowledgements": "The majority of the actual documentation has been obtained from https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects#Standard_global_objects_(alphabetically)"
}*/

//--------------------------------DOC DEF & LOAD-------------------------------

Object.prototype._info.lib.loadDoc({
    description: "Standard JavaScript Function constructor object.",
    params: [
        {
            description: "Names to be used by the function as formal argument names. Each must be a string that corresponds to a valid JavaScript identifier or a list of such strings separated with a comma; for example 'x', 'theValue', or 'a,b'.",
            required: false,
            exampleVal: "'arg1', 'arg2'"
        },
        {
            description: "A string containing the JavaScript statements comprising the function definition.",
            required: true,
            exampleVal: "'return arg1 + arg2;'"
        }
    ],
    returns: "The new function.",
    properties: {
        prototype: {
            description: "The prototype for all functions.",
            properties: {
                apply: {
                    description: "Calls a function with a given this value and arguments provided as an array (or an array like object).",
                    params: [
                        {
                            description: "The value of this provided for the call to fun. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, null and undefined will be replaced with the global object, and primitive values will be boxed.",
                            required: true
                        },
                        {
                            description: "An array like object, specifying the arguments with which fun should be called, or null or undefined if no arguments should be provided to the function.",
                            required: false,
                            exampleVal: ["arg1", "arg2"]
                        }
                    ],
                    returns: "Whatever the function itself returns."
                },
                bind: {
                    description: "Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function was called.",
                    params: [
                        {
                            description: "The value to be passed as the this parameter to the target function when the bound function is called. The value is ignored if the bound function is constructed using the new operator.",
                            required: true
                        },
                        {
                            description: "Arguments to prepend to arguments provided to the bound function when invoking the target function.",
                            required: false,
                            exampleVal: "'arg1', 'arg2'"
                        }
                    ],
                    returns: "A new bound function with the same function body."
                },
                call: {
                    description: "Calls a function with a given this value and arguments provided individually.",
                    params: [
                        {
                            description: "The value of this provided for the call to fun. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, null and undefined will be replaced with the global object, and primitive values will be boxed.",
                            required: true
                        },
                        {
                            description: "The arguments for the object.",
                            required: false,
                            exampleVal: "'arg1', 'arg2'"
                        }
                    ],
                    returns: "Whatever the function itself returns."
                },
                toString: {
                    description: "Gets a string representing the source code of the function.",
                    returns: "A string with the source code for the function."
                }
            }
        }
    }
}, Function);
