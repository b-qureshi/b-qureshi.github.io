// Main page delay
delay = '^3300';
fadeInAnim = document.documentElement;

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
  window.sessionStorage.setItem('loaded', 'true')

  delay = '^3300';
  fadeInAnim.style.setProperty('--delay-fade', '3.4s')
} else {
  delay = '';
  fadeInAnim.style.setProperty('--delay-fade', '0s');
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




