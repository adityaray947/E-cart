const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
  container.addEventListener('mouseover', () => {
    container.classList.add('hovered');
  });

  container.addEventListener('mouseout', () => {
    container.classList.remove('hovered');
  });
});