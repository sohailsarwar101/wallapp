// Get Portrait images
const portrait = document.querySelector('.portrait')
const unsplashURL = 'https://source.unsplash.com/';
const photoTag = '/?nature?orientation=portrait';
const portra = 1

for(let i = 0; i < portra * 3; i++) {
    const img = document.createElement('img');
    const imgLink = `${unsplashURL}${getRandomPortrait()}${photoTag}`;
    img.src = imgLink;

    portrait.appendChild(img);
}

// Get random size for Portrait images (random size help to generate unique image every time)
function getRandomPortrait() {
    var x = Math.floor(Math.random() * 10) + 900;
    var y = Math.floor(Math.random() * 10) + 1600;
    return x+'x'+y;
}

// Get Landscape images
const landscape = document.querySelector('.landscape')
const unsplashURLw = 'https://source.unsplash.com/';
const photoTagW = '/?nature?orientation=landscape';
const wide = 1

for(let i = 0; i < wide * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unsplashURLw}${getRandomLandscape()}${photoTagW}`
    landscape.appendChild(img)
}

// Get random size for Landscape images (random size help to generate unique image every time)
function getRandomLandscape() {
    var x = Math.floor(Math.random() * 10) + 1920;
    var y = Math.floor(Math.random() * 10) + 1080;
    return x+'x'+y;
}