# /\*{}\*/ - braceDoc

Provides live JavaScript documentation. Using braceDoc syntax for function documentation allows it to be accessed when you need it. For example if you are debugging in the browser you can call _info() on the function you want to know about and it will return the documentation for that function.

braceDoc also supports side-loading documentation. This allows documentation to be added for native code or external libraries.


## Documentation

braceDoc adds an ```_info``` function to the Object's prototype. When looking for documentation braceDoc will try to load documentation from the ```_customDoc``` property of an object. If ```_customDoc``` is not present then it will try to load embedded documentation. Note that embedded documentation is only supported by functions.

### braceDoc format

braceDoc expects the documentation object to have the following properties

* description
    * A string or an array of strings describing the object
* args
    * A string if there is only one arg (this is the description for the arg), otherwise a signature array or an array of signature arrays (multiple signatures for the function). See args below.
* properties
    * Each property with an associated braceDoc object
* returns
    * A string or array of strings describing what the function returns

#### args
* arg doc
    * a braceDoc object (see above) with the following additional properties
        * required - true if the arg is required for the function, false otherwise. The default value is true.
        * exampleVal - a sensible example of what this value could be (if it is optional and has a default, put the default). Strings should be double quoted e.g "'abc'" -> 'abc'. The default is an empty object {} .
* signature array
    * an array of arg docs - one function signature multiple args
    * ```{ "description": "", "required": false, "exampleVal": "1, 2, 3" }```
* array of signature arrays
    * multiple function signatures

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

    function concat(somearg)  
    /*{  
        description: [
           "Returns a new array comprised of this array joined with the other array(s)",  
           "and/or value(s) passed in."
        ],  
        args: {  
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
