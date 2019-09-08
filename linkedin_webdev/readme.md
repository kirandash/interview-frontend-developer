# LinkedIn - Mastering Web Developer Interview Code
## 1. How do you use the data- attribute in HTML?
1. data-WHATEVER
2. Access in CSS with [] and content: attr(data-tooltip);
3. Access in JS using dataset

## 2. Are you comfortable using jQuery?
Introduced in 2006.
80% of all websites.
JS library. - fns on top of JS
Compatible across browsers.
Easy to write code.
Features:
1. DOM management: querySelector and querySelectorAll replaced with easey $("") selectors
2. AJAX
3. Chaining

https://www.mockaroo.com/ - To create test JSON data

$(function(){
    $("button").on("click", function(item){
        $.ajax({
            method: "GET",
            url: "MOCK_DATA.json",
            dataType: "json"
        }).done(function(data){
            $("ul").html("");
            $.each(data, function(key, val){
                $("ul").append(`<li>${val.first_name}</li>`);
            }); // each
        }); // ajax
    }); // click
}); //jQuery IIFE

## 3. Describe when you should use the bind() method
Binding:
What is this?
Meaning depends on context.
Can be redefined using bind()
Ex: return { .... }.bind(this)

## 4. AJAX to load an External file
1. Asynchronous
2. XMLHttpRequest();
3. open(), send(), onreadystatechange()

## 5. Have you used JavaScript templates?
1. Many Options
2. EJS: embedded JS templates e.g. canjs
3. <% %>

## 6. How do you manipulate the DOM?
1. Accessing DOM: getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), querySelectorAll()
2. Managing nodes: innerHTML, createElement(), appendChild(), addEventListener()

## 7. How do you search using functional programming?

## 8. How do you use a constructor to create instances?
How constructors work?
1. Using objects
2. Objects & closures
3. Function methods

Create your own menu toggle with constructor

## 9. How do you use arrow functions in ES6?
Arrow Functions:
1. ES6 Shortcuts for anonymous functions.
Ex: 'click', function(e){} 
or let add = function(){} etc.
2. Implicit returns : if only one arguments
3. No curly braces if just one line
4. Parameter rules: (a,b,c) or just a =>  with out paranthesis if only one parameter
5. Doesn't bind this
6. new can not be used. So just drop the new.

## 10. How do you use the Fetch API?
Using Fetch:
1. Use promises
2. Simple to use
3. Full access to features
4. Parse formats
5. Lot simpler than XMLHttpRequest()

## 11. How do your render JSON to a DOM element?
JSON:
1. JavaScript Object Notation
2. Based on JavaScript objects
3. language independent
4. Easy to read and parse
Tool to visualize JSON in better format:
https://jsoneditoronline.org/

## 12. How does an IIFE work?
IIFE: Immediately invoked function expression = anonymous function + wrapping paranthesis to make it an expression and another pair of paranthesis to invoke it immediately
1. All functions inside IIFE are creating a closure. Thus having access to enclosed variables only.
2. Can pass arguments to IIFE function

## 13. How does immutability work in JavaScript?
1. Immutable: An element is unchangable. For example: const but with arrays and object the values can be changed.
2. So, immutability is a concept of writing functional program in such a way that the value of original data does not change.
3. For example: using map instead of forEach to protect data of array from being changed.
Or clone objects or arrays so that it does not effect the main instance.

## 14. How would you use of JavaScript reduce()?
Functional programming way : To find sum of items of an arrow

## 15. Quick Concepts: Do you have experience linting your code?
How linting works?
1. Analyzes code
2. Works with editor
3. Customizable
4. Shareable

Popular linters:
1. JSLint - Douglas Crockford - hard to customize
2. JSHint - Easily customizable
3. ESLint - simple
4. IDEs

What can they do?
Error detection for:
1. HTML
2. JavaScript
3. CSS/SASS/LESS/PostCSS
4. Frameworks

