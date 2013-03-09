/*{
    "description": "Jasmine tests for main braceDoc code."
}*/

"use strict";

//--------------------------------REQUIRES-------------------------------------

var docValidator = require('../../lib/docSpecChecker').docValidator,
    fs = require('fs');

//--------------------------------'CONSTANTS'----------------------------------

var docsPath = 'lib/docs/';

var docFileNames = fs.readdirSync(docsPath).filter(function filterDocFileName(fileName){
    return fileName.indexOf('.js') > 0;
});

//--------------------------------HELPERS--------------------------------------

describe("docs directory", function baseDocs(){

    var currentDoc;
    var currentScope;

    beforeEach(function beforeIt(){
        this.addMatchers({
            toBeAValidDoc: function(){
                var docName = this.actual;
                // Jasmine node tests are not sandboxed so need to keep original _info function if present
                var oldObjectInfo = Object.prototype._info || null;
                Object.prototype._info = {
                    lib:{
                        loadDoc: function fakeDocLoader(doc, scope){
                            currentDoc = doc;
                            currentScope = scope;
                        }
                    }
                };

                require('../../lib/docs/' + docName);

                var result = docValidator(currentDoc);
                var unspecifiedProperties = result.unspecifiedProperties.reduce(function(previous, current){
                    return previous + current.property + " with path: " + current.path + " \n";
                }, "Illegal unknown properties: \n");
                this.message = function(){
                    return [result.errors + unspecifiedProperties, result.errors + unspecifiedProperties];
                };

                // Put the old function back
                Object.prototype._info = oldObjectInfo;
                return result.isValid && result.unspecifiedProperties.length === 0;
            }
        });
    });

    describe("has valid docs:", function testDocs(){
        function testDoc(docName){
            it(docName, function(){
                expect(docName).toBeAValidDoc();
            });
        }

        for (var i = docFileNames.length - 1; i >= 0; i--) {
            testDoc(docFileNames[i]);
        }
    });
});
