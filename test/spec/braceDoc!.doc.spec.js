/*{
    "description": "Jasmine tests for main braceDoc code."
}*/

"use strict";

//--------------------------------REQUIRES-------------------------------------

require('../../lib/braceDoc!.js');
var docValidator = require('../../lib/docSpecChecker').docValidator;

//--------------------------------TESTS----------------------------------------


describe("braceDoc!.doc", function(){

    describe("has valid braceDoc comments for exposed", function(){
        // There should not be any errors

        var errorRegex = /error:/;
        var infoFunc = Object.prototype._info;
        var lib = infoFunc.lib;
        it("info function", function(){
            expect(infoFunc._info()).not.toMatch(errorRegex);
        });

        it("info.lib object", function(){
            expect(lib._info()).not.toMatch(errorRegex);    
        });
       
        for(var property in lib) {
            if(lib.hasOwnProperty(property) && property !== "_customDoc"){
                
                it("info.lib." + property, (function(property){
                    return function(){
                        var doc = lib[property]._info.lib.getDocumentationFor(lib[property]);
                        expect(lib[property]._info()).not.toMatch(errorRegex);
                        expect(docValidator(doc).isValid).toEqual(true);
                    };
                }(property)));

            }
        }
    });
});
