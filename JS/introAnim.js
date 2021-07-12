var delay = '^3300'; // Delay Value
var pageCSS = document.documentElement; // Get CSS Stylesheet

// Main Intro animation
if (window.sessionStorage.getItem('loaded') != 'true'){
  var typed = new Typed(".animate1", {
      strings: [
          "^300 I'm Bilal Qureshi.",
      ],
      typeSpeed: 60,
      loop: false,
      showCursor: true
    });
  window.sessionStorage.setItem('loaded', 'true'); // Set page loaded to true
  delay = '^3300';                                 // Set delay to the next section
  pageCSS.style.setProperty('--delay-fade', '3.4s') // Set the fade animation delay 
} else {
  // Reset all the values for introduction animation
  delay = '';
  pageCSS.style.setProperty('--delay-fade', '0s');
  document.getElementById("introduction").style.opacity = "0"; 
}

  // Sub heading animation
var typed2 = new Typed(".animate2", {
  strings: [
      delay +" about me",
  ],
  typeSpeed: 60,
  loop: false,
  showCursor: false
});




