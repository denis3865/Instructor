$('.sale-close').on('click',function(){
  $(this).parent().parent().css('display','none')
  $('header').css('margin-top','0px')
})
window.onscroll = function() {
  if(!($("section.sale").css('display') == 'none')){
    var pageOffsetSale =  window.pageYOffset;
    if(pageOffsetSale > 35) {
      $('section.sale').addClass('active');
      $('header').css('margin-top','35px')
    }
    else{
      $('section.sale').removeClass('active')
      $('header').css('margin-top','0px')
    }
  }
};