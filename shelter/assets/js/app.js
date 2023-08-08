
/* Меню */
const menuOpen = document.querySelector(".header__burger-open")
const burgerBlock = document.querySelector(".header__burger-bg")
const burgerMenu = document.querySelector(".header__burger-block")
const navLink = document.querySelectorAll('.header__nav-link');
const html = document.querySelector('html')

menuOpen.addEventListener('click', () => {
  menuOpen.classList.toggle('menu--open');
  burgerBlock.classList.toggle('menu--open');
  burgerMenu.classList.toggle('menu--open');
  html.classList.toggle('no-scroll');
  navLink.forEach((el)=>{
      el.addEventListener('click',()=>{
      menuOpen.classList.remove('menu--open');
      burgerBlock.classList.remove('menu--open');
      burgerMenu.classList.remove('menu--open');
      html.classList.remove('no-scroll');
    })
  })
})
function overLay(el){
  el.addEventListener('click',()=>{
    if(menuOpen.classList.contains('menu--open')){
      menuOpen.classList.remove('menu--open');
      burgerBlock.classList.remove('menu--open');
      burgerMenu.classList.remove('menu--open');
      html.classList.remove('no-scroll');
    }
  })
}
overLay(burgerBlock);

/*Слайдер*/ 
const nextBtn = document.querySelector('.slider__btn-next');
const prevBtn = document.querySelector('.slider__btn-prev');
let slides = document.querySelectorAll('.slider__item');
  
  function sliderClick(btn){
    arr=[];
    while(arr.length<3){
    let b = Math.floor(Math.random() * 8);
    if(b!=arr[0] && b!=arr[1])
    arr.push(b)
  };
  btn.addEventListener('click',()=>{
    slides.forEach(el=>{
      el.classList.remove('active-slide');
    })
    arr2=[];
    while(arr2.length<3){
      let a = Math.floor(Math.random() * 8);
            if(a!=arr2[0] && a!=arr2[1])
            arr2.push(a)
            arr.forEach(el => {if(el == a){
              arr2.pop(a)
              return arr2}
            });
          }
          if (document.documentElement.clientWidth > 1230) {
            slides[arr2[0]].classList.add('active-slide');
              slides[arr2[1]].classList.add('active-slide');
              slides[arr2[2]].classList.add('active-slide');
            }
            if (document.documentElement.clientWidth < 1230 && document.documentElement.clientWidth > 740) {
              slides[arr2[0]].classList.add('active-slide');
              slides[arr2[1]].classList.add('active-slide');
              }
              if (document.documentElement.clientWidth < 740) {
              slides[arr2[0]].classList.add('active-slide');
              }
          console.log(arr);
          arr = Array.from(arr2);
          console.log(arr2);
        })}
        
        window.addEventListener('resize', () => { 
          if (document.documentElement.clientWidth > 1230) {
            slides[arr2[0]].classList.add('active-slide');
              slides[arr2[1]].classList.add('active-slide');
              slides[arr2[2]].classList.add('active-slide');
            }
        })
      
        window.addEventListener('resize', () => { 
          if (document.documentElement.clientWidth < 1230 && document.documentElement.clientWidth > 740) {
            slides[arr2[0]].classList.add('active-slide');
              slides[arr2[1]].classList.add('active-slide');
            slides[arr2[2]].classList.remove('active-slide');
            }
        })
      
      window.addEventListener('resize', () => { 
      if (document.documentElement.clientWidth < 740) {
        slides[arr2[0]].classList.add('active-slide');
        slides[arr2[1]].classList.remove('active-slide');
        slides[arr2[2]].classList.remove('active-slide');
      }
    })
    sliderClick(nextBtn);
    sliderClick(prevBtn);
    nextBtn.click();

/*Попап*/

const btnsPopup = document.querySelectorAll('.slider__item');
const popupClose = document.querySelectorAll('.popup__close')
const popupBg = document.querySelector('.popup-bg');
const popupCard = document.querySelectorAll('.popup');

btnsPopup.forEach((el)=>{
el.addEventListener('click', (e)=>{
  let path = e.currentTarget.getAttribute('data-path');
  popupCard.forEach((el)=>{ el.classList.remove('popup-active')});
  document.querySelector(`[data-target="${path}"]`).classList.add('popup-active'); 
  popupBg.classList.add('popup-active');
  html.classList.add('no-scroll');
})
})
popupClose.forEach((el)=>{
  el.addEventListener('click', (e)=>{
    popupCard.forEach((el)=>{ el.classList.remove('popup-active')});
    popupBg.classList.remove('popup-active');
    html.classList.remove('no-scroll');
  })
})
popupBg.addEventListener('click', (e)=>{
  popupCard.forEach((el)=>{ el.classList.remove('popup-active')});
    popupBg.classList.remove('popup-active');
    html.classList.remove('no-scroll');
})

