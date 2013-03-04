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

function validate(obj, property) {
    var value = obj[property];

    return {
        against: function against(spec) {
            var isValid = YES;
            var errors = [];
            if(spec.required && value === undefined) { // if it is required and not present
                isValid = NO;
                errors.push("required property: " + property + " was undefined");
            } else if(spec.validator && value) { //if there is a validator and it is present
                //validate it

                var result = spec.validator(value);
                isValid = result.isValid;
                errors = errors.concat(result.errors);
            } else if(!spec.validator){
                isValid = NO;
                errors.push('There is no validator for property: ' + property);
            }

            return { isValid: isValid, errors: errors };
        } 
    };
}

//--------------------------------EXPORTS--------------------------------------

exports.doesObjConformToSpec = function doesObjConformToSpec(obj, spec) 
/*{
    "description": "Tests the object against the provided specification."
}*/
{
    var isValid = YES;
    var errors = [];
    for(var property in spec){
        if(spec.hasOwnProperty(property)){
            // test each property
            var result = validate(obj, property).against(spec[property]);
            
            // add result to the validation data
            isValid &= result.isValid;
            errors = errors.concat(result.errors);
            
        }
    }
        
    return { isValid: Boolean(isValid), errors: errors };
};

exports.does = function does(obj)
/*{
    "description": "Alias for doesObjConformToSpec" 
}*/
{
    return {
        conformTo: function conformTo(spec){
            exports.doesObjConformToSpec(obj, spec);
        }
    };
    
};