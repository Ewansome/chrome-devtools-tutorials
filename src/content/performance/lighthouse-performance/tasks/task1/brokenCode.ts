// Problematic image loading
images.forEach(src => {
  const img = document.createElement('img');
  img.src = src; // No lazy loading, no size attributes
  img.style.width = '100%';
  gallery.appendChild(img);
});
