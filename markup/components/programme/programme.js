$('.programme-item__title').on('click',function(){
    $(this).parent().toggleClass('active');
    $(this).next().slideToggle("slow");
})