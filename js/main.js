$(document).ready(function(){
   $('.menu_burger').click(function(event) {
      $('.menu_burger,.ul').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
