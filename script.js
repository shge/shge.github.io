$(function() {

// Navbar
$('#nav').load('/nav.html?201804062022');
$('.navbar-burger').on('click', function(){
  $('.navbar-burger, .navbar-menu').toggleClass('is-active');
});

});
