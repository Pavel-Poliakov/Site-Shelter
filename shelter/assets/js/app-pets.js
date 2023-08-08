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

/*Пагинация*/

const oneLeft = document.querySelector(".one-left");
const oneLeftImg = document.querySelector(".one-left-img");
const oneLeftImgActive = document.querySelector(".oneleft-img-active");
const dubleLeft = document.querySelector(".duble-left");
const dubleLeftImg = document.querySelector(".duble-left-img");
const dubleLeftImgActive = document.querySelector(".dubleleft-img-active");

const oneRight = document.querySelector(".one-right");
const oneRightImg = document.querySelector(".one-right-img");
const oneRightReactive = document.querySelector(".oneRight-img-reactive");

const dubleRight = document.querySelector(".duble-right");
const dubleRightImg = document.querySelector(".duble-right-img");
const dubleRightReactive = document.querySelector(".dubleright-img-reactive");

const wrapperPets = document.querySelector(".wrapper-pets");
const indexPage = document.querySelector(".digit");
const sliderItemPets = document.querySelectorAll(".item-pets");

const arr = [];
sliderItemPets.forEach(el=>{arr.push(el);
})
let arrBig = [];
function mixSlides(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

  
function createArray(item){
  mixSlides(item);
  while(arrBig.length < 6){
      let proArr = Array.from(item);
    let arr1 = proArr.splice(0,3);
    let arr2 = proArr.splice(0,3);
    let arr3 = proArr.splice(0,2);
    mixSlides(arr1);
    mixSlides(arr2);
    mixSlides(arr3);
    let resArr = arr1.concat(arr2, arr3);
    arrBig.push(resArr);
}
  arrBig = arrBig.flat()
}
createArray(arr);
let index = -1;
window.addEventListener('resize', () => {
      index=-1;
    oneRight.click()

})


function nextPage(btn){
  btn.addEventListener('click',()=>{
        if (document.documentElement.clientWidth > 1274) {
          if(index < 5){
            index++
            let a = (index+1)*8;
            let b = a - 8;
            let localArr = Array.from(arrBig)
            localArr = localArr.splice(b,8);
            console.log(a)
            console.log(b)
            console.log(index)
            console.log(localArr)
            document.querySelectorAll(".item-pets").forEach(item => item.remove());
            localArr.forEach(el=>{
            wrapperPets.append(el);})
            indexPage.innerHTML = "";
            indexPage.append(index+1);
          }
       
              if(index>0){
                oneLeft.classList.add('active-btn');
                oneLeftImgActive.classList.add('active-btn');
                oneLeftImg.classList.add('reactive-btn');
                dubleLeft.classList.add('active-btn');
                dubleLeftImgActive.classList.add('active-btn');
                dubleLeftImg.classList.add('reactive-btn');
              }else{
                oneLeft.classList.remove('active-btn');
                oneLeftImgActive.classList.remove('active-btn');
                oneLeftImg.classList.remove('reactive-btn');
                dubleLeft.classList.remove('active-btn');
                dubleLeftImgActive.classList.remove('active-btn');
                dubleLeftImg.classList.remove('reactive-btn');
              }
              if(index == 5){
                oneRight.classList.add('reactive-btn');
                oneRightImg.classList.add('reactive-btn');
                oneRightReactive.classList.add('active-btn');
                dubleRight.classList.add('reactive-btn');
                dubleRightImg.classList.add('reactive-btn');
                dubleRightReactive.classList.add('active-btn');
              }else{
                oneRight.classList.remove('reactive-btn');
                oneRightImg.classList.remove('reactive-btn');
                oneRightReactive.classList.remove('active-btn');
                dubleRight.classList.remove('reactive-btn');
                dubleRightImg.classList.remove('reactive-btn');
                dubleRightReactive.classList.remove('active-btn');
              }
        }
        if (document.documentElement.clientWidth < 1274 && document.documentElement.clientWidth > 660) {
                  if(index < 7){
                    index++
                    let a = (index+1)*6;
                    let b = a - 6;
                    let localArr = Array.from(arrBig)
                    localArr = localArr.splice(b,6);
                    console.log(a)
                    console.log(b)
                    console.log(index)
                    console.log(localArr)
                    document.querySelectorAll(".item-pets").forEach(item => item.remove());
                    localArr.forEach(el=>{
                    wrapperPets.append(el);
                  })
                    indexPage.innerHTML = "";
                    indexPage.append(index+1);
                  }
               
                      if(index>0){
                        oneLeft.classList.add('active-btn');
                        oneLeftImgActive.classList.add('active-btn');
                        oneLeftImg.classList.add('reactive-btn');
                        dubleLeft.classList.add('active-btn');
                        dubleLeftImgActive.classList.add('active-btn');
                        dubleLeftImg.classList.add('reactive-btn');
                      }else{
                        oneLeft.classList.remove('active-btn');
                        oneLeftImgActive.classList.remove('active-btn');
                        oneLeftImg.classList.remove('reactive-btn');
                        dubleLeft.classList.remove('active-btn');
                        dubleLeftImgActive.classList.remove('active-btn');
                        dubleLeftImg.classList.remove('reactive-btn');
                      }
                      if(index == 7){
                        oneRight.classList.add('reactive-btn');
                        oneRightImg.classList.add('reactive-btn');
                        oneRightReactive.classList.add('active-btn');
                        dubleRight.classList.add('reactive-btn');
                        dubleRightImg.classList.add('reactive-btn');
                        dubleRightReactive.classList.add('active-btn');
                      }else{
                        oneRight.classList.remove('reactive-btn');
                        oneRightImg.classList.remove('reactive-btn');
                        oneRightReactive.classList.remove('active-btn');
                        dubleRight.classList.remove('reactive-btn');
                        dubleRightImg.classList.remove('reactive-btn');
                        dubleRightReactive.classList.remove('active-btn');
                      }
                }

                if (document.documentElement.clientWidth < 659 ) {
                          if(index < 15){
                            index++
                            let a = (index+1)*3;
                            let b = a - 3;
                            let localArr = Array.from(arrBig)
                            localArr = localArr.splice(b,3);
                            console.log(a)
                            console.log(b)
                            console.log(index)
                            console.log(localArr)
                            document.querySelectorAll(".item-pets").forEach(item => item.remove());
                            localArr.forEach(el=>{
                            wrapperPets.append(el);
                          })
                            indexPage.innerHTML = "";
                            indexPage.append(index+1);
                          }
                       
                              if(index>0){
                                oneLeft.classList.add('active-btn');
                                oneLeftImgActive.classList.add('active-btn');
                                oneLeftImg.classList.add('reactive-btn');
                                dubleLeft.classList.add('active-btn');
                                dubleLeftImgActive.classList.add('active-btn');
                                dubleLeftImg.classList.add('reactive-btn');
                              }else{
                                oneLeft.classList.remove('active-btn');
                                oneLeftImgActive.classList.remove('active-btn');
                                oneLeftImg.classList.remove('reactive-btn');
                                dubleLeft.classList.remove('active-btn');
                                dubleLeftImgActive.classList.remove('active-btn');
                                dubleLeftImg.classList.remove('reactive-btn');
                              }
                              if(index == 15){
                                oneRight.classList.add('reactive-btn');
                                oneRightImg.classList.add('reactive-btn');
                                oneRightReactive.classList.add('active-btn');
                                dubleRight.classList.add('reactive-btn');
                                dubleRightImg.classList.add('reactive-btn');
                                dubleRightReactive.classList.add('active-btn');
                              }else{
                                oneRight.classList.remove('reactive-btn');
                                oneRightImg.classList.remove('reactive-btn');
                                oneRightReactive.classList.remove('active-btn');
                                dubleRight.classList.remove('reactive-btn');
                                dubleRightImg.classList.remove('reactive-btn');
                                dubleRightReactive.classList.remove('active-btn');
                              }
                
                        }   

    })}


    function doubleNextPage(btn){
      btn.addEventListener('click',()=>{
        if (document.documentElement.clientWidth > 1274) {
          if(index < 5){
            index = 5;
            let a = (index+1)*8;
            let b = a - 8;
            let localArr = Array.from(arrBig)
            localArr = localArr.splice(b,8);
            console.log(a)
            console.log(b)
            console.log(index)
            console.log(localArr)
            document.querySelectorAll(".item-pets").forEach(item => item.remove());
            localArr.forEach(el=>{
            wrapperPets.append(el);})
            indexPage.innerHTML = "";
            indexPage.append(index+1);
                if(index>0){
                  oneLeft.classList.add('active-btn');
                  oneLeftImgActive.classList.add('active-btn');
                  oneLeftImg.classList.add('reactive-btn');
                  dubleLeft.classList.add('active-btn');
                  dubleLeftImgActive.classList.add('active-btn');
                  dubleLeftImg.classList.add('reactive-btn');
                }else{
                  oneLeft.classList.remove('active-btn');
                  oneLeftImgActive.classList.remove('active-btn');
                  oneLeftImg.classList.remove('reactive-btn');
                  dubleLeft.classList.remove('active-btn');
                  dubleLeftImgActive.classList.remove('active-btn');
                  dubleLeftImg.classList.remove('reactive-btn');
                }
                if(index == 5){
                  oneRight.classList.add('reactive-btn');
                  oneRightImg.classList.add('reactive-btn');
                  oneRightReactive.classList.add('active-btn');
                  dubleRight.classList.add('reactive-btn');
                  dubleRightImg.classList.add('reactive-btn');
                  dubleRightReactive.classList.add('active-btn');
                }else{
                  oneRight.classList.remove('reactive-btn');
                  oneRightImg.classList.remove('reactive-btn');
                  oneRightReactive.classList.remove('active-btn');
                  dubleRight.classList.remove('reactive-btn');
                  dubleRightImg.classList.remove('reactive-btn');
                  dubleRightReactive.classList.remove('active-btn');
                }
          }

        }
        if (document.documentElement.clientWidth < 1274 && document.documentElement.clientWidth > 660) {
                  if(index < 7){
                    index = 7;
                    let a = (index+1)*6;
                    let b = a - 6;
                    let localArr = Array.from(arrBig)
                    localArr = localArr.splice(b,6);
                    console.log(a)
                    console.log(b)
                    console.log(index)
                    console.log(localArr)
                    document.querySelectorAll(".item-pets").forEach(item => item.remove());
                    localArr.forEach(el=>{
                    wrapperPets.append(el);})
                    indexPage.innerHTML = "";
                    indexPage.append(index+1);
                    if(index>0){
                      oneLeft.classList.add('active-btn');
                      oneLeftImgActive.classList.add('active-btn');
                      oneLeftImg.classList.add('reactive-btn');
                      dubleLeft.classList.add('active-btn');
                      dubleLeftImgActive.classList.add('active-btn');
                      dubleLeftImg.classList.add('reactive-btn');
                    }else{
                      oneLeft.classList.remove('active-btn');
                      oneLeftImgActive.classList.remove('active-btn');
                      oneLeftImg.classList.remove('reactive-btn');
                      dubleLeft.classList.remove('active-btn');
                      dubleLeftImgActive.classList.remove('active-btn');
                      dubleLeftImg.classList.remove('reactive-btn');
                    }
                    if(index == 7){
                      oneRight.classList.add('reactive-btn');
                      oneRightImg.classList.add('reactive-btn');
                      oneRightReactive.classList.add('active-btn');
                      dubleRight.classList.add('reactive-btn');
                      dubleRightImg.classList.add('reactive-btn');
                      dubleRightReactive.classList.add('active-btn');
                    }else{
                      oneRight.classList.remove('reactive-btn');
                      oneRightImg.classList.remove('reactive-btn');
                      oneRightReactive.classList.remove('active-btn');
                      dubleRight.classList.remove('reactive-btn');
                      dubleRightImg.classList.remove('reactive-btn');
                      dubleRightReactive.classList.remove('active-btn');
                    }
                  }
                }
                if (document.documentElement.clientWidth < 659 ) {

                          if(index < 15){
                            index = 15;
                            let a = (index+1)*3;
                            let b = a - 3;
                            let localArr = Array.from(arrBig)
                            localArr = localArr.splice(b,3);
                            console.log(a)
                            console.log(b)
                            console.log(index)
                            console.log(localArr)
                            document.querySelectorAll(".item-pets").forEach(item => item.remove());
                            localArr.forEach(el=>{
                            wrapperPets.append(el);})
                            indexPage.innerHTML = "";
                            indexPage.append(index+1);
                            if(index>0){
                              oneLeft.classList.add('active-btn');
                              oneLeftImgActive.classList.add('active-btn');
                              oneLeftImg.classList.add('reactive-btn');
                              dubleLeft.classList.add('active-btn');
                              dubleLeftImgActive.classList.add('active-btn');
                              dubleLeftImg.classList.add('reactive-btn');
                            }else{
                              oneLeft.classList.remove('active-btn');
                              oneLeftImgActive.classList.remove('active-btn');
                              oneLeftImg.classList.remove('reactive-btn');
                              dubleLeft.classList.remove('active-btn');
                              dubleLeftImgActive.classList.remove('active-btn');
                              dubleLeftImg.classList.remove('reactive-btn');
                            }
                            if(index == 15){
                              oneRight.classList.add('reactive-btn');
                              oneRightImg.classList.add('reactive-btn');
                              oneRightReactive.classList.add('active-btn');
                              dubleRight.classList.add('reactive-btn');
                              dubleRightImg.classList.add('reactive-btn');
                              dubleRightReactive.classList.add('active-btn');
                            }else{
                              oneRight.classList.remove('reactive-btn');
                              oneRightImg.classList.remove('reactive-btn');
                              oneRightReactive.classList.remove('active-btn');
                              dubleRight.classList.remove('reactive-btn');
                              dubleRightImg.classList.remove('reactive-btn');
                              dubleRightReactive.classList.remove('active-btn');
                            }
                          }
                        }


    })}
    function backPage(btn){
      btn.addEventListener('click',()=>{
        if (document.documentElement.clientWidth > 1274) {
          if(index < 6 && index >0){
            index--
            let a = (index+1)*8;
            let b = a - 8;
            let localArr = Array.from(arrBig)
            localArr = localArr.splice(b,8);
            console.log(a)
            console.log(b)
            console.log(index)
            console.log(localArr)
            document.querySelectorAll(".item-pets").forEach(item => item.remove());
            localArr.forEach(el=>{
            wrapperPets.append(el);})
            indexPage.innerHTML = "";
            indexPage.append(index+1);
            if(index>0){
              oneLeft.classList.add('active-btn');
              oneLeftImgActive.classList.add('active-btn');
              oneLeftImg.classList.add('reactive-btn');
              dubleLeft.classList.add('active-btn');
              dubleLeftImgActive.classList.add('active-btn');
              dubleLeftImg.classList.add('reactive-btn');
            }else{
              oneLeft.classList.remove('active-btn');
              oneLeftImgActive.classList.remove('active-btn');
              oneLeftImg.classList.remove('reactive-btn');
              dubleLeft.classList.remove('active-btn');
              dubleLeftImgActive.classList.remove('active-btn');
              dubleLeftImg.classList.remove('reactive-btn');
            }
            if(index == 5){
              oneRight.classList.add('reactive-btn');
              oneRightImg.classList.add('reactive-btn');
              oneRightReactive.classList.add('active-btn');
              dubleRight.classList.add('reactive-btn');
              dubleRightImg.classList.add('reactive-btn');
              dubleRightReactive.classList.add('active-btn');
            }else{
              oneRight.classList.remove('reactive-btn');
              oneRightImg.classList.remove('reactive-btn');
              oneRightReactive.classList.remove('active-btn');
              dubleRight.classList.remove('reactive-btn');
              dubleRightImg.classList.remove('reactive-btn');
              dubleRightReactive.classList.remove('active-btn');
            }
          }

        }
        if (document.documentElement.clientWidth < 1274 && document.documentElement.clientWidth > 660) {
                  if(index < 8 && index >0){
                    index--
                    let a = (index+1)*6;
                    let b = a - 6;
                    let localArr = Array.from(arrBig)
                    localArr = localArr.splice(b,6);
                    console.log(a)
                    console.log(b)
                    console.log(index)
                    // console.log(localArr)
                    document.querySelectorAll(".item-pets").forEach(item => item.remove());
                    localArr.forEach(el=>{
                    wrapperPets.append(el);})
                    indexPage.innerHTML = "";
                    indexPage.append(index+1);
                    if(index>0){
                      oneLeft.classList.add('active-btn');
                      oneLeftImgActive.classList.add('active-btn');
                      oneLeftImg.classList.add('reactive-btn');
                      dubleLeft.classList.add('active-btn');
                      dubleLeftImgActive.classList.add('active-btn');
                      dubleLeftImg.classList.add('reactive-btn');
                    }else{
                      oneLeft.classList.remove('active-btn');
                      oneLeftImgActive.classList.remove('active-btn');
                      oneLeftImg.classList.remove('reactive-btn');
                      dubleLeft.classList.remove('active-btn');
                      dubleLeftImgActive.classList.remove('active-btn');
                      dubleLeftImg.classList.remove('reactive-btn');
                    }
                    if(index == 7){
                      oneRight.classList.add('reactive-btn');
                      oneRightImg.classList.add('reactive-btn');
                      oneRightReactive.classList.add('active-btn');
                      dubleRight.classList.add('reactive-btn');
                      dubleRightImg.classList.add('reactive-btn');
                      dubleRightReactive.classList.add('active-btn');
                    }else{
                      oneRight.classList.remove('reactive-btn');
                      oneRightImg.classList.remove('reactive-btn');
                      oneRightReactive.classList.remove('active-btn');
                      dubleRight.classList.remove('reactive-btn');
                      dubleRightImg.classList.remove('reactive-btn');
                      dubleRightReactive.classList.remove('active-btn');
                    }
                  }
                }

                if (document.documentElement.clientWidth < 659 ) {

                          if(index < 16 && index >0){
                            index--
                            let a = (index+1)*3;
                            let b = a - 3;
                            let localArr = Array.from(arrBig)
                            localArr = localArr.splice(b,3);
                            console.log(a)
                            console.log(b)
                            console.log(index)
                            document.querySelectorAll(".item-pets").forEach(item => item.remove());
                            localArr.forEach(el=>{
                            wrapperPets.append(el);})
                            indexPage.innerHTML = "";
                            indexPage.append(index+1);
                            if(index>0){
                              oneLeft.classList.add('active-btn');
                              oneLeftImgActive.classList.add('active-btn');
                              oneLeftImg.classList.add('reactive-btn');
                              dubleLeft.classList.add('active-btn');
                              dubleLeftImgActive.classList.add('active-btn');
                              dubleLeftImg.classList.add('reactive-btn');
                            }else{
                              oneLeft.classList.remove('active-btn');
                              oneLeftImgActive.classList.remove('active-btn');
                              oneLeftImg.classList.remove('reactive-btn');
                              dubleLeft.classList.remove('active-btn');
                              dubleLeftImgActive.classList.remove('active-btn');
                              dubleLeftImg.classList.remove('reactive-btn');
                            }
                            if(index == 15){
                              oneRight.classList.add('reactive-btn');
                              oneRightImg.classList.add('reactive-btn');
                              oneRightReactive.classList.add('active-btn');
                              dubleRight.classList.add('reactive-btn');
                              dubleRightImg.classList.add('reactive-btn');
                              dubleRightReactive.classList.add('active-btn');
                            }else{
                              oneRight.classList.remove('reactive-btn');
                              oneRightImg.classList.remove('reactive-btn');
                              oneRightReactive.classList.remove('active-btn');
                              dubleRight.classList.remove('reactive-btn');
                              dubleRightImg.classList.remove('reactive-btn');
                              dubleRightReactive.classList.remove('active-btn');
                            }
                          }
                        }
    })}
    function doubleBackPage(btn){
      btn.addEventListener('click',()=>{
        if (document.documentElement.clientWidth > 1274) {

          if(index < 6 && index >0){
            index=0;
            let a = (index+1)*8;
            let b = a - 8;
            let localArr = Array.from(arrBig)
            localArr = localArr.splice(b,8);
            console.log(a)
            console.log(b)
            console.log(index)
            console.log(localArr)
            document.querySelectorAll(".item-pets").forEach(item => item.remove());
            localArr.forEach(el=>{
            return wrapperPets.append(el);})
            indexPage.innerHTML = "";
            indexPage.append(index+1);
            if(index>0){
              oneLeft.classList.add('active-btn');
              oneLeftImgActive.classList.add('active-btn');
              oneLeftImg.classList.add('reactive-btn');
              dubleLeft.classList.add('active-btn');
              dubleLeftImgActive.classList.add('active-btn');
              dubleLeftImg.classList.add('reactive-btn');
            }else{
              oneLeft.classList.remove('active-btn');
              oneLeftImgActive.classList.remove('active-btn');
              oneLeftImg.classList.remove('reactive-btn');
              dubleLeft.classList.remove('active-btn');
              dubleLeftImgActive.classList.remove('active-btn');
              dubleLeftImg.classList.remove('reactive-btn');
            }
            if(index == 5){
              oneRight.classList.add('reactive-btn');
              oneRightImg.classList.add('reactive-btn');
              oneRightReactive.classList.add('active-btn');
              dubleRight.classList.add('reactive-btn');
              dubleRightImg.classList.add('reactive-btn');
              dubleRightReactive.classList.add('active-btn');
            }else{
              oneRight.classList.remove('reactive-btn');
              oneRightImg.classList.remove('reactive-btn');
              oneRightReactive.classList.remove('active-btn');
              dubleRight.classList.remove('reactive-btn');
              dubleRightImg.classList.remove('reactive-btn');
              dubleRightReactive.classList.remove('active-btn');
            }
          }
        
        }

        if (document.documentElement.clientWidth < 1274 && document.documentElement.clientWidth > 660) {
                  if(index < 8 && index > 0){
                    index = 0;
                    let a = (index+1)*6;
                    let b = a - 6;
                    let localArr = Array.from(arrBig)
                    localArr = localArr.splice(b,6);
                    console.log(a)
                    console.log(b)
                    console.log(index)
                    console.log(localArr)
                    document.querySelectorAll(".item-pets").forEach(item => item.remove());
                    localArr.forEach(el=>{
                    return wrapperPets.append(el);})
                    indexPage.innerHTML = "";
                    indexPage.append(index+1);
                    if(index>0){
                      oneLeft.classList.add('active-btn');
                      oneLeftImgActive.classList.add('active-btn');
                      oneLeftImg.classList.add('reactive-btn');
                      dubleLeft.classList.add('active-btn');
                      dubleLeftImgActive.classList.add('active-btn');
                      dubleLeftImg.classList.add('reactive-btn');
                    }else{
                      oneLeft.classList.remove('active-btn');
                      oneLeftImgActive.classList.remove('active-btn');
                      oneLeftImg.classList.remove('reactive-btn');
                      dubleLeft.classList.remove('active-btn');
                      dubleLeftImgActive.classList.remove('active-btn');
                      dubleLeftImg.classList.remove('reactive-btn');
                    }
                    if(index == 7){
                      oneRight.classList.add('reactive-btn');
                      oneRightImg.classList.add('reactive-btn');
                      oneRightReactive.classList.add('active-btn');
                      dubleRight.classList.add('reactive-btn');
                      dubleRightImg.classList.add('reactive-btn');
                      dubleRightReactive.classList.add('active-btn');
                    }else{
                      oneRight.classList.remove('reactive-btn');
                      oneRightImg.classList.remove('reactive-btn');
                      oneRightReactive.classList.remove('active-btn');
                      dubleRight.classList.remove('reactive-btn');
                      dubleRightImg.classList.remove('reactive-btn');
                      dubleRightReactive.classList.remove('active-btn');
                    }
                  }
                }
                if (document.documentElement.clientWidth < 659 ) {

                          if(index < 16 && index > 0){
                            index = 0;
                            let a = (index+1)*3;
                            let b = a - 3;
                            let localArr = Array.from(arrBig)
                            localArr = localArr.splice(b,3);
                            console.log(a)
                            console.log(b)
                            console.log(index)
                            console.log(localArr)
                            document.querySelectorAll(".item-pets").forEach(item => item.remove());
                            localArr.forEach(el=>{
                            return wrapperPets.append(el);})
                            indexPage.innerHTML = "";
                            indexPage.append(index+1);
                            if(index>0){
                              oneLeft.classList.add('active-btn');
                              oneLeftImgActive.classList.add('active-btn');
                              oneLeftImg.classList.add('reactive-btn');
                              dubleLeft.classList.add('active-btn');
                              dubleLeftImgActive.classList.add('active-btn');
                              dubleLeftImg.classList.add('reactive-btn');
                            }else{
                              oneLeft.classList.remove('active-btn');
                              oneLeftImgActive.classList.remove('active-btn');
                              oneLeftImg.classList.remove('reactive-btn');
                              dubleLeft.classList.remove('active-btn');
                              dubleLeftImgActive.classList.remove('active-btn');
                              dubleLeftImg.classList.remove('reactive-btn');
                            }
                            if(index == 15){
                              oneRight.classList.add('reactive-btn');
                              oneRightImg.classList.add('reactive-btn');
                              oneRightReactive.classList.add('active-btn');
                              dubleRight.classList.add('reactive-btn');
                              dubleRightImg.classList.add('reactive-btn');
                              dubleRightReactive.classList.add('active-btn');
                            }else{
                              oneRight.classList.remove('reactive-btn');
                              oneRightImg.classList.remove('reactive-btn');
                              oneRightReactive.classList.remove('active-btn');
                              dubleRight.classList.remove('reactive-btn');
                              dubleRightImg.classList.remove('reactive-btn');
                              dubleRightReactive.classList.remove('active-btn');
                            }
                          }
                        }
    })}

    doubleNextPage(dubleRight)
doubleBackPage(dubleLeft)
backPage(oneLeft)
nextPage(oneRight)
oneRight.click()

