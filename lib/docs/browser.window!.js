/*{
    "description": "Provides all the documentation for the standard JavaScript DOM api.",
    "acknowledgements": "The majority of the actual documentation has been obtained from https://developer.mozilla.org/en-US/docs/DOM/window"
}*/

//--------------------------------DOC DEF & LOAD-------------------------------

/* global window:false */

Object.prototype._info.lib.loadDoc({
    description: "This section provides a brief reference for all of the methods, properties, and events available through the DOM window object. The window object implements the Window interface, which in turn inherits from the AbstractView interface. The window object represents the window itself. The document property of a window points to the DOM document loaded in that window. A window for a given document can be obtained using the document.defaultView property.",
    properties: {
        top: {
            description: "Returns a reference to the topmost window in the window hierarchy."
        },
        location: {
            description: ""
        },
        document: {
            description: "Returns a reference to the document contained in the window."
        },
        URL: {
            description: "Returns a Location object, which contains information about the URL of the document and provides methods for changing that URL. You can also assign to this property to load another URL."
        },
        XMLHttpRequest: {description: ""},
        XMLDocument: {description: ""},
        Worker: {
            description: "Workers are background tasks that can be easily created and can send messages back to their creators. Creating a worker is as simple as calling the Worker() constructor, specifying a script to be run in the worker thread.",
            params: {
                description: "The url to the script to be run in the worker process.",
                required: true,
                exampleVal: "'worker.js'"
            },
            returns: "A worker object."
        },
        Option: {
            description: "Used for creating an object representing an HTML option. Implements HTMLOptionElement.",
            params: [
                {
                    name: "text",
                    description: "the displayed text for the option",
                    required: false,
                    exampleVal: "option 1"
                },
                {
                    name: "value",
                    description: "the form value",
                    required: false,
                    exampleVal: "1"
                },
                {
                    name: "defaultSelected",
                    description: "a boolean which does not actually select the option, but is used to indicate the state of the defaultSelected property (of relevance for any future checks to check whether the option is meant to be selected by default)",
                    required: false,
                    exampleVal: true
                },
                {
                    name : "selected",
                    description: "a boolean to indicate whether the option will be 'selected'; if omitted, it will not be selected",
                    required: false,
                    exampleVal: true
                }
            ],
            returns: "An Option element."
        },
        Image: {
            description: "Used for creating an object representing an HTML img. Implements HTMLImageElement.",
            params: [
                {
                    name: "width",
                    description: "image width",
                    required: false,
                    exampleVal: 100
                },
                {
                    name: "height",
                    description: "image height",
                    required: false,
                    exampleVal: 200
                }
            ],
            returns: "An Image element"
        },
        DocumentType: {description: ""},
        CDATASection: {description: ""},
        Comment: {description: ""},
        Text: {description: ""},
        Element: {description: ""},
        Attr: {description: ""},
        Document: {description: ""},
        DocumentFragment: {description: ""},
        DOMImplementation: {description: ""},
        performance: {description: ""},
        console: {description: ""},
        parent: {description: ""},
        opener: {description: ""},
        frames: {description: ""},
        self: {description: ""},
        defaultStatus: {description: ""},
        status: {description: ""},
        name: {description: ""},
        length: {description: ""},
        closed: {description: ""},
        pageYOffset: {description: ""},
        pageXOffset: {description: ""},
        scrollY: {description: ""},
        scrollX: {description: ""},
        screenY: {description: ""},
        screenX: {description: ""},
        innerWidth: {description: ""},
        innerHeight: {description: ""},
        outerWidth: {description: ""},
        outerHeight: {description: ""},
        frameElement: {description: ""},
        crypto: {description: ""},
        navigator: {description: ""},
        toolbar: {description: ""},
        statusbar: {description: ""},
        scrollbars: {description: ""},
        personalbar: {description: ""},
        menubar: {description: ""},
        locationbar: {description: ""},
        history: {description: ""},
        screen: {description: ""}
    }
}, window);
