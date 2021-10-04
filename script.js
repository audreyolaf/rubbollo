// const mymap = L.map('satelliteMap').setView([51.505, -0.09], 5);
// var map = L.map('map').setView([0, -100], 4);
//   L.tileLayer('https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=jNcxtsCnE52tHVbIMwXf', {
//     attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
//   }).addTo(map); 

window.addEventListener("load", eventWindowLoaded, false);
    function eventWindowLoaded() {
        var wwd = new WorldWind.WorldWindow("canvasOne");
        wwd.addLayer(new WorldWind.BMNGOneImageLayer());
        wwd.addLayer(new WorldWind.BMNGLandsatLayer());

        wwd.addLayer(new WorldWind.CompassLayer());
        wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
        wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

        var placemarkLayer = new WorldWind.RenderableLayer();
        wwd.addLayer(placemarkLayer);

        var placemarkAttributes = new WorldWind.PlacemarkAttributes(null);

        placemarkAttributes.imageOffset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.3,
            WorldWind.OFFSET_FRACTION, 0.0);

        placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 1.0);
        placemarkAttributes.imageSource = "debreePix.png";

        var position = new WorldWind.Position(55.0, -106.0, 100.0);
        var placemark = new WorldWind.Placemark(position, false, placemarkAttributes);
        placemarkLayer.addRenderable(placemark);
    }


// var positionAndVelocity = satellite.sgp4(satrec, time);

// // Sample TLE
// var tleLine1 = '1 25544U 98067A   19156.50900463  .00003075  00000-0  59442-4 0  9992',
//     tleLine2 = '2 25544  51.6433  59.2583 0008217  16.4489 347.6017 15.51174618173442';    

// // Initialize a satellite record
// var satrec = satellite.twoline2satrec(tleLine1, tleLine2);

// //  Propagate satellite using time since epoch (in minutes).
// var positionAndVelocity = satellite.sgp4(satrec, timeSinceTleEpochMinutes);

// //  Or you can use a JavaScript Date
// var positionAndVelocity = satellite.propagate(satrec, new Date());

// // The position_velocity result is a key-value pair of ECI coordinates.
// // These are the base results from which all other coordinates are derived.
// var positionEci = positionAndVelocity.position,
//     velocityEci = positionAndVelocity.velocity;

// // Set the Observer at 122.03 West by 36.96 North, in RADIANS
// var observerGd = {
//     longitude: satellite.degreesToRadians(-122.0308),
//     latitude: satellite.degreesToRadians(36.9613422),
//     height: 0.370
// };

// // You will need GMST for some of the coordinate transforms.
// // http://en.wikipedia.org/wiki/Sidereal_time#Definition
// var gmst = satellite.gstime(new Date());

// // You can get ECF, Geodetic, Look Angles, and Doppler Factor.
// var positionEcf   = satellite.eciToEcf(positionEci, gmst),
//     observerEcf   = satellite.geodeticToEcf(observerGd),
//     positionGd    = satellite.eciToGeodetic(positionEci, gmst),
//     lookAngles    = satellite.ecfToLookAngles(observerGd, positionEcf),
//     dopplerFactor = satellite.dopplerFactor(observerCoordsEcf, positionEcf, velocityEcf);

// // The coordinates are all stored in key-value pairs.
// // ECI and ECF are accessed by `x`, `y`, `z` properties.
// var satelliteX = positionEci.x,
//     satelliteY = positionEci.y,
//     satelliteZ = positionEci.z;

// // Look Angles may be accessed by `azimuth`, `elevation`, `range_sat` properties.
// var azimuth   = lookAngles.azimuth,
//     elevation = lookAngles.elevation,
//     rangeSat  = lookAngles.rangeSat;

// // Geodetic coords are accessed via `longitude`, `latitude`, `height`.
// var longitude = positionGd.longitude,
//     latitude  = positionGd.latitude,
//     height    = positionGd.height;

// //  Convert the RADIANS to DEGREES.
// var longitudeDeg = satellite.degreesLong(longitude),
//     latitudeDeg  = satellite.degreesLat(latitude);