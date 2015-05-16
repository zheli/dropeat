'use strict';

/**
 * @ngdoc service
 * @name dropeatApp.Map
 * @description
 * # Map
 * Service in the dropeatApp.
 */
angular.module('dropeatApp')
  .service('Map', function ($q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.init = function() {
        var options = {
            center: new google.maps.LatLng(57.70523710000001, 11.96858629999997),
            zoom: 15,
            disableDefaultUI: true    
        }
        this.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        this.places = new google.maps.places.PlacesService(this.map);
    }
    
    this.search = function(str) {
        var d = $q.defer();
        this.places.textSearch({query: str}, function(results, status) {
            if (status == 'OK') {
                d.resolve(results[0]);
            }
            else d.reject(status);
        });
        return d.promise;
    }
    
    this.addMarker = function(res) {
        if(this.marker) this.marker.setMap(null);
        this.marker = new google.maps.Marker({
            map: this.map,
            position: res.geometry.location,
            animation: google.maps.Animation.DROP
        });
        this.map.setCenter(res.geometry.location);
    }

    this.addRestaurantMarker = function (lat,lon) {
		this.marker = new google.maps.Marker({
        	position: new google.maps.LatLng(lat, lon),
        	map: this.map
        });
    }

    var infoWindow = null;

   	this.initInfoWindow = function (lat, lan) {
	    infoWindow = new google.maps.InfoWindow();
	    infoWindow.setOptions({
	        content: "Vapiano",
	        position: new google.maps.LatLng(lat,lan),
	    });
	    infoWindow.open(this.map); 
	}


    this.addCircle = function(lat,lon) {
        var populationOptions = {
	      strokeColor: '#FF0000',
	      strokeOpacity: 0.8,
	      strokeWeight: 2,
	      fillColor: '#FF0000',
	      fillOpacity: 0.35,
	      map: this.map,
	      center: new google.maps.LatLng(lat, lon),
	      radius: Math.sqrt(30) * 100
    };

	    // Add the circle for this city to the map.
	    this.cityCircle = new google.maps.Circle(populationOptions);
	}



  });
