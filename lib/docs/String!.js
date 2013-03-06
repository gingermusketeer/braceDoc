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
                    args: {
                        description: "The index of the character to retrieve. An integer between 0 and 1 less than the length of the string.",
                        exampleVal: 1,
                        required: true
                    },
                    returns: "A string containing the character or the empty string if the index is invalid."
                },
                charCodeAt: {
                    description: "Returns the numeric Unicode value of the character at the given index (except for unicode codepoints > 0x10000).",
                    args: {
                        description: "The index of the character to retrieve. An integer greater than 0 and less than the length of the string; if it is not a number, it defaults to 0.",
                        exampleVal: 0,
                        required: false
                    },
                    returns: "A string containing the character or the empty string if the index is invalid."
                },
                concat: {
                    description: "Combines the text of two or more strings and returns a new string.",
                    args: {
                        description: "Strings to concatenate to this string.",
                        exampleVal: "'hello', 'world'",
                        required: true
                    },
                    returns: "The original string combined with the string(s) passed in."
                },
                contains: {
                    description: "Determines whether one string may be found within another string.",
                    args: [
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
                    args: [
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
                    args: [
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
                    args: [
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
                    args: {
                        description: "The string against which the referring string is being compared.",
                        exampleVal: "å∫ç",
                        required: true
                    },
                    returns: "A number indicating whether a reference string comes before or after or is the same as the given string in sort order. Returns a negative number if the string occurs earlier in a sort than compareString, returns a positive number if the string occurs afterwards in such a sort, and returns 0 if they occur at the same level."
                },
                match: {
                    description: "Used to retrieve the matches when matching a string against a regular expression",
                    args:{                
                        description: "A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj).",
                        required: true,
                        exampleVal: /abc[\s]*/
                    },
                    returns: "If the regular expression does not include the g flag, returns the same result as regexp.exec(string). If the regular expression includes the g flag, the method returns an Array containing all matches. If there were no matches, the method returns null. The returned Array has an extra input property, which contains the regexp that generated it as a result. In addition, it has an index property, which represents the zero-based index of the match in the string."
                },
                replace: {
                    description: "Returns a new string with some or all matches of a pattern replaced by a replacement.  The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.",
                    args: [
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
                    args: {
                        description: "The RegExp to search for. If this is not a RegExp it will be converted.",
                        required: true,
                        exampleVal: /abc[\s]*/
                    },
                    returns: "The index where the match was found or -1 if there are no matches."

                },
                slice: {
                    description: "Extracts a section of a string",
                    args: [
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
                    args: [
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
                    args: [
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
                    args: [
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
                    args: [
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