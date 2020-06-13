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
        episodeLink: "https://www.netflix.com/watch/81076571?trackId=13752289&tctx=0%2C0%2C74f9d99d-98cb-4cdf-9f68-fd9e4083cb4b-230343844%2C%2C%2C",
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
        episodeLink: "https://www.netflix.com/watch/81076571?trackId=13752289&tctx=0%2C0%2C74f9d99d-98cb-4cdf-9f68-fd9e4083cb4b-230343844%2C%2C%2C",
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
        episodeLink: "https://www.netflix.com/watch/81076571?trackId=13752289&tctx=0%2C0%2C74f9d99d-98cb-4cdf-9f68-fd9e4083cb4b-230343844%2C%2C%2C",
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
        episodeLink: "https://www.netflix.com/watch/81076571?trackId=13752289&tctx=0%2C0%2C74f9d99d-98cb-4cdf-9f68-fd9e4083cb4b-230343844%2C%2C%2C",
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
    let infoWindow = new google.maps.InfoWindow();
    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let markers = restaurants.map((location, i) => {
            let marker = new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });
            google.maps.event.addListener(marker, "click", function(event) {
                infoWindow.setContent("<div class='map-content'>" + "<div class='marker-header'>" + restaurants[i].name + "</div>" + "<div class='map-info'>" + restaurants[i].address1 + "</div>" + "<div class='map-info'>" + restaurants[i].city + "</div>" + "<div class='map-info'>" + restaurants[i].country + "</div>" + "<div class='map-info'>" + restaurants[i].postcode + "</div>" + "<div class='map-info'><span class='map-strong'>" + restaurants[i].series + "</span></div>" + "<div class='map-info'>Season: " + restaurants[i].season + " | Episode: " + restaurants[i].episode + "</div>" + "<div class='map-info episode-link'><a href=" + restaurants[i].episodeLink + ">Watch on Netflix" + "</a>" + "</div>" + "</div>");
                infoWindow.open(map, marker);
            })
            return marker;     
        });
        let markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}            
        
            
