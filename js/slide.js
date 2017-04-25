// Function for jquery slider
$(function() {
    $(".rslides").responsiveSlides();
  });

// Function to customize slider
$(".rslides").responsiveSlides({
  auto: true,             // Auto animation
  speed: 500,             // Length of window animation
  timeout: 5000,          // Time between image transitions
  pager: false,           // This will display the pager
  nav: false,             // This will display the navigation bar
  random: false,          // Makes imgaes appear randomly
  pause: false,           // Makes slideshow pause when mouse is hovering over slideshow
  pauseControls: false,   // This will add a button to pause the slideshow
  prevText: "Previous",   // Adds a previous text button
  nextText: "Next",       // Adds a next text button
  maxwidth: "",           // This sets the width of the slideshow in pixels
  navContainer: "",       // This sets where the navigation bar is appended to, default is after the 'ul'
  manualControls: "",     // This is used to set custom navigation
  namespace: "rslides",   // This is used to change the default namesapce
  before: function(){},   // Before callback function
  after: function(){}     // After callback function
});