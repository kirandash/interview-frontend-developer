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