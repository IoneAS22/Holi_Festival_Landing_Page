let navLinks = document.querySelector('.navLinks');
let btnMobile = document.querySelector('.fa-solid');

btnMobile.addEventListener('click', ()=>{
   navLinks.classList.toggle("menuMobile");
})

gsap.from('.navSection', {duration: 1, y:'-100%'});
gsap.from('.heroSectionContent', {duration: 1, y:'10%', opacity: '0', delay: 1});

