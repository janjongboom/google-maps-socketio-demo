document.addEventListener("DOMContentLoaded", function() {

function initialize(callback) {
    var myOptions = {
        center: new google.maps.LatLng(52.42, 4.73),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    callback(map);
};

initialize(function (map) {
    
});

});









/*
    var ele = {
        form: document.getElementById("frmSearch"),
        search: document.getElementById("inpAddress")
    };
    
    ele.form.addEventListener("submit", function (ev) {
        var addr = ele.search.value;
        
        console.log(addr);

        ev.preventDefault();
    });
*/

//            /**
//             * Do a geocode search
//             */
//            function search(address, callback) {
//                var g = new google.maps.Geocoder();
//                
//                g.geocode({ address: address }, function (res) {
//                    if (!res || !res.length) return;
//                    
//                    var latlng = (res[0].geometry.location);
//                    callback(latlng);
//                });
//            }
//            
//            /**
//             * Add a point to the map
//             */
//            function addPoint(description, latlng) {            
//                var marker = new google.maps.Marker({
//                    position: new google.maps.LatLng(latlng.lat, latlng.lng),
//                    map: map,
//                    title: description
//                });
//            }
//            
//            /**
//             * On click, add a point as well
//             */
//            google.maps.event.addListener(map, 'click', function(event) {
//                sendPointToServer("", event.latLng);
//            }); 
//            
//            /**
//             * Emit a LatLng to the server
//             */
//            function sendPointToServer(description, latlng) {
//                socket.emit("point", JSON.stringify({
//                    desc: description,
//                    latlng: {
//                        lat: latlng.$a,
//                        lng: latlng.ab
//                    }
//                }));
//            }   
//            
//            var socket = io.connect("http://" + window.location.host);
//            socket.on('point', function(data) {
//                data = JSON.parse(data);
//                addPoint(data.desc, data.latlng);
//            });            