var mapView
var venue
var search
var analytics

// For the demo animation
var polygonedLocations = []

// Track which polygon belongs to which location
var locationsByPolygon = {}

// var mapList = document.getElementById("mapList")
var div = document.getElementById( 'mapView' );

// options for Mappedin.getVenue
// You will need to customize this with the data provided by Mappedin. Ask your representative if you don't have a key, secret, and slug.
var venueOptions = {
	clientId: "eiquo5uaTh3ji1iebaepu6EeviegheeK",
	clientSecret: "aile9ceiwieGei0P",
	perspective: "Website",
	things: {
		venue: ['slug', 'name'],
		locations: ['name', 'type', 'description', 'icon', 'logo', 'sortOrder'],
		categories: ['name'],
		maps: ['name', 'elevation', 'shortName']
	},
	venue: "oxford-southcentre-mall"
};

// Options for the MapView constructor
var mapviewOptions = {
	antialias: "AUTO",
	mode: Mappedin.modes.TEST,
	onFirstMapLoaded: function () {
		console.log("First map fully loaded. No more pop in.");
	},
	onDataLoaded: function() {
		console.log("3D data loaded, map usable. Could hide loading screen here, but things will be popping in. Now you can do things that interact with the 3D scene")
		onDataLoaded();
	}
};

// Options for search
var searchOptions = {
	key: "taivanohZafoh3pae7woh5och2ohceeW",
	secret: "iengoos9eiThaegh"
}

// Combined all of them to use Mappedin.initalize
var options = {
	mapview: mapviewOptions,
	venue: venueOptions,
	search: searchOptions,
}

function onPolygonClicked (polygonId) {
	mapView.clearAllPolygonColors()
	mapView.setPolygonColor(polygonId, mapView.colors.select)
	mapView.focusOnPolygon(polygonId, true)
	console.log(polygonId + " clicked")
	var location = locationsByPolygon[polygonId]
	if (location != null) {
		console.log(location.name + " was selected.")
		analytics.locationSelected(location)
	}
	return false
}

function onNothingClicked() {
	console.log("onNothingClicked")
	mapView.clearAllPolygonColors()
}

// Changes the map and updates the Map List
function setMap(map) {
// 	mapList.selectedIndex = mapList.namedItem(map).index
	mapView.setMap(map)
}

// Changes the map in response to a Map List selection
function changeMap() {
	mapView.setMap(mapList.value, function () {
		console.log("Map changed to " + mapList.value)
	})
}

// Convenience function to help us get random array items
function getRandomInArray(array) {
	return array[Math.floor(Math.random() * array.length)]
}

function hightlightStore(name) {
    var store_details_name = name.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    var locations = polygonedLocations;
    var store_details_location = [];
	$.each( locations , function( key, val ) {
        var location_name = (val.name).toLowerCase().replace(/[^a-zA-Z ]/g, "");
	    if(store_details_name == location_name){
	        store_details_location.push(val);
        } 
	});

	var startLocation = store_details_location[0];
	var startPolygon = startLocation.polygons[0];
	var startNode = startPolygon.entrances[0];
	setMap(startPolygon.map)
    
    var primary_color = 0x42393e;
	mapView.setPolygonColor(startPolygon.id, primary_color);
}

// This is your main function. It talks to the mappedin API and sets everything up for you
function initMappedin() {
	Mappedin.initialize(options, div).then(function (data) {
		mapView = data.mapview
		venue = data.venue
		search = data.search
		analytics = data.analytics

	},function (error) {
		window.alert("Mappedin " + error)
	})
}

function onDataLoaded() {
	mapView.onPolygonClicked = onPolygonClicked
	mapView.onNothingClicked = onNothingClicked
	var locations = venue.locations;
	for (var j = 0, jLen = locations.length; j < jLen; ++j) {
		var location = locations[j];

		if (location.polygons.length > 0) {
			polygonedLocations.push(location)
		}
		var locationPolygons = location.polygons;
		for (var k = 0, kLen = locationPolygons.length; k < kLen; ++k) {
			var polygon = locationPolygons[k];
			mapView.addInteractivePolygon(polygon.id)
			
			// A polygon may be attached to more than one location. If that is the case for your venue,
			// you will need some way of determinng which is the "primary" location when it's clicked on.
			var oldLocation = locationsByPolygon[polygon.id]
			if (oldLocation == null || oldLocation.sortOrder > location.sortOrder) {
				locationsByPolygon[polygon.id] = location
			}
		}
	}
	var maps = venue.maps;
	for (var m = 0, mLen = maps.length; m < mLen; ++m) {
		var map = maps[m];
		var mapId = map.id;
		var item = document.createElement("option")
		item.text = map.shortName
		item.value = map.id
		item.id = map.id
		if (mapId == mapView.currentMap) {
			item.selected = true
		}
// 		mapList.add(item)
	}

	mapView.labelAllLocations({
		excludeTypes: [] // If there are certain Location types you don't want to have labels (like amenities), exclude them here)
	})
}

// Start up the mapview

// Uncomment the service worker stuff for an offline fallback. Only works on very modern browsers, but it should fail gracefully.
// This uses the Service Workers API, and relies on the fact that the MapView downloads everything it needs ahead of time.
// Directions, search, and analytics will not function offline, and any images from the Mappedin platform (logos, etc)
// that aren't baked into the map will not be downloaded automatically, you should make sure you do that in init.
// This is really for a kiosk type application.

// if ('serviceWorker' in navigator) {
// 	window.addEventListener('load', function() {
// 		navigator.serviceWorker.register('service-worker.js').then(function(registration) {
// 			// Registration was successful
//     	  	console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       		init();
// 		}).catch(function(err) {
// 			// registration failed :(
// 			console.log('ServiceWorker registration failed: ', err);
// 			init();
// 		});
// 	})
// } else {
	// Otherwise, just init
// 	init();
// }

// mapList.addEventListener("change", changeMap)