import mijnAvatar from '../images/avatar.jpg';

function addImage() {
    const body = document.querySelector('body');
    const img = document.createElement('img');
    img.alt = 'avatar';
    img.width = 400;
    img.height = 401;
    img.src = mijnAvatar;
    body.appendChild(img);
}

export default addImage;

