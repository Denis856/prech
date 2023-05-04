var filterItem = document.querySelectorAll('.catalog__list');
var filterImage = document.querySelectorAll('.catalog__item');
var number = document.querySelectorAll('.catalog__item0');

window.onload = () => { 
   filterItem.forEach(iten3 => {
      iten3.onclick = (selectedItem) => {
         if(selectedItem.target.classList.contains('catalog__item0')) {
            let filterName = selectedItem.target.getAttribute('data-name'); 
            filterImage.forEach((image) => {
               let filterImages = image.getAttribute('data-name');
               if((filterImages == filterName) || filterName == 'all') {
                  image.classList.remove('hide');
                  image.classList.add('show');
               } else {
                  image.classList.add('hide');
                  image.classList.remove('show');
               }
            });
         }
      };
   });
};


number.forEach(item =>{ 
   item.addEventListener('click', (e) =>{
    number.forEach(el=>{ el.classList.remove('active'); });
   item.classList.add('active');
});
});
