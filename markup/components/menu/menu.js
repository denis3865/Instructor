var menuItems = $('ul.menu-list > li > a')
$(menuItems).focus(function(){
  $('.submenu-list').css('display','none')
  $(this).next().css('display','flex')
})

$(menuItems).focusout(function(){
  $('.submenu-list').css('display','none')
})

$( window ).resize(function() {
 if(window.innerWidth > 768){
   $('nav.menu').css('display','block')
 }
 else if(window.innerWidth == 768){
   $('nav.menu').css('display','none')
 } 

});