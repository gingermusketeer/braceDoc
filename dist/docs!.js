/*{
    "description": "Provides all the documentation for the standard JavaScript Array object.",
    "acknowledgements": "The majority of the actual documentation has been obtained from https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects#Standard_global_objects_(alphabetically)"
}*/

//--------------------------------DOC DEF & LOAD-------------------------------
/* global copy:false */
Object.prototype._info.lib.loadDoc({
    description: "Constructor for arrays.",
    params: [
        {
            description: [
                "A number between 0 and 2^32-1. This",
                "restriction only applies to arrays",
                "constructed with the array constructor"
            ],
            exampleVal: 10
        },
        {
            description: [
                "A js array is initialized with the elements",
                "passed in except when a single numeric",
                "argument is passed in then it is treated as a",
                "as a different signature."
            ],
            exampleVal: "1, 2, 3"
        }
    ],
    properties: {
        isArray: {
            description: "Tests if an object is an array",
            params: {
                description: "The object to test",
                exampleVal: []
            },
            returns: "true if the object is an array false otherwise"
        },
        prototype: {
            description: "prototype for Array objects",
            properties:{
                pop: {
                    description: "Removes the last element from an array",
                    returns: "The last element in the array or undefined if the array is empty."
                },
                push: {

                    description: "Adds one or more elements to the end of an array and returns the new length of the array",
                    params: {
                        description: "The elements to add to the end of the array.",
                        exampleVal: "1, 2, 3"
                    },
                    returns: "The new length of the array."
                },
                reverse: {

                    description: "Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first. Note: this is an in place change to the array."

                },
                shift: {

                    description: "Removes the first element from an array and returns that element.",
                    returns: "The first element in the array."

                },
                sort: {

                    description: "Sorts the elements of an array. If there are no arguments the elements are converted into a string then compared lexigraphically.",
                    params: {
                        description: "A function that compares two values",
                        params: [
                            {
                                description: "An object to be compared against."
                            },
                            {
                                description: "The object to be used to make the comparison."
                            }
                        ],
                        returns: "0 if the objects equal, -1 if 'a' is less then 'b', 1 if 'a' is greater then 'b'"
                    },
                    required: false,
                    exampleVal: function(a, b) { return a.compareTo(b); }
                },
                splice: {

                    description: "Changes the content of an array, adding new elements while removing old elements.",
                    params: [
                        {
                            description: "Index at which to start changing the array. If negative, will begin that many elements from the end.",
                            required: true,
                            exampleVal: 1
                        },
                        {
                            description: "An integer indicating the number of old array elements to remove. If howMany is 0, no elements are removed. In this case, you should specify at least one new element.",
                            required: true,
                            exampleVal: 3
                        },
                        {
                            description: "The elements to add to the array. If you don't specify any elements, splice simply removes elements from the array.",
                            required: false,
                            exampleVal: "1, 2, 3"
                        }
                    ],
                    returns: "An array containing the removed elements. If only one element is removed, an array of one element is returned."
                },
                unshift: {
                    description: "Adds one or more elements to the front of an array and returns the new length of the array.",
                    params: {
                        description: "The elements to add to the front of the array.",
                        required: true,
                        exampleVal: "1, 2, 3"
                    },
                    returns: "The new length property of the object upon which the method was called."

                },
                concat: {
                    description: "Returns a new array comprised of this array joined with other array(s) and/or value(s).",
                    params: {
                        description: "Arrays and/or values to concatenate to the resulting array.",
                        required: true,
                        exampleVal: [1, 2, 3]
                    },
                    returns: "The new array containing the elements from the array on which it was called followed by the arguments passed in"
                },
                join: {
                    description: "Joins all elements of an array into a string.",
                    params: {
                        description: "Specifies a string to separate each element of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma.",
                        required: false,
                        exampleVal: ','
                    },
                    returns: "String conversion of all the elements of the array joined into one string separated by the argument passed in or comma by default"
                },
                slice: {
                    description: "Shallow copies of a portion of an array.",
                    params: [
                        {
                            description: "Zero-based index at which to begin extraction. As a negative index, begin indicates an offset from the end of the sequence. slice(-2) extracts the second-to-last element and the last element in the sequence.",
                            required: true,
                            exampleVal: 2
                        },
                        {
                            description: "Zero-based index at which to end extraction. slice extracts up to but not including end. slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3). As a negative index, end indicates an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence. If end is omitted, slice extracts to the end of the sequence.",
                            required: false,
                            exampleVal: 5
                        }
                    ],
                    returns: "An array containing a one level deep copy of the specified array elements."
                },
                toString: {
                    description: "Generates a string representing the array and its elements. Overrides the Object.prototype.toString method.",
                    returns: "A string representing the array"

                },
                indexOf: {
                    description: "Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.",
                    params: [
                        {
                            description: "Element to locate in the array.",
                            required: true,
                            exampleVal: "'abc'"
                        },
                        {
                            description: "The index at which to begin the search. Defaults to 0, i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, -1 is returned, i.e. the array will not be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from front to back. If the calculated index is less than 0, the whole array will be searched."
                        }
                    ],
                    returns: "The index at which the element being looked for is found (using strict equality) or -1."

                },
                lastIndexOf: {
                    description: "Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.",
                    params: [
                        {
                            description: "Element to locate in the array.",
                            required: true,
                            exampleVal: "'abc'"
                        },
                        {
                            description: "The index at which to start searching backwards. Defaults to the array's length, i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array. Note that even when the index is negative, the array is still searched from back to front. If the calculated index is less than 0, -1 is returned, i.e. the array will not be searched.",
                            required: false,
                            exampleVal: 3
                        }
                    ],
                    returns: "The index at which the element being looked for is found (using strict equality) or -1."

                },
                forEach: {
                    description: "Executes a provided function once per array element.",
                    params: [
                        {
                            description: "Function to execute for each element.",
                            exampleVal: function (element, index, array){ copy[index] = element + 1; },
                            required: true,
                            params: [
                                {
                                    description: "The current array element",
                                    exampleVal: 1
                                },
                                {
                                    description: "The index of the element in the array.",
                                    exampleVal: 0
                                },
                                {
                                    description: "The array being traversed.",
                                    exampleVal: [1, 2, 3]
                                }
                            ]
                        },
                        {
                            description: "Object to use as this when executing callback.",
                            required: false
                        }
                    ]
                },
                every: {
                    description: "Tests whether all elements in the array pass the test implemented by the provided function.",
                    params: [
                        {
                            description: "Function to test for each element.",
                            required: true,
                            exampleVal: function(element, index, array){ return element === 2; },
                            params: [
                                {
                                    description: "The current array element",
                                    exampleVal: 1
                                },
                                {
                                    description: "The index of the element in the array.",
                                    exampleVal: 0
                                },
                                {
                                    description: "The array being traversed.",
                                    exampleVal: [1, 2, 3]
                                }
                            ],
                            returns: "true or false if the element is valid"
                        },
                        {
                            description: "Object to use as this when executing callback.",
                            required: false
                        }
                    ],
                    returns: "true if all the elements in the array pass the callback function or false otherwise."

                },
                some: {
                    description: "Tests whether some element in the array passes the test implemented by the provided function.",
                    params: [
                        {
                            description: "Function to test for each element.",
                            required: true,
                            exampleVal: function(element, index, array){ return element === 2; },
                            params: [
                                {
                                    description: "The current array element",
                                    exampleVal: 1
                                },
                                {
                                    description: "The index of the element in the array.",
                                    exampleVal: 0
                                },
                                {
                                    description: "The array being traversed.",
                                    exampleVal: [1, 2, 3]
                                }
                            ],
                            returns: "true or false if the element is valid"
                        },
                        {
                            description: "Object to use as this when executing callback.",
                            required: false
                        }
                    ],
                    returns: "true if any of the elements in the array pass the callback function or false otherwise."


                },
                filter: {
                    description: "Creates a new array with all elements that pass the test implemented by the provided function.",
                    params: [
                        {
                            description: "Function to test each element of the array.",
                            required: true,
                            exampleVal: function(element, index, array){ return element === 2; },
                            params: [
                                {
                                    description: "The current array element",
                                    exampleVal: 1
                                },
                                {
                                    description: "The index of the element in the array.",
                                    exampleVal: 0
                                },
                                {
                                    description: "The array being traversed.",
                                    exampleVal: [1, 2, 3]
                                }
                            ],
                            returns: "true or false if the element is valid"
                        },
                        {
                            description: "Object to use as this when executing callback.",
                            required: false
                        }
                    ],
                    returns: "The array of elements that pass the provided test function."

                },
                map: {
                    description: "Creates a new array with the results of calling a provided function on every element in this array.",
                    params: [
                        {
                            description: "Function to test each element of the array.",
                            required: true,
                            exampleVal: function(element, index, array){ return element + 2; },
                            params: [
                                {
                                    description: "The current array element",
                                    exampleVal: 1
                                },
                                {
                                    description: "The index of the element in the array.",
                                    exampleVal: 0
                                },
                                {
                                    description: "The array being traversed.",
                                    exampleVal: [1, 2, 3]
                                }
                            ],
                            returns: "A transformed element"
                        },
                        {
                            description: "Object to use as this when executing callback.",
                            required: false
                        }
                    ],
                    returns: "A new array with each element in the array this is called on transformed with the function provided."

                },
                reduce: {
                    description: "Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.",
                    params: [
                        {
                            description: "Function to execute on each value in the array.",
                            params: [
                                {
                                    description: "The value previously returned in the last invocation of the callback, or initialValue, if supplied."
                                },
                                {
                                    description: "The current element being processed in the array."
                                },
                                {
                                    description: "The index of the current element being processed in the array."
                                },
                                {
                                    description: "The array reduce was called upon."
                                }
                            ]
                        },
                        {
                            description: "Object to use as the first argument to the first call of the callback. If this is not supplied then the first value in the array will be used."
                        }
                    ],
                    returns: "A object that is returned by the final call to the reduction callback function."


                },
                reduceRight: {

                    description: "Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.",
                    params: [
                        {
                            description: "Function to execute on each value in the array.",
                            params: [
                                {
                                    description: "The value previously returned in the last invocation of the callback, or initialValue, if supplied."
                                },
                                {
                                    description: "The current element being processed in the array."
                                },
                                {
                                    description: "The index of the current element being processed in the array."
                                },
                                {
                                    description: "The array reduce was called upon."
                                }
                            ]
                        },
                        {
                            description: "Object to use as the first argument to the first call of the callback. If this is not supplied then the last value in the array will be used."
                        }
                    ],
                    returns: "A object that is returned by the final call to the reduction callback function."

                }
            }
        }
    }

}, Array);

