let restaurantsMatchingFilter = [];

// Defining Selectors

let seriesDropdown = document.querySelectorAll(".dropdown-series");
let locationDropdown = document.querySelectorAll(".country");
let countryFilter = document.querySelector(".country-filter");
let showAllButton = document.querySelector(".show-all");

// Functions

function selectSpotlightSeries() {
  let seriesArray = ["Breakfast, Lunch & Dinner", "Chef's Table France", "Chef's Table", "Street Food Asia"];
  let chosenSpotlightSeries =
    seriesArray[Math.floor(Math.random() * seriesArray.length)];
  filterSpotlightRestaurants(chosenSpotlightSeries);
}

function selectSeries() {
  let chosenSeries = this.textContent;
  filterSpotlightRestaurants(chosenSeries);
}

function dropdownLocationMatches() {
  let filter = countryFilter.value.toUpperCase();
  let locationDropdown = document.querySelectorAll(".country");

  for (i = 0; i < locationDropdown.length; i++) {
    txtValue = locationDropdown[i].textContent || locationDropdown[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      locationDropdown[i].classList.remove("hidden");
    } else {
      locationDropdown[i].classList.add("hidden");
    }
  }
}


function selectLocation() {
  let chosenLocation = this.textContent;
  filterRestaurantsByLocation(chosenLocation);
  hideSpotlight();
}

function hideSpotlight() {
  let allJumbotrons = document.querySelectorAll(".jumbotron-container");
  allJumbotrons.forEach((jumbotron) => {
    jumbotron.classList.add("hidden");
  });
}

function filterSpotlightRestaurants(spotlight) {
  const spotlightRestaurants = restaurants.filter(
    (restaurant) => restaurant.series === spotlight
  );
  restaurantsMatchingFilter = spotlightRestaurants;
  initMap(spotlightRestaurants);
  displaySpotlight(spotlight);
}

function filterRestaurantsByLocation(location) {
  const spotlightRestaurants = restaurants.filter(
    (restaurant) => restaurant.country === location
  );
  restaurantsMatchingFilter = spotlightRestaurants;
  initMap(spotlightRestaurants);
}

function displaySpotlight(spotlight) {
  let allJumbotrons = document.querySelectorAll(".jumbotron-container");
  allJumbotrons.forEach((jumbotron) => {
    jumbotron.classList.add("hidden");
  });
  let jumbotronBLD = document.querySelector(".bld");
  let jumbotronCTF = document.querySelector(".chefstablefrance");
  let jumbotronSFA = document.querySelector(".sfa");
  let jumbotronCT = document.querySelector(".ct")
  switch (spotlight) {
    case "Breakfast, Lunch & Dinner":
      jumbotronBLD.classList.remove("hidden");
      break;
    case "Chef's Table France":
      jumbotronCTF.classList.remove("hidden");
      break;
    case "Street Food Asia":
      jumbotronSFA.classList.remove("hidden");
      break;
    case "Chef's Table":
      jumbotronCT.classList.remove("hidden");
      break;
    default:
      console.log("A different series has been selected");
  }
}

