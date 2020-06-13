// key: AIzaSyAKKq48oILIJR-D3a22vDaJXZ8-4glyBrE
let restaurants = [
    {
        name: "Lee's Donuts",
        address1: "1689 Johnston St",
        city: "Vancouver",
        country: "Canada",
        postcode: "BC V6H 3R9",
        lat: 49.2722501,
        lng: -123.1352766,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 1,
        episodeLink: "",
        website: "https://www.leesdonuts.ca/"
    },
    {
        name: "Sun Sui Wah Seafood",
        address1: "4940 Number 3 Rd, Richmond",
        city: "Vancouver",
        country: "Canada",
        postcode: "BC V6X 3A5",
        lat: 49.1780648,
        lng: -123.1377265,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 1,
        episodeLink: "",
        website: "http://www.sunsuiwah.ca/"
    },
    {
        name: "Apna Bhaia Sweet & Restaurant",
        address1: "6616 Fraser St",
        city: "Vancouver",
        country: "Canada",
        postcode: "BC V5X 3T5",
        lat: 49.2243079,
        lng: -123.0928184,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 1,
        episodeLink: "",
        website: "http://apnabhaia.com/"
    },
    {
        name: "HK BBQ Master",
        address1: "4651 Number 3 Rd, Richmond",
        city: "Vancouver",
        country: "Canada",
        postcode: "BC V6X 2C4",
        lat: 49.1797407,
        lng: -123.1400272,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 1,
        episodeLink: "",
        website: ""
    },
    {
        name: "Chez Lamine Hadj Mustapha",
        address1: "Derb Semmarine",
        city: "Marrakech",
        country: "Morocco",
        postcode: "40000",
        lat: 31.6269935,
        lng: -7.9898378,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 2,
        episodeLink: "",
        website: ""
    },
    {
        name: "Grand Café de la Poste",
        address1: "Angle Boulevard El Mansour Eddahbi et Avenue Imam،",
        city: "Marrakech",
        country: "Morocco",
        postcode: "40000",
        lat: 31.6330789,
        lng: -8.0122642,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 2,
        episodeLink: "",
        website: "http://www.grandcafedelaposte.restaurant/"
    },
    {
        name: "Winsome",
        address1: "6080 Center Dr",
        city: "Los Angeles",
        country: "United States",
        postcode: "CA 90045",
        lat: 33.9725228,
        lng: -118.4280101,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 3,
        episodeLink: "",
        website: "https://www.eatwinsome.com/"
    },
    {
        name: "Hot n Juicy Crawfish",
        address1: "7100 Santa Monica Blvd #150",
        city: "West Hollywood",
        country: "United States",
        postcode: "CA 90046",
        lat: 34.0905441,
        lng: -118.3467855,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 3,
        episodeLink: "",
        website: "http://hotnjuicycrawfish.com/"
    },
    {
        name: "Gardena Bowl Coffee Shop",
        address1: "15707 S Vermont Ave",
        city: "Gardena",
        country: "United States",
        postcode: "CA 90247",
        lat: 33.88804,
        lng: -118.2944077,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 3,
        episodeLink: "",
        website: "http://gardenabowlcoffeeshop.com/"
    },
    {
        name: "Chikara Mochi",
        address1: "16108 S Western Ave",
        city: "Gardena",
        country: "United States",
        postcode: "CA 90247",
        lat: 33.8847021,
        lng: -118.3111358,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 3,
        episodeLink: "",
        website: ""
    },
    {
        name: "Otafuku Noodle House",
        address1: "16525 S Western Ave",
        city: "Gardena",
        country: "United States",
        postcode: "CA 90247",
        lat: 33.8804593,
        lng: -118.3115567,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 3,
        episodeLink: "",
        website: "http://places.singleplatform.com/otofuku-noodle-house/menu"
    },
    {
        name: "Raffles Hotel Le Royal",
        address1: "87 Samdach Sang Neayok Srey St.",
        city: "Phnom Penh",
        country: "Cambodia",
        postcode: "",
        lat: 11.5695572,
        lng: 104.9187193,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 4,
        episodeLink: "",
        website: ""
    },
    {
        name: "Malis Restaurant",
        address1: "Street 41",
        city: "Phnom Penh",
        country: "Cambodia",
        postcode: "",
        lat: 11.5531691,
        lng: 104.9268585,
        series: "Breakfast, Lunch & Dinner",
        season: 1,
        episode: 4,
        episodeLink: "",
        website: ""
    }
];

function initMap() {
    let mapDefaults = {
        zoom: 2,
                center: {
                    lat: 40.6976701,
                    lng: -74.2598815
                }
    }    
    
    let map = new google.maps.Map(document.querySelector("#map"), mapDefaults);

    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    /* let locations = [ 
            {
                lat: restaurants[0].lat,
                lng: restaurants[0].lng
            },
            {
                lat: 49.1780648,
                lng: -123.1377265
            },
            {
                lat: 49.2243079,
                lng: -123.0928184
            },
            {
                lat: 49.1797407,
                lng: -123.1400272
            },
            {
                lat: 31.6269935,
                lng: -7.9898378
            },
            {
                lat: 31.6330789,
                lng: -8.0122642
            },
            {
                lat: 33.9725228,
                lng: -118.4280101
            },
            {
                lat: 34.0905441,
                lng: -118.3467855
            },
            {
                lat: 33.88804,
                lng: -118.2944077
            },
            {
                lat: 33.8847021,
                lng: -118.3111358
            },
            {
                lat: 33.8804593,
                lng: -118.3115567
            },
            {
                lat: 11.5761988,
                lng: 104.9161599
            },
            {
                lat: 11.5695572,
                lng: 104.9187193
            },
            {
                lat: 11.5531691,
                lng: 104.9268585
            }
        ]; */

        
        let infoWindowContent = [];
        for (let i = 0; i < restaurants.length; i++) {
            infoWindowContent[i] = getInfoWindowDetails(restaurants[i]);
            let location = new google.maps.LatLng(restaurants[i].lat,restaurants[i].lng);
            marker = new google.maps.Marker({
                position: location,
                map: map,
                label: labels[i % labels.length]
            });

            google.maps.event.addListener(marker, "click", (function(marker, i) {
                return function() {
                    infoWindow.setContent(infoWindowContent[i]);
                    infoWindow.open(map, marker);
                }
            })(marker, i));
        }

        function getInfoWindowDetails(location) {
            let infoContentString = "<div class='map-info'>" + restaurants[i].name + "</div>";
            return infoContentString
        }
        /*
        let infoWindowContent = new google.maps.InfoWindow({
            content: "<div class='map-info'>" + restaurants[0].name + "</div>"
        })
*/
        /*        let markers = locations.map((location, i) => {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            }); 
        });*/
        
        
        /* let markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            
            markers.forEach((marker) => {
                marker.addListener("click", function() {
                infowindow.open(map, marker);
            });
        }); */
    };