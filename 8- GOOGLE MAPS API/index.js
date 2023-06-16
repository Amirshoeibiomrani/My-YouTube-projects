// Set Map 
function initialize() {
    var mapOptions = {
// Zoom Of Map On Start
        zoom: 13,
// Initial Center Cordinates On Start (UNITED STATES, NEW YORK)
        center: new google.maps.LatLng(40.711095, -74.011779),
// Type Of Map (ROADMAP, SATELITE, HYBRID, TERRAIN )
        mapTypeId: google.maps.MapTypeId.ROADMAP,
// Minimum Zoom Of Map 
        minZoom: 5
    };

// Create A New Map Instance Using Provided Options
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

// Create An Info Window To Display Location Info
    var infoWindow = new google.maps.InfoWindow();

// Create A Marker For Eample: UNITED STATES, FLORIDA
    var marker = new google.maps.Marker({

        // Cordinates For UNITED STATES, FLORIDA
        position: new google.maps.LatLng(27.662880, -81.669039),

// Attach The Marker  
        map: map,

// Tooltip On Hover
        title: 'UNITED STATES, FLORIDA'
    });

// Add Click EventListener For Marker
    marker.addListener('click', function () {
        infoWindow.setContent(marker.title);
        infoWindow.open(map, marker);

    });

// Adjust Map Center When The Window Is Resized
    google.maps.event.addDomListener(window, "resize", function () {
        map.setCenter(mapOptions.center);
    });

}

// Initialize The Map When Window Loading Finished
google.maps.event.addDomListener(window, "load", initialize);