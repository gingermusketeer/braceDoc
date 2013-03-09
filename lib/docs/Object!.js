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
