var burger = document.querySelector('.header__burger');

burger.onclick = () => {
   burger.classList.toggle('active');
   document.querySelector('.header__list2').classList.toggle('active');
};

// next

var filters = document.querySelector('.catalog__filters');

filters.onclick = () => {
   filters.classList.toggle('active');
   document.querySelector('.catalog__block00').classList.toggle('active');
   document.querySelector('.catalog__block01').classList.toggle('active');
   document.querySelector('.catalog__aside').classList.toggle('active');
};


// smooth move

// const anchors = document.querySelectorAll('a[href*="#"]')

// for (let anchor of anchors) {
//    anchor.addEventListener('click', function (e) {
//       e.preventDefault()
      
//       const blockID = anchor.getAttribute('href').substr(1)
      
//       document.getElementById(blockID).scrollIntoView({
//          behavior: 'smooth',
//          block: 'start'
//       });
//    });
// }