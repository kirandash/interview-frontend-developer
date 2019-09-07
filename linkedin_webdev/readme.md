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