$( document ).ready(function() {

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
    });

    myMap.geoObjects.add(myPlacemark);
};

});