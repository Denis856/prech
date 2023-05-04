var add_btn = document.querySelectorAll('.item1__btn');
var add_btn01 = document.querySelectorAll('.item1__btn');
var away = document.querySelectorAll('.away');
var away3 = document.querySelectorAll('.away3');
var add_btn2 = document.querySelectorAll('.item2__btn');
var gallery2 = document.querySelector('.cart__item');
var basket = document.querySelector('.basket');
var gallery20 = document.querySelector('.basket__items');
var count = document.querySelector('.count');
var buy = document.querySelector('.cart__buy');
var cart = document.querySelector('.cart');
var about2 = document.querySelector('.about2');

var catalog_li = document.querySelector('.catalog_li');
var catalog = document.querySelector('.catalog');
var away2 = document.querySelectorAll('.away2');
var logo = document.querySelector('.header__logo');
var products = document.querySelector('.products');

var total = 0;

add_btn.forEach(item => {
   item.addEventListener('click', (e)=>{
      var parent = e.target.parentNode;
      var product = document.createElement('div');
      product.classList.add('item2__block_text');
      
      var title = document.createElement('p');
      title.classList.add('item2__title');
      title.classList.add('title');
      title.innerText = parent.querySelector('.item1__title').innerText;

      
      var string1 = document.createElement('div');
      string1.classList.add('item2__string');
      var title01 = document.createElement('p');
      title01.innerText = 'Диаметр обработки';
      var title02 = document.createElement('p');
      title02.classList.add('item2__text2');
      title02.innerText = parent.querySelector('.item1__info3').innerText;

      var string2 = document.createElement('div');
      string2.classList.add('item2__string');
      var title012 = document.createElement('p');
      title012.innerText = 'Вес';
      var title022 = document.createElement('p');
      title022.classList.add('item2__text2');
      title022.innerText = parent.querySelector('.item1__info1').innerText;

      var string3 = document.createElement('div');
      string3.classList.add('item2__string');
      var title013 = document.createElement('p');
      title013.innerText = 'Двигатель';
      var title023 = document.createElement('p');
      title023.classList.add('item2__text2');
      title023.innerText = parent.querySelector('.item1__info2').innerText;

      string1.appendChild(title01);
      string1.appendChild(title02);
      string2.appendChild(title012);
      string2.appendChild(title022);
      string3.appendChild(title013);
      string3.appendChild(title023);
      
      var price = document.createElement('p');
      price.classList.add('item2__price');
      price.innerText = parent.querySelector('.item1__price').innerText;
      
      var btn = document.createElement('button');
      btn.classList.add('cart__back');
      btn.classList.add('text2');
      btn.textContent = 'Back';

      
      var btn_add = document.createElement('button');
      btn_add.classList.add('item2__btn');
      btn_add.classList.add('text2');
      btn_add.textContent = 'Add';

      
      var img1 = document.createElement('img');
      img1.classList.add('item2__img');
      img1.setAttribute('src',parent.querySelector('img').currentSrc);

      product.appendChild(title);
      product.appendChild(string1);
      product.appendChild(string2);
      product.appendChild(string3);
      product.appendChild(price);
      product.appendChild(btn);
      gallery2.appendChild(btn_add);
      gallery2.appendChild(product);
      gallery2.appendChild(img1);

      
      btn.addEventListener('click', ()=> {
         gallery2.removeChild(product);
         gallery2.removeChild(img1);
         gallery2.removeChild(btn_add);
         logo.classList.remove('active');
         catalog_li.classList.remove('active');
         away.forEach(item => {
            item.classList.remove('dis_no');
         });
      });

      
      btn_add.onclick = (e) => {
         var parent = e.target.parentNode;
         
         buy.classList.add('active');
         
         var product = document.createElement('div');
         product.classList.add('basket__item');

         var title = document.createElement('p');
         title.classList.add('basket__text');
         title.classList.add('basket__title');
         title.innerText = parent.querySelector('.item2__title').innerText;

         var price = document.createElement('p');
         price.classList.add('basket__text');
         price.classList.add('basket__price');
         price.innerText = parent.querySelector('.item2__price').innerText;

         
         var block_text = document.createElement('div');
         block_text.classList.add('basket__block');
         block_text.appendChild(title);
         block_text.appendChild(price);
         
         var btn = document.createElement('button');
         btn.classList.add('basket__btn');
         btn.textContent = 'DEL';

         var img1 = document.createElement('img');
         img1.classList.add('basket__img');
         img1.setAttribute('src',parent.querySelector('img').currentSrc);

         
         var btn02 = document.createElement('button');
         btn02.classList.add('cart__back');
         btn02.classList.add('text2');
         btn02.textContent = 'Back';

         product.appendChild(img1);
         product.appendChild(block_text);
         product.appendChild(btn);
         gallery20.appendChild(btn02);
         gallery20.appendChild(product);

         updatetotal();

         btn.addEventListener('click', ()=> {
            gallery20.removeChild(product);
            updatetotal();
         });
         btn02.addEventListener('click', ()=> {
            basket.classList.remove('active');
            cart.classList.remove('active');
            document.querySelector('.order').classList.remove('active');
            updatetotal();
         });


         buy.onclick = () => {
            gallery20.innerHTML = '';
            gallery20.appendChild(btn02);
            document.querySelector('.order').classList.add('active');
         };
         
         document.querySelector('.order span').onclick = () => {
            document.querySelector('.order').classList.remove('active');
            updatetotal();
         };
      };
   });

});

//  count

function updatetotal(){
   var cartContent = document.getElementsByClassName('basket__items')[0];
   var carboxes = cartContent.getElementsByClassName('basket__item');
   var buy = document.querySelector('.cart__buy');
   count.classList.add('count');
   count.innerHTML = carboxes.length;
   if (carboxes.length == 0) {
      count.innerHTML = '';
      count.classList.remove('count');
      buy.classList.remove('active');
   }
   var total = 0;
   for(var i = 0; i < carboxes.length; i++){
      var cartBox = carboxes[i];
      var priceElem = cartBox.getElementsByClassName('basket__price')[0];
      var price = parseFloat(priceElem.innerText);
      total = total + price;
   }
      // if price has some cents

      document.getElementsByClassName('cart__total2')[0].innerText = total + '  ₽';
      document.querySelector('.price00').innerText = total + '  ₽';
}

//  change

count.onclick = () => {
   basket.classList.add('active');
   cart.classList.add('active');
   away.forEach(item => {
      item.classList.add('dis_no');
   });
   away2.forEach(item => {
      item.classList.add('dis_no');
   });
};

add_btn01.forEach(item => {
   item.addEventListener('click', ()=> {
      cart.classList.remove('active');
      logo.classList.add('active');
      catalog_li.classList.add('active');
      away.forEach(item => {
         item.classList.add('dis_no');
      });
   });
});


catalog_li.onclick = () => {
   catalog.classList.remove('active');
   catalog.classList.remove('dis_no');
   about2.classList.remove('dis_no');
   away2.forEach(item => {
      item.classList.add('dis_no');
   });
   away3.forEach(item => {
      item.classList.add('dis_no');
   });
};
logo.onclick = () => {
   basket.classList.remove('active');
   cart.classList.add('active');
   catalog.classList.add('active');
   about2.classList.add('dis_no');
   away2.forEach(item => {
      item.classList.remove('dis_no');
   });
   away3.forEach(item => {
      item.classList.remove('dis_no');
   });
};

