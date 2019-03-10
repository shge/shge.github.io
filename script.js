$(function() {

// Navbar
$('#nav').load('/nav.html?201804062022');
$('#footer').load('/footer.html?201903101955');
$('.navbar-burger').on('click', function(){
  $('.navbar-burger, .navbar-menu').toggleClass('is-active');
});

});
