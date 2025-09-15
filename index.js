document.addEventListener('DOMContentLoaded', function() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.getElementById('dynamic-image');

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
      const newImageSrc = this.src; 
      mainImage.src = newImageSrc;
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active-thumbnail'));

            this.classList.add('active-thumbnail');
        });
    });
});