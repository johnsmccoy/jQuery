//1. Using jQuery, get all the titles of the products for sale and check whether 
// the results include "Taco Suit" and "Burger Suit". If they do, 
// log to console "Product exists!"

let productsTitles = $('.product h2').text;
console.log(productsTitles)
if(productsTitles.includes('Taco Suit' && 'Burger Suit')){
    console.log('Product Exists!');
}


//2. Using jQuery, when the form is submitted, 
// get the values of all input fields and log to console. 
// Log to console, whether the checkbox is checked or unchecked.

$('#section-form').click(function(){
    console.log($('#imput-name').val())
    console.log($('#imput-email').val())
    console.log($('#imput-password').val())
    console.log($('#subscribeToAlerts').is(':checked'));
});
