
var productContainers = [...document.querySelectorAll('.home__items')];
var nxtBtn = [...document.querySelectorAll('.left')];
var preBtn = [...document.querySelectorAll('.right')];
var item20 = document.querySelectorAll('.home__item')[0];

productContainers.forEach((item, i) => {
   let containerWidth = item20.clientWidth + 50;


    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});