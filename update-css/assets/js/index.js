document.addEventListener('DOMContentLoaded', function() {
  const image = document.getElementById('imageToy');
  const spaceSlider = document.getElementById('space-slider');
  const blurSlider = document.getElementById('blur-slider');
  const colorPicker = document.getElementById('color-picker');

  let mousedown = false;

  spaceSlider.addEventListener('mousedown', function() {
    mousedown = true;
  });

  spaceSlider.addEventListener('mouseup', function() {
    mousedown = false;
  });

  spaceSlider.addEventListener('mousemove', function() {
    if (mousedown) {
      image.style.padding = `${spaceSlider.value}px`;
    }
  });

  blurSlider.addEventListener('mousedown', function() {
    blurSlider = true;
  });
  
  blurSlider.addEventListener('mouseup', function() {
    blurSlider = false;
  });

  blurSlider.addEventListener('mousemove', function() {
    if (blurSlider) {
      image.style.filter = `blur(${blurSlider.value}px)`;
    }
  });

  colorPicker.addEventListener('change', function() {
    image.parentElement.style.backgroundColor = colorPicker.value;
  });

});