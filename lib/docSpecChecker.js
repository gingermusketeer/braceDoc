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


//simplify - decompose
var paramsSpec = {
    required: NO,
    validator: function paramsSpecValidator(params) {
        var isValid = YES, errors = [], result, param, unspecifiedProps = [];
        // is it a string
        if(is(params).aStringOrArrayOfStrings()){
            //remove this
        } else if(is(params).anArray()) {  // is it an array
            if(is(params).anArrayOfArrays()) { // is it an array of arrays
                for (var i = params.length - 1; i >= 0; i--) {
                    var signature = params[i];
                    this.push(i);
                    for (var j = signature.length - 1; j >= 0; j--) {
                        param = signature[j];
                        this.push(j);
                        result = objConformToSpec(param, docSpec);
                        this.pop();
                        isValid = isValid && result.isValid;
                        errors = errors.concat(result.errors);
                        unspecifiedProps = unspecifiedProps.concat(result.unspecifiedProperties);
                        // result = objConformToSpec(param, docSpec); // || when it is a function
                        // isValid |= result.isValid;
                        // errors = errors.concat(result.errors);
                    }
                    this.pop();
                }
            } else if(is(params).anArrayOfDicts()){  // or is it an array of objects
                for (var z = params.length - 1; z >= 0; z--) {
                    param = params[z];
                    this.push(z);
                    result = objConformToSpec(param, docSpec);
                    this.pop();
                    isValid = isValid && result.isValid;
                    errors = errors.concat(result.errors);
                    unspecifiedProps = unspecifiedProps.concat(result.unspecifiedProperties);
                }
            } else {
                isValid = NO;
                errors.push('params can only be an array of signatures, a dictionary or a string');
            }
        } else if(is(params).aDict()){
            result = objConformToSpec(params, docSpec);
            isValid =  isValid && result.isValid;
            errors = errors.concat(result.errors);
            unspecifiedProps = unspecifiedProps.concat(result.unspecifiedProperties);
            // result = objConformToSpec(params, docSpec); // || when it is a function
            // isValid |= result.isValid;
            // errors = errors.concat(result.errors);

        } else { // is it an object
            isValid = NO;
            errors.push('params can only be an array of signatures, a dictionary or a string');
        }
        return { isValid: isValid, errors: errors, unspecifiedProperties: unspecifiedProps };
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
        var valid = NO, errors = [], unspecifiedProps = [];
        if(is(properties).aDict()){

            valid = YES;
            for(var property in properties){
                if(Object.prototype.hasOwnProperty.call(properties, property)){
                    var value = properties[property];
                    //does each property conform to docSpec

                    var result;
                    if(is(value).aDict()){
                        this.push(property);
                        result = objConformToSpec(properties[property], docSpec);
                        this.pop();
                        unspecifiedProps = unspecifiedProps.concat(result.unspecifiedProperties);
                    } else {
                        result = isStringOrStringArray(value, 'properties');
                    }
                    valid &= result.isValid;
                    errors = errors.concat(result.errors);

                }
            }
        }
        return { isValid: Boolean(valid), errors: errors, unspecifiedProperties: unspecifiedProps };

    }
};

var exampleValSpec = {
    required: NO,
    validator: function exampleValValidator(obj){
        return isRawJavascript(obj, 'exampleVal');
    }
};

var requiredSpec = {
    required: NO,
    validator: function paramRequiredValidator(obj){
        return isBoolean(obj, 'required');
    }
};

docSpec = {
    description: descriptionSpec,
    returns: returnsSpec,
    properties: propertiesSpec,
    params: paramsSpec,
    exampleVal: exampleValSpec,
    required: requiredSpec
};

//--------------------------------EXPORTS--------------------------------------

exports.docValidator = function docValidator(doc)
/*{
    "description": "Tests the passed in documentation against the braceDoc specification",
    "params": "The documentation to be checked.",
    "returns": "An object with isValid and the array of errors that occurred."
}*/
{
    return objConformToSpec(doc, docSpec);
};

