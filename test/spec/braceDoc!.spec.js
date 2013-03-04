/*{
    "description": "Jasmine tests for main braceDoc code."
}*/

"use strict";

//--------------------------------REQUIRES-------------------------------------

require('../../lib/braceDoc!.js');

//--------------------------------TESTS----------------------------------------


describe("javascript engine", function baseEnvironment(){
    beforeEach(function(){
        this.addMatchers({
            toSupportEmbeddedDocumentation: function(){
                this.message = function(){
                    return ["does not support embedded documentation", "support embedded documentation"];
                };
                
                return this.actual === true;
            }
        });
    });
    it("handles embedded documentation",function embeddedTest(){
        var infoFunc = Object.prototype._info,
        docRegex = infoFunc.lib.docRegex;

        expect(docRegex.test(infoFunc)).toSupportEmbeddedDocumentation();
    });
});

describe("braceDoc!", function(){

    describe("parses embbeded documentation", function(){
        it("returns doc string when valid", function(){

            var func = function()/*{"description": "awesome description"}*/{};

            var doc = func._info();

            expect(doc).toMatch(/description:\n\s*awesome description/);
        });

        it('provides an error if documentation is not present', function(){
            var func = function(){};

            var doc = func._info();

            expect(doc).toMatch(
                /error:\n\s*This object does not have embedded or custom documentation./
                );
        });

        it('provides an error if the doc is not json', function(){
            var func = function()
            /*{ something: "does not have quotations around key" }*/ {};

            var doc = func._info();

            expect(doc).toMatch(/error:\s*Failed to parse braceDoc comment.\s*exception:/);
        });
    });

    describe("gets documentation from _customDoc", function(){
        it('allows _customDoc to be a function', function(){
            var func = function(){};
            func._customDoc = function(){
                return { description: "another awesome description" };
            };
            var doc = func._info();
            expect(doc).toMatch(/description:\s*another awesome description/);
           
        });

        it('allows a _customDoc fuction to be passed arguments', function(){
            var obj = {_customDoc: function(){}};

            spyOn(obj, "_customDoc");

            obj._info(1,2,3);

            expect(obj._customDoc).toHaveBeenCalledWith(1,2,3);

        });

        it('allows _customDoc to be an object', function(){
            var func = function(){};
            func._customDoc = {
                description: "another awesome description"
            };

            var doc = func._info();
            expect(doc).toMatch(/description:\s*another awesome description/);
        });

        it('allows _customDoc to be used with any object (not just functions)', function(){
            var fakeWindow = {
                document: {
                    getElementById: function(){}
                },
                Array: {},
                _customDoc: {
                    description: "a window into the web."
                }
            };
            var doc = fakeWindow._info();
            expect(doc).toMatch(/description:\s*a window into the web/);
        });

    });

    it("exposes the lib that it is built upon", function(){
        var lib = Object.prototype._info.lib;

        expect(lib).toBeDefined();

        expect(lib.docRegex).toBeDefined();
        expect(lib.parseEmbeddedDocFrom).toBeDefined();
        expect(lib.getDocumentationFor).toBeDefined();
        expect(lib.prettyStringify).toBeDefined();
    });

    describe("loads externally defined documentation", function(){

        var lib = Object.prototype._info.lib;

        var object = {
            child: function(){}
        };

        it("returns status for valid external doc", function(){

            var externalDoc = {
                description: "externally defined description",
                properties:{
                    child: {
                        "description": "child description"
                    }
                }
            };

            var status = lib.loadDoc(externalDoc, /*into*/ object);

            expect(object._info()).toMatch(/description:\s*externally defined description/);
            expect(object.child._info()).toMatch(/description:\s*child description/);

            expect(status.errors.length).toEqual(0);

            expect(status.loadedDocs).toEqual(2);    
        });

        it("returns status for invalid external doc", function(){
            var externalDoc = {
                description: "valid base obj",
                properties: {
                    nonExistantChild: {
                        description: "does not exist"
                    },
                    child: {
                        description: "valid child",
                        properties: {
                            anotherNonExistantProp: {
                                description: "not present"
                            }
                        }
                    }
                }
            };

            var status = lib.loadDoc(externalDoc, /*into*/ object);

            expect(object.nonExistantChild).toBeUndefined();

            expect(status.errors.length).toEqual(2);

            expect(status.errors[0].message).toMatch("unknown property: nonExistantChild");

            expect(status.errors[1].message).toEqual("unknown property: anotherNonExistantProp");

        });
    });
});
