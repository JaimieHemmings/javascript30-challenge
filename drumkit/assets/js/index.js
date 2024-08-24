// Ensure document is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Add event listener for key press
  window.addEventListener('keydown', function(e) {
    // Pass keycode to playSound function
    playSound(e.keyCode);
  });

  // Add event listener to account for clicks
  const keys = document.querySelectorAll('.key');
  
  // Iterate through all data-key attributes
  keys.forEach(key => key.addEventListener('click', function(e) {
    const keyCode = this.getAttribute('data-key');
    // Pass keycode to playSound function
    playSound(keyCode);
  }));

  // Remove transition effect after it has ended
  keys.forEach(key => key.addEventListener('transitionend',removeTransition));
});

/**
 * @param {int} Keycode Value of key pressed 
 * @description Play sound based on keycode
 */
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e}"]`);
  const key = document.querySelector(`.key[data-key="${e}"]`);
  if (!audio) return; // End fucntion if no associated soundfile
  audio.currentTime = 0; // Play sound from beginning if already playing
  audio.play();
  key.classList.add('playing');
}

/**
 * @param {*} e 
 * @description Remove transition effect after it has ended 
 */
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // Skip if not transform
  this.classList.remove('playing');
}