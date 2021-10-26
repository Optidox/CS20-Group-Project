
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.352271, lng: -71.05524200000001 },
    zoom: 15,
  });

  let user_lat;
  let user_lng;

  navigator.geolocation.getCurrentPosition(function(position) {
   user_lat = position.coords.latitude;
   user_lng = position.coords.longitude;
      var myMarker = new google.maps.Marker({ position: {lat: user_lat, lng: user_lng}, map: map, id: 'yourLocation' });

  });



  //If I had more time I would alter this to scrap data about food banks globally and populate - too much for scope of this project though.
  //For the team - feel free to add in more locations as you wish and in any chosen locations, for now these are just 5 around Boston such as
  //to prove my setup is running properly.
  var locations = [
    ['15 Franklin St, Somerville MA 02145', 42.38636434076425, -71.08322877104638, 1],
    ['230 Highland Ave, Somerville, MA 02143', 42.39076598032533, -71.10960252151133, 2],
    ['1 Jackson Pl, Cambridge, MA 02140', 42.39315927741613, -71.1321242411817, 3],
    ['841 E Broadway, Boston, MA 02127', 42.33646882710478, -71.02616737132848, 4],
    ['850 Harrison Ave 2nd Floor, Boston, MA 02118', 42.334819202593714, -71.073803400431, 5]
  ];

  //Would also have been nice to add data about the open times and then have the users local time checked and compared to the open time, this
  //could then be used to adjust the markers colors, eg green for open red for closed etc.
  //Will add this ^ later if I have time tbh.

  var infowindow = new google.maps.InfoWindow();

  var marker, i;
  var markers = [];

  for (i = 0; i < locations.length; i++) {  
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map,
  });

  markers.push(marker);

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
  }

}


//Will reformat this to be much nicer later on, for now this is my MVP (minimum viable product)