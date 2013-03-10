# /\*{}\*/ - braceDoc [![Build Status](https://travis-ci.org/gingermusketeer/braceDoc.png?branch=master)](https://travis-ci.org/gingermusketeer/braceDoc)

Provides live JavaScript documentation. Using braceDoc syntax for function documentation allows it to be accessed when you need it. For example if you are debugging in the browser you can call _info() on the function you want to know about and it will return the documentation for that function.

braceDoc also supports side-loading documentation. This allows documentation to be added for native code or external libraries.


## Documentation

braceDoc adds an ```_info``` function to the Object's prototype. When looking for documentation braceDoc will try to load documentation from the ```_customDoc``` property of an object. If ```_customDoc``` is not present then it will try to load embedded documentation. Note that embedded documentation is only supported by functions.

### braceDoc format

braceDoc expects the documentation object to have the following properties

* description
    * A string or an array of strings describing the object
* params
    * A string if there is only one param (this is the description for the param), otherwise a param doc object, a signature array or an array of signature arrays (multiple signatures for the function). See params below.
* properties
    * Each property with an associated braceDoc object
* returns
    * A string or array of strings describing what the function returns
* required
    * true if it is required, false otherwise. The default value is true. This is mainly used for documenting function parameters.
* exampleVal
    * A sensible example of what this could be (if it is optional and has a default, put the default). Strings should be double quoted e.g "'abc'" -> 'abc'. The default is an empty object {}. Again this is mainly used for function parameters.

#### params
* param doc
    * a braceDoc object (see above)
        * ```{ "description": "", "required": false, "exampleVal": "'1, 2, 3'" }```
    * or a string
        * ```"the description for the param"```
* signature array
    * an array of param docs - one function signature multiple params
        * ```[{ "description": "" }, { "description": "" }]```

* array of signature arrays
    * multiple function signatures
        * ```[[/*signature array 1*/], [/*signature array 2*/]]```

### Embedded Documentation

Embedded documentation is only available to functions. It must be valid JSON and it must be between the closing bracket of the function's parameters and the opening brace of the implementation.

    function()
    /*{}*/ <-- braceDoc goes here
    {
        /*implementation goes here*/
    }

## Using braceDoc

### in the browser

To use braceDoc in the browser simply include the braceDoc script in html.

    <script src="braceDoc!.js" type="text/javascript"></script>

### with Node

    require('braceDoc!.js')

## Javascript standard library docs

See lib/docs for all the standard libraries that have been documented so far.

Please contribute to these doc files

## Examples

Documenting a function.

    function concat(someParam)
    /*{
        description: [
           "Returns a new array comprised of this array joined with the other array(s)",
           "and/or value(s) passed in."
        ],
        params: {
            description: "Arrays and/or values to concatenate to the resulting array.",
            required: true,
            exampleVal: [1, 2, 3]
        },
        returns: [
            "The new array containing the elements from the array on which it ",
            "was called followed by the arguments passed in",
        ]
    }*/
    {
        /*implementation...*/
    }


Retrieving the documentation.

    concat._info()


## Contributing
In lieu of a formal style-guide, take care to maintain the existing coding style. Add Jasmine tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## License
Copyright (c) 2013 Max Brosnahan
Licensed under the MIT license.
