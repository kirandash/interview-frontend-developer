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