/*{
    "description": "Object type identification library" 
}*/

"use strict";

//--------------------------------'CONSTANTS'----------------------------------

var YES = true;
var NO = false;

//--------------------------------EXPORTS--------------------------------------


module.exports = function is(obj)
/*{
   "description": "Provides a nice language for determining the types of objects you have. e.g is(something).aString()",
   "args": "The object to be tested",
   "returns": "An object on which type assertions can be made."
}*/
{
    
    var result = {
        _arguments: arguments,
        aString: function aString()
        /*{ "description": "Tests if it is a string." }*/
        {
            return typeof obj === "string";
        },
        anArray: function anArray()
        /*{ "description": "Tests if it is an array." }*/
        {
            return Object.prototype.toString.call(obj) === "[object Array]";
        },
        aDict: function aDict()
        /*{ "description": "Tests if it is a dictionary (normal object)." }*/
        {
            var result;
            try { // handle cases where obj isn't an object
                result = Object.getPrototypeOf(obj) === Object.prototype;//Object.prototype.toString.call(obj) === "[object Object]";
            } catch(e) {
                result = false;
            }

            return result;
            
        },
        aBoolean: function aBoolean()
        /*{ "description": "Tests if it is a boolean." }*/
        {
            return typeof obj === 'boolean';
        },
        aStringOrArrayOfStrings: function aStringOrArrayOfStrings()
        /*{ "description": "Tests if it is a string or an array only containing strings." }*/
        {
            return is(obj).aString() || is(obj).anArrayOfStrings();            
        },
        anArrayOfStrings: function anArrayOfStrings()
        /*{ "description": "Tests if it is an array with only strings." }*/
        {
            var isStringArray = NO;

            if(is(obj).anArray() && obj.length !== 0) {
                isStringArray = YES;
                for (var i = obj.length - 1; i >= 0; i--) {
                    isStringArray &= is(obj[i]).aString();
                }
            }
            return Boolean(isStringArray);            
        },
        anArrayOfArrays: function anArrayOfArrays()
        /*{ "description": "Tests if it is an array containing only arrays." }*/
        {
            var result = false;

            if(is(obj).anArray() && obj.length !== 0){
                result = true;
                for (var i = obj.length - 1; i >= 0; i--) {
                    result &= is(obj[i]).anArray();
                }
            }

            return Boolean(result); 
        },
        anArrayOfDicts: function anArrayOfDicts()
        /*{ "description": "Tests if it is an array with only dictionaries (normal objects)." }*/
        {
            var isAnArrayOfDicts = NO;
            if(is(obj).anArray() && obj.length !== 0) {
                isAnArrayOfDicts = YES;
                for (var i = obj.length - 1; i >= 0; i--) {
                    isAnArrayOfDicts &= is(obj[i]).aDict();
                }
            }

            return Boolean(isAnArrayOfDicts);
        }
    };
    return result;
};