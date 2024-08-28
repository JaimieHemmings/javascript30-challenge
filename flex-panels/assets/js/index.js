document.addEventListener('DOMContentLoaded', function() {
  // Code here
  const panels = document.querySelectorAll('.panel');

  function toggleOpen() {
    closePanels();
    this.classList.toggle('open');
  }

  function toggleActive(e) {
    if (e.propertyName.includes('flex') && this.classList.contains('open')) {
      this.classList.toggle('open-active');
    }
  }

  // Remove the classes 'open' and 'open-active' from all panels
  function closePanels() {
    panels.forEach(panel => panel.classList.remove('open', 'open-active'));
  }

  panels.forEach(panel => panel.addEventListener('click', toggleOpen));
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
});