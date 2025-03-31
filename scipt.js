const photoWall = document.querySelector('.photo-wall');

const photos = ['image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg'];
photos.forEach(photo => {
    const div = document.createElement('div');
    div.classList.add('photo-item');
    const img = document.createElement('img');
    img.src = photo;
    img.alt = 'Dynamic Photo';
    div.appendChild(img);
    photoWall.appendChild(div);
});
