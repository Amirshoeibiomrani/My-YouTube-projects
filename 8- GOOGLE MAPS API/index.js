function initialize() {
    var mapOptions = {
        //Zoom of map on start
        zoom:15,
        //Initial Center Cordinates On Start (United States, NewYork)
        center:new google.maps.LatLng(40.7094, -74.0076),
        // Type Of Map (Roadmap, Satellite, Hybrid, Terrain)
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        // Minimum Zoom Of Map
        minZoom:2
    };

    // Create An Info Window To Display Location Info
    var infoWindow = new google.maps.InfoWindow();

    //Create A Marker For Example: Iran, Mashhad
    var marker = new google.maps.Marker({
        // Cordinates For United States, Florida  
        position: new google.maps.LatLng(27.6988, -81.6486),
        // Attach The Marker
        map: map,
        // Tooltip On Hover
        title:'UNITED STATES, FLORIDA'
    });

    // Adjust Map Center When The Window Is Resized
    google.maps.event.addDOMlistner(window, "resize", function() {
      map.setCenter(mapOptions.center);
});




}

// Initialize The Map When Window Loading Finished
google.maps.event.addDOMlistner(window. "load", initialize);