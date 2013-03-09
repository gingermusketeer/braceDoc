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
