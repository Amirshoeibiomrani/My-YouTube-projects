//Set Map 
function initialize() {
    var mapOptions = {
        //Zoom of map on start
        zoom: 15,
        //Initial Center Cordinates On Start (United States, NewYork)
        center: new google.maps.LatLng(40.7103, -74.0124),
        // Type Of Map (Roadmap, Satellite, Hybrid, Terrain)
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Minimum Zoom Of Map
        minZoom: 4
    };

    //Create A New Map Instance Using Propvided Options
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Create An Info Window To Display Location Info
    var infoWindow = new google.maps.InfoWindow();

    //Create A Marker For Example: UNITED STATES, FLORIDA
    var marker = new google.maps.Marker({
        // Cordinates For  UNITED STATES, FLORIDA 
        position: new google.maps.LatLng(27.6988, -81.6486),

        // Attach The Marker
        map: map,

        // Tooltip On Hover
        title: 'UNITED STATES, FLORIDA'
    });

    // Add Click Event Listener For Marker
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
google.maps.event.addDomListener(window, 'load', initialize);