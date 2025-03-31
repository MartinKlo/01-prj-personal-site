document.querySelector('.hamburger').addEventListener('click', function () {
  const navbarMenu = document.querySelector('.navbar ul');
  navbarMenu.classList.toggle('show'); // Toggle the 'show' class to display/hide the menu
});

window.addEventListener('load', () => {
  // Wait for the high-quality image to load
  const highQualityImage = new Image();
  highQualityImage.src = 'img/Xuecheng Liu - China.jpg';
  highQualityImage.onload = () => {
    // Add the 'loaded' class to the body to trigger the transition
    document.body.classList.add('loaded');
  };
});
