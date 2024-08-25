# javascript30-challenge

With a recent focus on Python while working with Flask and Django I figured I would revisit JavaScript to keep my mind fresh. The idea behind the challenge is to create a small, unique JavaScript program/application/functionality each day.

No Jquery, but I did/will use Bootstrap to minimise the amount of CSS I am writing in order to focus on the JavaScript aspects.

More information about the challenge [here.](https://javascript30.com/)

[Visit the site!](https://jaimiehemmings.github.io/javascript30-challenge/index.html)

- Day 01: Drum Kit
  - A simple challenge to play .wav sounds upon a key press or click event.
  - For the Drumkit challenge I implemented event listeners for click and key press events. Once the event was fired it would play the appropriate drumkit sample sound. The most difficult aspect of this challenge was implementing appropriate animations for keypresses but this was resolved easily by checking for the transform property and then removing the class name that was applied for the animation.
 
- Day 02: JavaScript Analogue Clock
  - Render and animate an analogue clock using the JavaScript Date functionality
  - This challenge was actually a lot easier than I had imagined it to be. It was solved simply by using the Date method in JavaScript then using some basic math to resolve the rotation of the individual hands and setting a transform origin on them.
  - Additionally, setTimeout was used to continuously update the clock every second.