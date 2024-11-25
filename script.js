

// Get the text element
const textElement = document.querySelector("#greeting");

// Split the text content into spans
const textContent = textElement.textContent;
textElement.innerHTML = textContent
  .split("")
  .map(char => `<span class="char">${char}</span>`)
  .join("");

// Select all spans
const chars = document.querySelectorAll(".char");

// Animate the characters
gsap.from(chars, {
  opacity: 0,
  y: 50,  
  x: 50,
  stagger: 0.05,
  duration: 5,
  repeat: -1,
  ease: "power3.out"
});



 // Animate the hero section
 gsap.timeline()

 
 
 // Animate the image
 .from(".text-content img", {
   opacity: 0,
   scale: 0.8,
   repeat: -1,
   duration: 1,
   ease: "back.out(1.7)"
 }, "-=0.5") // Start slightly before the previous animation ends


 // Animate the paragraph
 .from(".hero p", {
   opacity: 0,
   y: -100,
   
   repeat: -1,
   duration: 1,
   ease: "power3.out"
 }, "-=0.5"); // Start slightly before the previous animation ends