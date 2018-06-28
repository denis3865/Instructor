var menuItems = $('ul.menu-list > li > a')
$(menuItems).focus(function(){
  $('.submenu-list').css('display','none')
  $(this).next().css('display','flex')
})

$(menuItems).focusout(function(){
  $('.submenu-list').css('display','none')
})