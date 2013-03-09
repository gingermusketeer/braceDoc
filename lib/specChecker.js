/*{
    "description": "Generic JavaScript object specification checker."
}*/

"use strict";

//--------------------------------TODO-----------------------------------------

/*{
    todo: [
        "rename",
        "refactor for readability and simplicity",
        "add comments",
        "look at nesting levels"
    ]
}*/

//--------------------------------'CONSTANTS'----------------------------------

var YES = true;
var NO = false;

//--------------------------------HELPERS--------------------------------------

var currentPath = [];

function validate(obj, property) {
    var value = obj[property];

    return {
        against: function against(spec) {
            var isValid = YES, errors = [], unspecifiedProperties = [];

            if(spec.required && value === undefined) { // if it is required and not present
                isValid = NO;
                errors.push("required property: " + property + " was undefined");
            } else if(spec.validator && value) { //if there is a validator and it is present
                //validate it

                var result = spec.validator.call(currentPath, value);
                isValid = result.isValid;
                errors = errors.concat(result.errors);
                if(result.unspecifiedProperties){
                    unspecifiedProperties = unspecifiedProperties.concat(result.unspecifiedProperties);
                }

            } else if(!spec.validator){
                isValid = NO;
                errors.push('There is no validator for property: ' + property);
            }

            return { isValid: isValid, errors: errors, unspecifiedProperties: unspecifiedProperties};
        }
    };
}

//--------------------------------EXPORTS--------------------------------------

exports.doesObjConformToSpec = function doesObjConformToSpec(obj, spec)
/*{
    "description": "Tests the object against the provided specification."
}*/
{
    //console.log(currentPath);
    var isValid = YES, errors = [], unspecifiedProperties = [];
    for(var property in spec){
        if(spec.hasOwnProperty(property)){
            // test each property
            currentPath.push(property);
            var result = validate(obj, property).against(spec[property]);
            currentPath.pop();
            // add result to the validation data
            isValid &= result.isValid;
            errors = errors.concat(result.errors);
            unspecifiedProperties = unspecifiedProperties.concat(result.unspecifiedProperties);

        }
    }

    unspecifiedProperties = unspecifiedProperties.concat(Object.keys(obj).reduce(function(unspecifiedProperties, currentProperty){
        if(!spec.hasOwnProperty(currentProperty)){
            var basePath = currentPath.join('.');
            var path = "." + (basePath.length > 0 ? basePath + "." + currentProperty : currentProperty);
            unspecifiedProperties.push({property: currentProperty, path: path });
        }
        return unspecifiedProperties;
    }, []));

    return { isValid: Boolean(isValid), errors: errors, unspecifiedProperties: unspecifiedProperties };
};

exports.does = function does(obj)
/*{
    "description": "Alias for doesObjConformToSpec"
}*/
{
    return {
        conformTo: function conformTo(spec){
            return exports.doesObjConformToSpec(obj, spec);
        }
    };

};
