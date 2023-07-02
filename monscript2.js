const galleryMain = document.querySelector('.image-gallery-main');
const galleryThumbnails = document.querySelectorAll('.image-gallery-thumbnails img');

let currentIndex = 0;

galleryThumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = index;
    updateGallery();
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = galleryThumbnails.length - 1;
    }
    updateGallery();
  } else if (event.key === 'ArrowRight') {
    currentIndex++;
    if (currentIndex >= galleryThumbnails.length) {
      currentIndex = 0;
    }
    updateGallery();
  }
});

function updateGallery() {
  galleryMain.innerHTML = '';
  const selectedThumbnail = galleryThumbnails[currentIndex];
  const selectedImage = document.createElement('img');
  selectedImage.src = selectedThumbnail.src;
  selectedImage.alt = selectedThumbnail.alt;
  galleryMain.appendChild(selectedImage);

  galleryThumbnails.forEach((thumbnail, index) => {
    thumbnail.classList.remove('active');
    if (index === currentIndex) {
      thumbnail.classList.add('active');
    }
  });
}
