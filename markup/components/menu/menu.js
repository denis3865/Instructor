$('.menu-list a').on('click',function(){
    var submenu = $(this).next();
    $(submenu).css('display','flex')
})