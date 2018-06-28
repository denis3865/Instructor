$( document ).ready(function() {

if(document.getElementById('map')){    
ymaps.ready(init);
var myMap;

function init(){     
    myMap = new ymaps.Map("map", {
        center: [59.919865, 30.466704],
        zoom: 15,
        controls : [],
        
    });
    myMap.behaviors.disable('scrollZoom') 
    myPlacemark = new ymaps.Placemark([59.919865, 30.466704], { 
        hintContent: 'Санкт-Петербург!', 
    },
    {
       iconLayout: 'default#image',
       // Custom image for the placemark icon.
       iconImageHref: '../static/img/assets/contacts/marker.svg',
       iconImageSize: [50, 50],
    });

    myMap.geoObjects.add(myPlacemark);
};
}
});