## 16. What are event bubbling and propagation about?
Event Propagation:
1. addEventListener(name, callback, propagation) Ex: addEventListener('click', function(){}, false);
propagation: true/false : direction of event propagation. false = event captured at e.target and then it goes up
2. Capturing/Bubbling
3. stopPropagation() : to prevent event bubbling in the DOM

## 17. What does "use strict" do?
Strict Mode. Some browsers allow to set it.
1. 'use strict';
2. strict vs sloppy mode
3. no var declaration will throw error in strict mode, in sloppy mode it will automatically create for you
4. Place 'use strict' inside IIFE not globally or else some browsers will throw error. Since placing globally might affect other js code in our project
5. Better to 'use strict' at function level where you want instead of whole script

Other Features:
1. Invalid assignments e.g undefined
2. Property and params e.g. duplicates etc will throw error

## 18. What is a callback and how do you use it?
Callbacks:
1. Executed asynchronously
2. Often tied to events
3. Uses anonymous functions

## 19. What is the relationship between promises and callbacks?
1. Promises: Objects in JS that describes what to happen when a time based operation happens. Provides better readability and easy to use for asyncronous calls.
1.1 Execution guarantee.
1.2 Resolve only once. : Can succeed or fail only once. Not more
1.3 Easier Chaining. : Promise chain will stop if there is any error.
1.4 Error Propagation: If error happens any where it is going to stop
2. Callbacks: Functions passed as arguments. Asynchronous. Problems: not clear.
2.1 Execution not guarantee.
2.2 Resolve multiple times
2.3 Difficult Chaining.
2.4 No error Propagation

## 20. What is the virtual DOM?
Traditional DOM:
1. Document Object Model
2. Time consuming - Any change in data to reflect on page needs a page reload or DOM modification
3. Costly - in terms of performance
Ex: removeChild(), appenChild() : manually remove or add DOM based on data
Virtual DOM:
1. Latest technology
2. Diff DOM & update
3. Focus on model - DOM automatically updates
Ex: *ngFor and *ngIf etc - modifies DOM as per data in Angular/React

## 21. What is variable hoisting and how do you guard against it?
Hoisting:
1. JS Moves declaration: variables and function declarations are moved to the top before executing the code.
2. Assignments not hoisted. Only declaration is.
3. let can be useful. (let and const are not hoisted. Only var is hoisted)
4. Prefer function declaration over function expression if invoking before or use IIFE

## 22. What tooling options have you used in the past?
JavaScript Tooling
1. Tools for dev purpose e.g. minifying css, js, compiling SASS files, running live server, watching file changes
2. Customizable
3. Grunt, gulp, webpack
4. NPM & cli

GruntJS:
1.1 Task runner: e.g. minifying css, js, compiling SASS files, running live server, watching file changes etc. We can set a default set of tasks to run while running a grunt.js configuration file
Ex: grunt.registerTask('default', ['concat', 'sass', 'connect', 'watch']);
grunt.loadNpmTasks('grunt-sass');
1.2 Uses JSON structure instead of JS functions

GulpJS:
1. Tasks are JS functions instead of JSON content like Grunt
2. Thus easier to use. Better functionality
3. Simple setup and faster
4. Gulp uses the concept of stream. It runs each task separately and handles them in memory.

WebPack:
1. Popular recently because of modular approach by Angular etc.
2. Modular focus. Thus popular in angular etc
3. Individual processing.
4. Independent processing of modules unlike gruntJS.
5. Advanced features
6. Complex and powerful

## 23. When would you use recursion?
1. Recursion happens anytime a function calls itself.
function a(){
    a();
}
Will loop until system runs out of memory.
2. Needs base case. e.g. a condition to call the function. not always.
3. Recursions are useful when your result is dependent on previous results e.g. creating fibonacci sequence.
4. Usually a loop that runs backwards, till it reaches the base case
5. Not much used. But fancier way to deal with loops. Also can be done with other loops eg for loop

## 24. Can you build a Sass mixin?
SASS (Syntactically Awesome StyleSheet)
SASS Mixins:
1. Functions
2. Take arguments
3. Initialized with defaults

npm init
npm install node-sass

@mixin backImage($image, $height: 30)
@include backImage('../image.jpeg')