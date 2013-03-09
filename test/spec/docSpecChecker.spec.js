/*{
    "description": "Jasmine tests for docSpecChecker."
}*/

"use strict";

//--------------------------------REQUIRES-------------------------------------

var docValidator = require('../../lib/docSpecChecker').docValidator;

//--------------------------------TESTS----------------------------------------

describe("docSpecChecker", function describeBase(){

    var validDoc;

    function fails(){
        expect("test").toBe("implemented");
    }

    beforeEach(function before_each(){

        validDoc = {
            description: "valid"
        };

        this.addMatchers({
            toBeTrue: function(){
                return typeof this.actual === "boolean" && this.actual;
            },
            toBeFalse: function(){
                return typeof this.actual === "boolean" && !this.actual;
            }
        });
    });

    it("validates docs with only a description", function testDescription(){

        var doc = {
            description: "test"
        };

        expect(docValidator(doc).isValid).toBeTrue();

        expect(docValidator({}).isValid).toBeFalse();

        doc = {
            description: ["a", "long", "valid", "description"]
        };

        expect(docValidator(doc).isValid).toBeTrue();
    });

    it("validates docs with a returns as well", function testReturns(){
        validDoc.returns = "short returns";

        expect(docValidator(validDoc).isValid).toBeTrue();

        validDoc.returns = ["a", "long", "returns"];

        expect(docValidator(validDoc).isValid).toBeTrue();

        {
            var inValidReturns = {
                description: "",
                returns: {

                }
            }, result = docValidator(inValidReturns);
            expect(result.isValid).toBeFalse();

            expect(result.errors[0]).toMatch(/Expected the property: returns to be a string or array of strings./);
        }

    });

    it("validates docs with 'properties'", function testProperties(){
        validDoc.properties = {
            prop1: "something",
            prop2: ["a", "long", "prop"],
            prop: {
                description: "a function",
                params: "only the one",
                returns: "awesome"
            }
        };

        expect(docValidator(validDoc).isValid).toBeTrue();
        var invalidProperties = {
            description: "valid",
            properties: "invalid"
        };
        var result = docValidator(invalidProperties);
        expect(result.isValid).toBeFalse();
        expect(result.errors.length).toEqual(0);

    });

    it("validates docs with params as a single string", function testShortParams(){
        validDoc.params = "a string";

        expect(docValidator(validDoc).isValid).toBeTrue();
    });

    it("validates docs with params as a array of strings", function testLongParams(){
        validDoc.params = ["a", "long", "param"];

        expect(docValidator(validDoc).isValid).toBeTrue();
    });

    it("validates docs with params as a dict", function testDictParams(){
        validDoc.params = {
            description: "an param"
        };
        expect(docValidator(validDoc).isValid).toBeTrue();
    });

    it("validates docs with params as an array of dicts", function testArrayOfParams(){
        validDoc.params = [
            {
                description: "param 1"
            },
            {
                description: "param 2"
            }
        ];

        expect(docValidator(validDoc).isValid).toBeTrue();
    });

    it("validates docs with params as an array of function signatures", function testArrayOfSignatures(){
        validDoc.params = [
            [
                { description: "signature 1, param 1"}
            ],
            [
                { description:  "signature 2, param 1"},
                { description: "signature 2, param 2"}
            ]
        ];

        expect(docValidator(validDoc).isValid).toBeTrue();
    });

    it("passes back a list of all the unspecified properties", function(){
        validDoc.BaseUnspecified = "";
        validDoc.params = {
            description: "",
            unspecifiedInParams: ""
        };
        validDoc.properties = {
            someProp: {
                description: "",
                unspecifiedInProperties: ""
            }
        };

        var result = docValidator(validDoc);

        expect(result.isValid).toBeTrue();

        expect(result.unspecifiedProperties.length).toBe(3);
    });

});