/*{
    "description": "Provides all the documentation for the standard JavaScript Function object.",
    "acknowledgements": "The majority of the actual documentation has been obtained from https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects#Standard_global_objects_(alphabetically)"
}*/

//--------------------------------DOC DEF & LOAD-------------------------------

Object.prototype._info.lib.loadDoc({
    description: "Standard JavaScript Function constructor object.",
    params: [
        {
            description: "Names to be used by the function as formal parameter names. Each must be a string that corresponds to a valid JavaScript identifier or a list of such strings separated with a comma; for example 'x', 'theValue', or 'a,b'.",
            required: false,
            exampleVal: "'param1', 'param2'"
        },
        {
            description: "A string containing the JavaScript statements comprising the function definition.",
            required: true,
            exampleVal: "'return param1 + param2;'"
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

/*{
    "description": "Provides all the documentation for the standard JavaScript Object object.",
    "acknowledgements": "The majority of the actual documentation has been obtained from https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects#Standard_global_objects_(alphabetically)"
}*/

//--------------------------------DOC DEF & LOAD-------------------------------

/* jshint -W001 */ //suppress warning about hasOwnProperty key
Object.prototype._info.lib.loadDoc({
    description: "Top level JavaScript object",
    properties: {
        prototype: {
            description: "Object prototype",
            properties: {
                hasOwnProperty: {
                    description: "Tests if the object has the specified property.",
                    params: {
                        description: "The property to test for.",
                        required: true,
                        exampleVal: "count"
                    },
                    returns:"true if the object has the property."
                },
                isPrototypeOf: {
                    description: "Tests for an object in another object's prototype chain.",
                    params: {
                        description: "An object to be tested against each link in the prototype chain of the object.",
                        required: true
                    },
                    returns: "true if the object passed in is part of the prototype chain."
                },
                propertyIsEnumerable: {
                    description: "Tests whether the specified property is enumerable.",
                    params: {
                        description: "The name of the property to test.",
                        required: true
                    },
                    returns: "true if the property is enumerable, false otherwise."
                },
                toLocaleString: {
                    description: "Gets a string representing the object. This method is meant to be overridden by derived objects for locale-specific purposes.",
                    returns: "The result of toString"
                },
                toString: {
                    description: "Gets a string representing the object."
                },
                valueOf: {
                    description: "Gets the primitive value of the specified object."
                }
            }
        },
        create: {
            description: "Creates a new object with the specified prototype object and properties.",
            params: [
                {
                    description: "The object which should be the prototype of the newly-created object.",
                    required: true
                },
                {
                    description: "If specified and not undefined, an object whose enumerable own properties (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names.",
                    required: false,
                    exampleVal: {
                        count: { writable: true, enumerable: true, configurable: true, value: 0 }
                    }
                }
            ],
            returns: "A new object"
        },
        defineProperty: {
            description: "Defines a new property directly on an object, or modifies an existing property on an object",
            params: [
                {
                    description: "The object on which to define the property.",
                    required: true
                },
                {
                    description: "The name of the property to be defined or modified.",
                    required: true,
                    exampleVal: "count"
                },
                {
                    description: "The descriptor for the property being defined or modified.",
                    required: true,
                    exampleVal: { writable: true, enumerable: true, configurable: true, value: 0 }
                }
            ],
            returns: "The object that was modified"
        },
        defineProperties: {
            description: "Defines new or modifies existing properties directly on an object",
            params: [
                {
                    description: "The object on which to define the property.",
                    required: true
                },
                {
                    description: "An object whose own enumerable properties constitute descriptors for the properties to be defined or modified.",
                    required: true,
                    exampleVal: {
                        count: { writable: true, enumerable: true, configurable: true, value: 0 }
                    }
                }
            ],
            returns: "The object that was modified"
        },
        getOwnPropertyDescriptor: {
            description: "Gets the property descriptor for an own property (that is, one directly present on an object, not present by dint of being along an object's prototype chain) of a given object.",
            params: [
                {
                    description: "The object in which to look for the property.",
                    required: true,
                    exampleVal: { count: 3 }
                },
                {
                    description: "The name of the property whose description is to be retrieved",
                    required: true,
                    exampleVal: "count"
                }
            ],
            returns: "The property descriptor."
        },
        keys: {
            description: "Gets all the of the object's own properties that are enumerable.",
            params: {
                description: "The object to inspect.",
                required: true
            },
            returns: "The object's own enumerable properties."
        },
        getOwnPropertyNames: {
            description: "Gets all the object's own properties (enumerable or not).",
            params: {
                description: "The object to inspect.",
                required: true
            },
            returns: "The object's own properties."
        },
        getPrototypeOf: {
            description: "Gets the prototype (i.e. the internal [[Prototype]]) of the specified object",
            params: {
                description: "The object whose prototype is to be retrieved.",
                required: true
            },
            returns: "The prototype for the object."
        },
        preventExtensions: {
            description: "Prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).",
            params: {
                description: "The object whose extensions are to be prevented.",
                required: true
            },
            returns: "The object that was passed in."
        },
        isExtensible: {
            description: "Determines if an object is extensible (whether it can have new properties added to it).",
            params: {
                description: "The object to be tested.",
                required: true
            },
            returns: "true if the object is extensible, false otherwise."
        },
        seal: {
            description: "Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.",
            params: {
                description: "The object to be sealed.",
                required: true
            },
            returns: "The sealed object."
        },
        isSealed: {
            description: "Determines if an object is sealed.",
            params: {
                description: "The object to be tested.",
                required: true
            },
            returns: "true if the object is sealed, false otherwise."
        },
        freeze: {
            description: "Freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed; and prevents existing properties, or their enumerability, configurability, or writability, from being changed. In essence the object is made effectively immutable. The method returns the object being frozen.",
            params: {
                description: "The object to freeze.",
                required: true
            },
            returns: "The object passed in."
        },
        isFrozen: {
            description: "Determines if an object is frozen.",
            params: {
                description: "The object to test."
            },
            returns: "true if the object is frozen, false otherwise."
        }
    }
}, Object);

/*{
    "description": "Provides all the documentation for the standard JavaScript String object.",
    "acknowledgements": "The majority of the actual documentation has been obtained from https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects#Standard_global_objects_(alphabetically)"
}*/

//--------------------------------DOC DEF & LOAD-------------------------------

Object.prototype._info.lib.loadDoc({
    description: "Standard JavaScript string object. Note use '' notation for string creation rather then calling new String()",
    properties: {
        prototype: {
            description: "String prototype.",
            properties: {
                charAt: {
                    description: "Returns the character at the specified index from a string.",
                    params: {
                        description: "The index of the character to retrieve. An integer between 0 and 1 less than the length of the string.",
                        exampleVal: 1,
                        required: true
                    },
                    returns: "A string containing the character or the empty string if the index is invalid."
                },
                charCodeAt: {
                    description: "Returns the numeric Unicode value of the character at the given index (except for unicode codepoints > 0x10000).",
                    params: {
                        description: "The index of the character to retrieve. An integer greater than 0 and less than the length of the string; if it is not a number, it defaults to 0.",
                        exampleVal: 0,
                        required: false
                    },
                    returns: "A string containing the character or the empty string if the index is invalid."
                },
                concat: {
                    description: "Combines the text of two or more strings and returns a new string.",
                    params: {
                        description: "Strings to concatenate to this string.",
                        exampleVal: "'hello', 'world'",
                        required: true
                    },
                    returns: "The original string combined with the string(s) passed in."
                },
                contains: {
                    description: "Determines whether one string may be found within another string.",
                    params: [
                        {
                            description: "A string to be searched for within this string.",
                            exampleVal: "abc",
                            required: true
                        },
                        {
                            description: "The position in this string at which to begin searching for searchString.",
                            exampleVal: 0,
                            required: false
                        }
                    ],
                    returns: "true if the string passed in has been found, false otherwise."
                },
                endsWith: {
                    description: "Determines whether a string ends with the characters of another string.",
                    params: [
                        {
                            description: "The characters to be searched for at the end of this string.",
                            exampleVal: "xyz",
                            required: true
                        },
                        {
                            description: "Search within this string as if this string were only this long; defaults to this string's actual length, clamped within the range established by this string's length.",
                            exampleVal: 0,
                            required: false
                        }
                    ]
                },
                indexOf: {
                    description: "Finds the index within the calling String object of the first occurrence of the specified value.",
                    params: [
                        {
                            description: "A string representing the value to search for.",
                            exampleVal: "abc",
                            required: true
                        },
                        {
                            description: "The location within the calling string to start the search from. It can be any integer between 0 and the length of the string",
                            exampleVal: 0,
                            required: false
                        }
                    ],
                    returns: "The index at which the string was found, -1 otherwise."
                },
                lastIndexOf: {
                    description: "Finds the index within the calling String object of the last occurrence of the specified value. The calling string is searched backward.",
                    params: [
                        {
                            description: "A string representing the value to search for.",
                            exampleVal: "abc",
                            required: true
                        },
                        {
                            description: "The location within the calling string to start the search from. It can be any integer between 0 and the length of the string",
                            exampleVal: 7,
                            required: false
                        }
                    ],
                    returns: "The index of the specified string or -1 if it was not found."
                },
                localeCompare: {
                    description: "Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.",
                    params: {
                        description: "The string against which the referring string is being compared.",
                        exampleVal: "å∫ç",
                        required: true
                    },
                    returns: "A number indicating whether a reference string comes before or after or is the same as the given string in sort order. Returns a negative number if the string occurs earlier in a sort than compareString, returns a positive number if the string occurs afterwards in such a sort, and returns 0 if they occur at the same level."
                },
                match: {
                    description: "Used to retrieve the matches when matching a string against a regular expression",
                    params:{
                        description: "A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj).",
                        required: true,
                        exampleVal: /abc[\s]*/
                    },
                    returns: "If the regular expression does not include the g flag, returns the same result as regexp.exec(string). If the regular expression includes the g flag, the method returns an Array containing all matches. If there were no matches, the method returns null. The returned Array has an extra input property, which contains the regexp that generated it as a result. In addition, it has an index property, which represents the zero-based index of the match in the string."
                },
                replace: {
                    description: "Returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.",
                    params: [
                        {
                            description: "A RegExp or a string with which to match the value to be replaced",
                            required: true,
                            exampleVal: "to be replaced"
                        },
                        {
                            description: "A string or a function which generates a string. This is the replacement string.",
                            required: true,
                            exampleVal: "the replacement"
                        }
                    ],
                    returns: "The new string."
                },
                search: {
                    description: "Executes the search for a match between a regular expression and this String object.",
                    params: {
                        description: "The RegExp to search for. If this is not a RegExp it will be converted.",
                        required: true,
                        exampleVal: /abc[\s]*/
                    },
                    returns: "The index where the match was found or -1 if there are no matches."

                },
                slice: {
                    description: "Extracts a section of a string",
                    params: [
                        {
                            description: "The zero-based index at which to begin extraction. If negative, it is treated as (sourceLength+beginSlice) where sourceLength is the length of the string.",
                            required: true,
                            exampleVal: 2
                        },
                        {
                            description: "The zero-based index at which to end extraction. If omitted, slice extracts to the end of the string. If negative, it is treated as (sourceLength+endSlice) where sourceLength is the length of the string.",
                            required: false,
                            exampleVal: 6
                        }
                    ],
                    returns: "The sliced section of the string."
                },
                split: {
                    description: "Splits a String object into an array of strings by separating the string into substrings.",
                    params: [
                        {
                            description: "Specifies the character to use for separating the string. The separator is treated as a string or a regular expression. If separator is omitted, the array returned contains one element consisting of the entire string.",
                            required: false,
                            exampleVal: ","
                        },
                        {
                            description: "Integer specifying a limit on the number of splits to be found. The split method still splits on every match of separator, but it truncates the returned array to at most limit elements.",
                            required: false,
                            exampleVal: 10
                        }
                    ],
                    returns: "The array of split strings. When found, the separator is removed from the string and the substrings are returned in an array. If separator is omitted, the array contains one element consisting of the entire string. If separator is a regular expression that contains capturing parentheses, then each time separator is matched the results (including any undefined results) of the capturing parentheses are spliced into the output array. However, not all browsers support this capability."
                },
                startsWith: {
                    description: "Determines whether a string begins with the characters of another string.",
                    params: [
                        {
                            description: "The characters to be searched for at the start of this string.",
                            required: true,
                            exampleVal: "search string"
                        },
                        {
                            description: "The position in this string at which to begin searching for searchString; defaults to 0.",
                            required: false,
                            exampleVal: 0
                        }
                    ],
                    returns: "true if the string contains the search string or false otherwise"
                },
                substr: {
                    description: "Gets the characters in a string beginning at the specified location through the specified number of characters.",
                    params: [
                        {
                            description: "Location at which to begin extracting characters.",
                            required: true,
                            exampleVal: 3
                        },
                        {
                            description: "The number of characters to extract.",
                            required: false,
                            exampleVal: 5
                        }
                    ],
                    returns: "The substring starting at the specified index."
                },
                substring: {
                    description: "Returns a subset of a string between one index and another, or through the end of the string.",
                    params: [
                        {
                            description: "An integer between 0 and the length of the string.",
                            required: true,
                            exampleVal: 4
                        },
                        {
                            description: "An integer between 0 and the length of the string. Defaults to the length of the string",
                            required: false,
                            exampleVal: 7
                        }
                    ],
                    returns: "The string between the indices specified"
                },
                toLocaleLowerCase:{
                    description: "Converts the calling string value to lower case, according to any locale-specific case mappings.",
                    returns: "The lower case string."
                },
                toLocaleUpperCase: {
                    description: "Converts the calling string value to upper case, according to any locale-specific case mappings.",
                    returns: "The upper case string."
                },
                toLowerCase: {
                    description: "Returns the calling string value converted to lower case.",
                    returns: "The lower case string."
                },
                toString: {
                    description: "Gets the string representing the specified object.",
                    returns: "Itself"
                },
                toUpperCase: {
                    description: "Converts the calling string value to upper case.",
                    returns: "The upper case string."
                },
                trim: {
                    description: "Removes white-space from both ends of the string.",
                    returns: "A new string with the white-space at the ends removed."
                },
                valueOf: {
                    description: "Gets the primitive value of a String object.",
                    returns: "A primitive string not a string created with new String()."
                }
            }
        }
    }

}, String);

/*{
    "description": "Provides all the documentation for the standard JavaScript DOM api.",
    "acknowledgements": "The majority of the actual documentation has been obtained from https://developer.mozilla.org/en-US/docs/DOM/window"
}*/

//--------------------------------DOC DEF & LOAD-------------------------------

/* global window:false */

Object.prototype._info.lib.loadDoc({
    description: "This section provides a brief reference for all of the methods, properties, and events available through the DOM window object. The window object implements the Window interface, which in turn inherits from the AbstractView interface. The window object represents the window itself. The document property of a window points to the DOM document loaded in that window. A window for a given document can be obtained using the document.defaultView property.",
    properties: {
        top: {
            description: "Returns a reference to the topmost window in the window hierarchy."
        },
        location: {
            description: "Returns a Location object, which contains information about the URL of the document and provides methods for changing that URL. You can also assign to this property to load another URL."
        },
        document: {
            description: "Returns a reference to the document contained in the window."
        },
        URL: {
            description: "Returns a Location object, which contains information about the URL of the document and provides methods for changing that URL. You can also assign to this property to load another URL."
        },
        XMLHttpRequest: {description: ""},
        Worker: {
            description: "Workers are background tasks that can be easily created and can send messages back to their creators. Creating a worker is as simple as calling the Worker() constructor, specifying a script to be run in the worker thread.",
            params: {
                description: "The URL to the script to be run in the worker process.",
                required: true,
                exampleVal: "'worker.js'"
            },
            returns: "A worker object."
        },
        Option: {
            description: "Used for creating an object representing an HTML option. Implements HTMLOptionElement.",
            params: [
                {
                    name: "text",
                    description: "the displayed text for the option",
                    required: false,
                    exampleVal: "option 1"
                },
                {
                    name: "value",
                    description: "the form value",
                    required: false,
                    exampleVal: "1"
                },
                {
                    name: "defaultSelected",
                    description: "a boolean which does not actually select the option, but is used to indicate the state of the defaultSelected property (of relevance for any future checks to check whether the option is meant to be selected by default)",
                    required: false,
                    exampleVal: true
                },
                {
                    name : "selected",
                    description: "a boolean to indicate whether the option will be 'selected'; if omitted, it will not be selected",
                    required: false,
                    exampleVal: true
                }
            ],
            returns: "An Option element."
        },
        Image: {
            description: "Used for creating an object representing an HTML img. Implements HTMLImageElement.",
            params: [
                {
                    name: "width",
                    description: "image width",
                    required: false,
                    exampleVal: 100
                },
                {
                    name: "height",
                    description: "image height",
                    required: false,
                    exampleVal: 200
                }
            ],
            returns: "An Image element"
        },
        DocumentType: {
            description: ""
        },
        CDATASection: {
            description: "A CDATA Section can be used within XML to include extended portions of unescaped text, such that the symbols < and & do not need escaping as they normally do within XML when used as text. Note that CDATA sections should not be used (without hiding) within HTML."
        },
        Comment: {description: ""},
        Text: {description: ""},
        Element: {description: ""},
        Attr: {description: ""},
        Document: {description: ""},
        DocumentFragment: {description: ""},
        DOMImplementation: {description: ""},
        performance: {description: ""},
        console: {description: ""},
        parent: {description: ""},
        opener: {description: ""},
        frames: {description: ""},
        self: {description: ""},
        defaultStatus: {description: ""},
        status: {description: ""},
        name: {description: ""},
        length: {description: ""},
        closed: {description: ""},
        pageYOffset: {description: ""},
        pageXOffset: {description: ""},
        scrollY: {description: ""},
        scrollX: {description: ""},
        screenY: {description: ""},
        screenX: {description: ""},
        innerWidth: {description: ""},
        innerHeight: {description: ""},
        outerWidth: {description: ""},
        outerHeight: {description: ""},
        frameElement: {description: ""},
        crypto: {description: ""},
        navigator: {description: ""},
        toolbar: {description: ""},
        statusbar: {description: ""},
        scrollbars: {description: ""},
        personalbar: {description: ""},
        menubar: {description: ""},
        locationbar: {description: ""},
        history: {description: ""},
        screen: {description: ""}
    }
}, window);
