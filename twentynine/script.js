const heart = document.querySelector('.heart');

const imgcontain = document.querySelector('.img-contain');
const times = document.querySelector('#count');

let timesClicked = 0;

imgcontain.addEventListener('dblclick', (e) => {
console.log('clicked');
timesClicked++;
creatHeart(e);
}
)

const creatHeart = (e) => {
const hearts = document.createElement('i');
hearts.classList.add('fas');
hearts.classList.add('fa-heart');


const x = e.clientX;
const y = e.clientY;

const leftOffset = e.target.offsetLeft;
const topOffset = e.target.offsetTop;


hearts.style.top = `${y}px`;
hearts.style.left = `${x}px`;

heart.appendChild(hearts);
times.innerText = timesClicked;

setTimeout(() => hearts.remove(), 1000);
}
