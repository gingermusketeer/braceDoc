/*{
    "description": "Jasmine tests for is helper."
}*/

"use strict";

//--------------------------------REQUIRES-------------------------------------

var is = require('../../lib/is');

//--------------------------------CONSTANTS------------------------------------

var types = [
    "aString", 1, {}, [], /abc/
];

//--------------------------------HELPERS--------------------------------------

function testTypes(tester) {
    var numPass = 0;
    for (var i = types.length - 1; i >= 0; i--) {
        if(tester(types[i])){
            numPass += 1;
        }
    }

    return numPass;
}

//--------------------------------TESTS----------------------------------------

describe("is", function testBase(){

    beforeEach(function before_each(){

        this.addMatchers({
            toBeTrue: function(){
                return typeof this.actual === "boolean" && this.actual;
            },
            toBeFalse: function(){
                return typeof this.actual === "boolean" && !this.actual;
            }
        });
    });

    it("can test if something is a string", function stringTest(){
        var aString = "";

        expect(is(aString).aString()).toBeTrue();

        expect(testTypes(function(obj){
            return is(obj).aString();
        })).toEqual(1);

    });

    it("can test if something is an array", function arrayTest(){
        var anArray = [1, 2, 3];

        expect(is(anArray).anArray()).toBeTrue();

        expect(testTypes(function(obj){
            return is(obj).anArray();
        })).toEqual(1);
    });

    it("can test if something is an array of arrays", function arrayOfArraysTest(){
        var arrays = [
            [1,2,3], ["abc", "def"]
        ], mixed = [
            [1,2,3], "not an array"
        ];

        expect(is(arrays).anArrayOfArrays()).toBeTrue();

        expect(is(mixed).anArrayOfArrays()).toBeFalse();

        expect(testTypes(function(obj){
            return is(obj).anArrayOfArrays();
        })).toEqual(0);
    });

    it("can test if something is a array of strings", function stringArrayTest(){
        var stringArray = [
            "an", "array", "of", "strings"
        ], mixedArray = [
            "a", "mixed", 1
        ];

        expect(is(stringArray).anArrayOfStrings()).toBeTrue();

        expect(is(mixedArray).anArrayOfStrings()).toBeFalse();

        expect(testTypes(function(obj){
            return is(obj).anArrayOfStrings();
        })).toEqual(0);

    });

    it("can test if something is a dictionary like object", function dictTest(){
        var aDict = {
            something: "YES"
        };

        expect(is(aDict).aDict()).toBeTrue();

        expect(testTypes(function(obj){
            return is(obj).aDict();
        })).toEqual(1);
    });

    it("can test if something is an array of dicts", function dictArrayTest() {
        var anArrayOfDicts = [
            { a: "dict" }, { another: "dict" }
        ], mixedArray = [
            { a: "dict"}, [], 1, "asd"
        ];

        expect(is(anArrayOfDicts).anArrayOfDicts()).toBeTrue();

        expect(is(mixedArray).anArrayOfDicts()).toBeFalse();

        expect(testTypes(function(obj){
            return is(obj).anArrayOfDicts();
        })).toEqual(0);

    });
  
});