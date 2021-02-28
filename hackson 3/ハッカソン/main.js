
//-----------スライド ---------
$(function(){

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        effect: 'coverflow',
        slidesPerView: 2, // or 'auto'
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        preventClicks: false, 
        preventClicksPropagation: false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },      
      
    });


     //スライド画像をクリックでリンク先へ飛ぶ
 $('.swiper-container a').on('click', function(event) {
  event.preventDefault();
  if ($('.swiper-slide').hasClass('swiper-slide-active') === false) {
   if($(this).attr('target') !== undefined){
    window.open($(this).attr('href'),$(this).attr('target'));
   }else{
    window.location.href = $(this).attr('href');
   }
  }
 });
  
});
