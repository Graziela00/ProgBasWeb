const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declarando o array de nomes de arquivos de imagem */

const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {
  'pic1.jpg' : 'Olho humano',
  'pic2.jpg' : 'Pintura',
  'pic3.jpg': 'Flores',
  'pic4.jpg' : 'Egipcios',
  'pic5.jpg': 'Mariposa'
}

/* Percorrendo imagens */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Conectando o botão Escurecer/Clarear */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Clarear';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Escurecer';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
