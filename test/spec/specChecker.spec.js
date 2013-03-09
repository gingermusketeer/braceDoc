/*{
    "description": "Jasmine tests for specChecker."
}*/

"use strict";

//--------------------------------REQUIRES-------------------------------------

var specChecker = require('../../lib/specChecker'),
    objConformToSpec = specChecker.doesObjConformToSpec,
    is = require('../../lib/is');

//--------------------------------'CONSTANTS'----------------------------------

var YES = true;
var NO = false;

//--------------------------------HELPERS--------------------------------------

function isString(obj) {
    var valid = is(obj).aString();
    return { isValid: valid, errors: [] };
}

//--------------------------------TESTS----------------------------------------

describe("specChecker", function() {

    beforeEach(function(){

        this.addMatchers({
            toBeTrue: function(){
                return typeof this.actual === "boolean" && this.actual;
            },
            toBeFalse: function(){
                return typeof this.actual === "boolean" && !this.actual;
            }
        });
    });

    it("can verify a required property with passed in validator", function(){
        var obj = {
            description: "string"
        };

        var spec = {
            description: {
                required: YES,
                validator: isString
            }
        };
        var desc = spec.description;
        spyOn(desc, "validator").andCallThrough();

        expect(objConformToSpec({}, spec).isValid).toBeFalse();

        expect(objConformToSpec(obj, spec).isValid).toBeTrue();

        expect(desc.validator).toHaveBeenCalledWith(obj.description);

        obj = {
            description: {some: "object"}
        };

        expect(objConformToSpec(obj, spec).isValid).toBeFalse();
        expect(desc.validator).toHaveBeenCalledWith(obj.description);
    });

    it("can verify an optional property with passed in validator", function itOp(){
        var spec = {
            returns: {
                required: NO,
                validator: isString
            }
        };
        spyOn(spec.returns, "validator").andCallThrough();

        var obj = {
            returns: "something"
        };

        expect(objConformToSpec(obj, spec).isValid).toBeTrue();
        expect(spec.returns.validator).toHaveBeenCalledWith(obj.returns);

        obj = {};

        expect(objConformToSpec(obj, spec).isValid).toBeTrue();
        expect(spec.returns.validator.callCount).toEqual(1);
    });

    it("provides an error message when there is no validator for a property", function errorMessage(){
        var spec = {
            description: {
                required: YES
            }
        };
        var obj = {
            description: ""
        };

        var result = objConformToSpec(obj, spec);
        expect(result.isValid).toBeFalse();

        expect(result.errors[0]).toMatch(/There is no validator for property: description/);
    });

    it("has an alias for objConformToSpec", function alias(){
        var spec = {
            desc: {
                required: false
            }
        };

        var obj = {};

        spyOn(specChecker, "doesObjConformToSpec").andCallThrough();

        specChecker.does(obj).conformTo(spec);

        expect(specChecker.doesObjConformToSpec).toHaveBeenCalled();
    });

    it("returns a list of unknown properties with paths", function unknownProperties(){
        var spec = {
            desc: {
                required: false,
                validator: function(){ return true; }
            }
        };

        var obj = {
            unSpecified: "yeah"
        };

        var result = specChecker.does(obj).conformTo(spec);

        expect(result.isValid).toBeTrue();
        expect(result.unspecifiedProperties.length).toBe(1);
        expect(result.unspecifiedProperties[0].property).toBe("unSpecified");
        expect(result.unspecifiedProperties[0].path).toBe(".unSpecified");
    });
});
