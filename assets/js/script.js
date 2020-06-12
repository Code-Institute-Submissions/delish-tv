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
    let locations = [ 
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
        ];

        let infowindow = new google.maps.InfoWindow({
            content: "<div class='map-info'>" + restaurants[0].name + "</div>"
        })

                let markers = locations.map((location, i) => {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
        });
        let markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
            
            markers.forEach((marker) => {
                marker.addListener("click", function() {
                infowindow.open(map, marker);
            });
        });
    };