function initMap(spotlightRestaurants) {
  // If restaurantsMatchingFilter length is more than one, user has selected a restaurant card from featured restaurants, so function should not call listFeaturedRestaurants function
  let mapDefaults = {
    zoom: 1,
    backgroundColor: "#D0D0D0",
    center: {
      lat: 40.6976701,
      lng: -74.2598815,
    },
  };

  if (spotlightRestaurants.length === 1 && restaurantsMatchingFilter.length !== 1) {
    let map = new google.maps.Map(document.querySelector("#map"), mapDefaults);
    let infoWindow = new google.maps.InfoWindow();
    let bounds = new google.maps.LatLngBounds();

    let markers = spotlightRestaurants.map((location, i) => {
      let marker = new google.maps.Marker({
        position: location,
      });
      // bounds ensures that the map center shows all marker locations
      bounds.extend(marker.position);
      map.fitBounds(bounds);
      // ensure that the map isn't too zoomed in when highlighting one location. Source: https://stackoverflow.com/questions/4523023/using-setzoom-after-using-fitbounds-with-google-maps-api-v3
      zoomChangeBoundsListener =
        google.maps.event.addListenerOnce(map, 'bounds_changed', function(event) {
          if (this.getZoom()) {
            this.setZoom(16);
          }
        });
      setTimeout(function() {
        google.maps.event.removeListener(zoomChangeBoundsListener);
      }, 2000);

      google.maps.event.addListener(marker, "click", function(event) {
        infoWindow.setContent(
          "<div class='map-content'>" +
          "<div class='marker-header'>" +
          spotlightRestaurants[i].name +
          "</div>" +
          "<div class='map-info'>" +
          spotlightRestaurants[i].address1 +
          "</div>" +
          "<div class='map-info'>" +
          spotlightRestaurants[i].city +
          "</div>" +
          "<div class='map-info'>" +
          spotlightRestaurants[i].country +
          "</div>" +
          "<div class='map-info'>" +
          spotlightRestaurants[i].postcode +
          "</div>" +
          "<div class='map-info'><span class='map-strong'>" +
          spotlightRestaurants[i].series +
          "</span></div>" +
          "<div class='map-info'>Season: " +
          spotlightRestaurants[i].season +
          " | Episode: " +
          spotlightRestaurants[i].episode +
          "</div>" +
          "<div class='map-info episode-link'><a href=" +
          spotlightRestaurants[i].episodeLink +
          " target='_blank' rel='noopener'>Watch on Netflix" +
          "</a>" +
          "</div>" +
          "</div>"
        );
        infoWindow.open(map, marker);
      });
      return marker;
    });

    let markerCluster = new MarkerClusterer(map, markers, {
      imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  } else {
    let map = new google.maps.Map(document.querySelector("#map"), mapDefaults);
    let infoWindow = new google.maps.InfoWindow();
    let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let bounds = new google.maps.LatLngBounds();

    let markers = spotlightRestaurants.map((location, i) => {
      let marker = new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
      // bounds ensures that the map center shows all marker locations
      bounds.extend(marker.position);
      map.fitBounds(bounds);
      google.maps.event.addListener(marker, "click", function(event) {
        infoWindow.setContent(
          "<div class='map-content'>" +
          "<div class='marker-header'>" +
          spotlightRestaurants[i].name +
          "</div>" +
          "<div class='map-info'>" +
          spotlightRestaurants[i].address1 +
          "</div>" +
          "<div class='map-info'>" +
          spotlightRestaurants[i].city +
          "</div>" +
          "<div class='map-info'>" +
          spotlightRestaurants[i].country +
          "</div>" +
          "<div class='map-info'>" +
          spotlightRestaurants[i].postcode +
          "</div>" +
          "<div class='map-info'><span class='map-strong'>" +
          spotlightRestaurants[i].series +
          "</span></div>" +
          "<div class='map-info'>Season: " +
          spotlightRestaurants[i].season +
          " | Episode: " +
          spotlightRestaurants[i].episode +
          "</div>" +
          "<div class='map-info episode-link'><a href=" +
          spotlightRestaurants[i].episodeLink +
          " target='_blank' rel='noopener'>Watch on Netflix" +
          "</a>" +
          "</div>" +
          "</div>"
        );
        infoWindow.open(map, marker);
      });
      return marker;
    });

    let markerCluster = new MarkerClusterer(map, markers, {
      imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
    listFeaturedRestaurants(spotlightRestaurants, markers);
  }
}

function listFeaturedRestaurants(selectedRestaurants, markers) {
  let allFeaturedRestaurants = document.querySelectorAll(".restaurant");
  allFeaturedRestaurants.forEach(restaurant => {
    restaurant.parentNode.removeChild(restaurant);
  });

  for (let i = 0; i < selectedRestaurants.length; i++) {
    for (let j = i; j <= i; j++) {
      createListing(selectedRestaurants[i], markers[j].label);
    }
  }
}

function createListing(restaurant, label) {
  let listing = document.querySelector(".restaurants-listings");
  let div = document.createElement("div");
  div.classList.add("row");
  div.classList.add("restaurant");
  div.innerHTML = `<div class="card restaurant-card">
                <div class="row no-gutters fullscreen">
                    <div class="col-1 align-self-center restaurant-label">
                        <span class="my-auto">${label}</span>
                    </div>
                    <div class="col">
                        <div class="card-body">
                            <h5 class="card-title">${restaurant.name}</h5>
                            <ul class="card-text">
                                <li>${restaurant.city}</li>
                                <li>${restaurant.country}</li>
                            </ul>
                            <div class="d-md-none d-lg-block">
                                <h5 class="card-title">${restaurant.series}</h5>
                                <ul class="card-text">
                                    <li>Season: ${restaurant.season}</li>
                                    <li>Episode: ${restaurant.episode}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col d-none d-md-inline-block d-lg-none">
                        <div class="card-body">
                            <h5 class="card-title">${restaurant.series}</h5>
                            <ul class="card-text">
                                <li>Season: ${restaurant.season}</li>
                                <li>Episode: ${restaurant.episode}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`;

  listing.appendChild(div);

  div.addEventListener("click", function() {
    let specifyCard = document.querySelector(".closer-look");
    let allFeaturedRestaurants = Array.from(document.querySelectorAll(".restaurant"));
    let chosenCard = this;
    let currentSpans = document.querySelector(".overlap-episode-link")
    if (currentSpans === null) {
      let span = document.createElement("span")
      span.classList.add("overlap-episode-link");
      let chosenCardIndex = allFeaturedRestaurants.indexOf(chosenCard);
      let chosenRestaurant = [restaurantsMatchingFilter[allFeaturedRestaurants.indexOf(chosenCard)]]
      allFeaturedRestaurants.forEach(restaurant => {
        restaurant.classList.add("hidden");
      })
      chosenCard.classList.remove("hidden");
      showAllButton.classList.remove("hidden");
      span.innerHTML = `<a class="btn btn-sm btn-red" href="${restaurant.episodeLink}" target="_blank" rel="noopener">Watch Now On Netflix</a>`
      chosenCard.appendChild(span);
      specifyCard.classList.add("hidden");
      initMap(chosenRestaurant);
    } else {
      return;
    }
  })
}

function showAllRestaurants() {
  let specifyCard = document.querySelector(".closer-look");
  let listing = document.querySelector(".restaurants-listings");
  let allRestaurants = Array.from(listing.children);
  specifyCard.classList.remove("hidden");
  allRestaurants.forEach(restaurant => {
    restaurant.classList.remove("hidden");
  })
  initMap(restaurantsMatchingFilter);
  showAllButton.classList.add("hidden");
}

// Event Listeners

window.addEventListener("load", selectSpotlightSeries);

seriesDropdown.forEach((item) => {
  item.addEventListener("click", selectSeries);
});

locationDropdown.forEach((item) => {
  item.addEventListener("click", selectLocation);
});

countryFilter.addEventListener("keyup", dropdownLocationMatches);
// reset the countryFilter input value and restore all dropdown options
countryFilter.addEventListener("change", function() {
  setTimeout(function() {
    countryFilter.value = "";
    dropdownLocationMatches()
  }, 500);
});

showAllButton.addEventListener("click", showAllRestaurants);