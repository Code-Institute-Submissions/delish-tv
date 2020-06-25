// Restaurants featured in all series covered by this site
let restaurants = [{
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
    website: "https://www.leesdonuts.ca/",
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
    website: "http://www.sunsuiwah.ca/",
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
    website: "http://apnabhaia.com/",
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
    website: "",
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
    episodeLink: "https://www.netflix.com/watch/81076572?trackId=14277281&tctx=0%2C1%2C847a7e7c-0c26-4565-b1fd-9c5549d10792-1572015%2C%2C%2C",
    website: "",
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
    episodeLink: "https://www.netflix.com/watch/81076572?trackId=14277281&tctx=0%2C1%2C847a7e7c-0c26-4565-b1fd-9c5549d10792-1572015%2C%2C%2C",
    website: "http://www.grandcafedelaposte.restaurant/",
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
    episodeLink: "https://www.netflix.com/watch/81076574?trackId=14277281&tctx=0%2C2%2C847a7e7c-0c26-4565-b1fd-9c5549d10792-1572015%2C%2C%2C",
    website: "https://www.eatwinsome.com/",
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
    episodeLink: "https://www.netflix.com/watch/81076574?trackId=14277281&tctx=0%2C2%2C847a7e7c-0c26-4565-b1fd-9c5549d10792-1572015%2C%2C%2C",
    website: "http://hotnjuicycrawfish.com/",
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
    episodeLink: "https://www.netflix.com/watch/81076574?trackId=14277281&tctx=0%2C2%2C847a7e7c-0c26-4565-b1fd-9c5549d10792-1572015%2C%2C%2C",
    website: "http://gardenabowlcoffeeshop.com/",
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
    episodeLink: "https://www.netflix.com/watch/81076574?trackId=14277281&tctx=0%2C2%2C847a7e7c-0c26-4565-b1fd-9c5549d10792-1572015%2C%2C%2C",
    website: "",
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
    episodeLink: "https://www.netflix.com/watch/81076574?trackId=14277281&tctx=0%2C2%2C847a7e7c-0c26-4565-b1fd-9c5549d10792-1572015%2C%2C%2C",
    website: "http://places.singleplatform.com/otofuku-noodle-house/menu",
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
    episodeLink: "https://www.netflix.com/watch/81076570?trackId=14277281&tctx=0%2C3%2C847a7e7c-0c26-4565-b1fd-9c5549d10792-1572015%2C%2C%2C",
    website: "",
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
    episodeLink: "https://www.netflix.com/watch/81076570?trackId=14277281&tctx=0%2C3%2C847a7e7c-0c26-4565-b1fd-9c5549d10792-1572015%2C%2C%2C",
    website: "",
  },
  {
    name: "L'Arpège",
    address1: "84 Rue de Varenne",
    city: "Paris",
    country: "France",
    postcode: "75007",
    lat: 48.8557372,
    lng: 2.3170058,
    series: "Chef's Table France",
    season: 1,
    episode: 1,
    episodeLink: "https://www.netflix.com/watch/80075157?trackId=14277281&tctx=0%2C0%2Cff6e19b5-5706-4dbe-8a41-95b8834040a9-3136058%2C%2C%2C",
    website: "http://www.alain-passard.com/",
  },
  {
    name: "La Marine",
    address1: "5 Rue Marie Lemonnier",
    city: "Noirmoutier-en-l'Île",
    country: "France",
    postcode: "85330",
    lat: 47.0237,
    lng: -2.3021105,
    series: "Chef's Table France",
    season: 1,
    episode: 2,
    episodeLink: "https://www.netflix.com/watch/80075159?trackId=14277281&tctx=0%2C1%2Cff6e19b5-5706-4dbe-8a41-95b8834040a9-3136058%2C%2C%2C",
    website: "http://alexandrecouillon.com/",
  },
  {
    name: "Yam’Tcha",
    address1: "121 Rue Saint-Honoré",
    city: "Paris",
    country: "France",
    postcode: "75001",
    lat: 48.8613889,
    lng: 2.339478,
    series: "Chef's Table France",
    season: 1,
    episode: 3,
    episodeLink: "https://www.netflix.com/watch/80075158?trackId=14277281&tctx=0%2C2%2Cff6e19b5-5706-4dbe-8a41-95b8834040a9-3136058%2C%2C%2C",
    website: "http://www.yamtcha.com/",
  },
  {
    name: "La Maison Troisgros",
    address1: "728 Route de Villerest",
    city: "Ouches",
    country: "France",
    postcode: "42155",
    lat: 45.981075,
    lng: 3.8724685,
    series: "Chef's Table France",
    season: 1,
    episode: 4,
    episodeLink: "https://www.netflix.com/watch/80075160?trackId=14277281&tctx=0%2C3%2Cff6e19b5-5706-4dbe-8a41-95b8834040a9-3136058%2C%2C%2C",
    website: "http://www.troisgros.com/",
  },
  {
    name: "Jay Fai",
    address1: "327 Maha Chai Rd",
    city: "Phra Nakhon",
    country: "Thailand",
    postcode: "Bangkok 10200",
    lat: 13.752581,
    lng: 100.5025776,
    series: "Street Food Asia",
    season: 1,
    episode: 1,
    episodeLink: "https://www.netflix.com/watch/80988020?trackId=14277281&tctx=0%2C0%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Khun Suthep",
    address1: "Chaloem Phrakiat Ratchakan Thi 9 Soi 30",
    city: "Prawet",
    country: "Thailand",
    postcode: "Bangkok 10250",
    lat: 13.6856663,
    lng: 100.6820263,
    series: "Street Food Asia",
    season: 1,
    episode: 1,
    episodeLink: "https://www.netflix.com/watch/80988020?trackId=14277281&tctx=0%2C0%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Jek Pui",
    address1: "25 Mangkon Rd",
    city: "Pom Prap Sattru Phai",
    country: "Thailand",
    postcode: "Bangkok 10100",
    lat: 13.7437524,
    lng: 100.5068306,
    series: "Street Food Asia",
    season: 1,
    episode: 1,
    episodeLink: "https://www.netflix.com/watch/80988020?trackId=14277281&tctx=0%2C0%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Izakaya Toyo",
    address1: "3 Chome-2-26 Higashinodamachi",
    city: "Osaka",
    country: "Japan",
    postcode: "534-0024",
    lat: 34.697203,
    lng: 135.5329286,
    series: "Street Food Asia",
    season: 1,
    episode: 2,
    episodeLink: "https://www.netflix.com/watch/80988024?trackId=14277281&tctx=0%2C1%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "https://www.instagram.com/izakayatoyo/?hl=ja",
  },
  {
    name: "Takoyaki Umaiya",
    address1: "4-21 Naniwacho",
    city: "Osaka",
    country: "Japan",
    postcode: "530-0022",
    lat: 34.7075749,
    lng: 135.5083074,
    series: "Street Food Asia",
    season: 1,
    episode: 2,
    episodeLink: "https://www.netflix.com/watch/80988024?trackId=14277281&tctx=0%2C1%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Fue",
    address1: "5-2-7 Higashinodamachi",
    city: "Osaka",
    country: "Japan",
    postcode: "",
    lat: 34.6993183,
    lng: 135.5313959,
    series: "Street Food Asia",
    season: 1,
    episode: 2,
    episodeLink: "https://www.netflix.com/watch/80988024?trackId=14277281&tctx=0%2C1%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Sohan Lal Dalchand Mangla Chaat Wale",
    address1: "Mayur Vihar Phase 1",
    city: "New Delhi",
    country: "India",
    postcode: "Delhi 110091",
    lat: 28.6076816,
    lng: 77.293823,
    series: "Street Food Asia",
    season: 1,
    episode: 3,
    episodeLink: "https://www.netflix.com/watch/80988021?trackId=14277281&tctx=0%2C2%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Kallu Nihari",
    address1: "180 Chhatta Lal Mian Delhi",
    city: "Delhi",
    country: "India",
    postcode: "110002",
    lat: 28.6421113,
    lng: 77.2351879,
    series: "Street Food Asia",
    season: 1,
    episode: 3,
    episodeLink: "https://www.netflix.com/watch/80988021?trackId=14277281&tctx=0%2C2%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Karim’s",
    address1: "16 Urdu Bazar Road",
    city: "Delhi",
    country: "India",
    postcode: "011-23265057",
    lat: 28.6499244,
    lng: 77.2331166,
    series: "Street Food Asia",
    season: 1,
    episode: 3,
    episodeLink: "https://www.netflix.com/watch/80988021?trackId=14277281&tctx=0%2C2%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Dharmender Makkan",
    address1: "830, Pan Mandi, Narain Market",
    city: "New Delhi",
    country: "India",
    postcode: "Delhi 110006",
    lat: 28.656077,
    lng: 77.2106716,
    series: "Street Food Asia",
    season: 1,
    episode: 3,
    episodeLink: "https://www.netflix.com/watch/80988021?trackId=14277281&tctx=0%2C2%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Mbah Satinem",
    address1: "Jln. Bumijo No.50",
    city: "Yogyakarta",
    country: "Indonesia",
    postcode: "",
    lat: -7.783311,
    lng: 110.3613623,
    series: "Street Food Asia",
    season: 1,
    episode: 4,
    episodeLink: "https://www.netflix.com/watch/80988023?trackId=14277281&tctx=0%2C3%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Arya Snack and Food",
    address1: "Jl. Brigjen Katamso No.42",
    city: "Yogyakarta",
    country: "Indonesia",
    postcode: "55121",
    lat: -7.8048704,
    lng: 110.3670818,
    series: "Street Food Asia",
    season: 1,
    episode: 4,
    episodeLink: "https://www.netflix.com/watch/80988023?trackId=14277281&tctx=0%2C3%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Gudeg Mbah Lindu",
    address1: "Sosrowijayan St No.30",
    city: "Yogyakarta",
    country: "Indonesia",
    postcode: "55271",
    lat: -7.7915694,
    lng: 110.3618211,
    series: "Street Food Asia",
    season: 1,
    episode: 4,
    episodeLink: "https://www.netflix.com/watch/80988023?trackId=14277281&tctx=0%2C3%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Mie Lethek Cap Garuda",
    address1: "Bendo, RT. 101, Trimurti Srandakan",
    city: "Yogyakarta",
    country: "Indonesia",
    postcode: "55762",
    lat: -7.9271155,
    lng: 110.2502055,
    series: "Street Food Asia",
    season: 1,
    episode: 4,
    episodeLink: "https://www.netflix.com/watch/80988023?trackId=14277281&tctx=0%2C3%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Smartfish",
    address1: "361 Zhongsheng Road",
    city: "Chiayi",
    country: "Taiwan",
    postcode: "600",
    lat: 23.4789419,
    lng: 120.3792563,
    series: "Street Food Asia",
    season: 1,
    episode: 5,
    episodeLink: "https://www.netflix.com/watch/80988022?trackId=14277281&tctx=0%2C4%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Uncle Goat",
    address1: "No.48-16, Songzaijiao, Songshan",
    city: "Minxiong Township",
    country: "Taiwan",
    postcode: "",
    lat: 23.8369907,
    lng: 120.9913491,
    series: "Street Food Asia",
    season: 1,
    episode: 5,
    episodeLink: "https://www.netflix.com/watch/80988022?trackId=14277281&tctx=0%2C4%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Magistrate Liu",
    address1: "No. 197, Gongming Road",
    city: "Chiayi City",
    country: "Taiwan",
    postcode: "",
    lat: 23.4799118,
    lng: 120.4518923,
    series: "Street Food Asia",
    season: 1,
    episode: 5,
    episodeLink: "https://www.netflix.com/watch/80988022?trackId=14277281&tctx=0%2C4%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Tsui-Eh",
    address1: "Wenhua Road Night Market",
    city: "Chiayi",
    country: "Taiwan",
    postcode: "",
    lat: 23.4794816,
    lng: 120.4475088,
    series: "Street Food Asia",
    season: 1,
    episode: 5,
    episodeLink: "https://www.netflix.com/watch/80988022?trackId=14277281&tctx=0%2C4%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Cho Yonsoon",
    address1: "Gwangjang Market",
    city: "Seoul",
    country: "South Korea",
    postcode: "",
    lat: 37.5700791,
    lng: 126.9993838,
    series: "Street Food Asia",
    season: 1,
    episode: 6,
    episodeLink: "https://www.netflix.com/watch/80988025?trackId=14277281&tctx=0%2C5%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Gunsook Jung",
    address1: "Gwangjang Market",
    city: "Seoul",
    country: "South Korea",
    postcode: "",
    lat: 37.5702083,
    lng: 126.9989214,
    series: "Street Food Asia",
    season: 1,
    episode: 6,
    episodeLink: "https://www.netflix.com/watch/80988025?trackId=14277281&tctx=0%2C5%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Gumsoon Park and Sangmi Chu",
    address1: "Gwangjang Market",
    city: "Seoul",
    country: "South Korea",
    postcode: "",
    lat: 37.5701301,
    lng: 126.9977908,
    series: "Street Food Asia",
    season: 1,
    episode: 6,
    episodeLink: "https://www.netflix.com/watch/80988025?trackId=14277281&tctx=0%2C5%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Jo Jungja",
    address1: "Euljiro 6(yuk)-ga",
    city: "Seoul",
    country: "South Korea",
    postcode: "",
    lat: 37.5674979,
    lng: 127.0049352,
    series: "Street Food Asia",
    season: 1,
    episode: 6,
    episodeLink: "https://www.netflix.com/watch/80988025?trackId=14277281&tctx=0%2C5%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Truoc",
    address1: "Hẻm 171 Cô Bắc, District 1",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    postcode: "",
    lat: 10.7623749,
    lng: 106.6906261,
    series: "Street Food Asia",
    season: 1,
    episode: 7,
    episodeLink: "https://www.netflix.com/watch/80245521?trackId=14277281&tctx=0%2C6%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Anh Manh",
    address1: "14/5Bis Kỳ Đồng, Phường 9",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    postcode: "",
    lat: 10.783817,
    lng: 106.6797123,
    series: "Street Food Asia",
    season: 1,
    episode: 7,
    episodeLink: "https://www.netflix.com/watch/80245521?trackId=14277281&tctx=0%2C6%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Traditional Haig Road Putu Piring",
    address1: "728 Ang Mo Kio Ave 6",
    city: "",
    country: "Singapore",
    postcode: "560728",
    lat: 1.3726996,
    lng: 103.8458839,
    series: "Street Food Asia",
    season: 1,
    episode: 8,
    episodeLink: "https://www.netflix.com/watch/80988019?trackId=14277281&tctx=0%2C7%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "KEK Seafood",
    address1: "Block 124 Bukit Merah Lane 1",
    city: "",
    country: "Singapore",
    postcode: "",
    lat: 1.2857843,
    lng: 103.801515,
    series: "Street Food Asia",
    season: 1,
    episode: 8,
    episodeLink: "https://www.netflix.com/watch/80988019?trackId=14277281&tctx=0%2C7%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Sin Kee Chicken Rice",
    address1: "40 Holland Dr",
    city: "",
    country: "Singapore",
    postcode: "270040",
    lat: 1.3071081,
    lng: 103.7934681,
    series: "Street Food Asia",
    season: 1,
    episode: 8,
    episodeLink: "https://www.netflix.com/watch/80988019?trackId=14277281&tctx=0%2C7%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Entoy's Bakasihan",
    address1: "Barangay Buagsong, Buagsong Barangay Road",
    city: "Cebu City",
    country: "Philippines",
    postcode: "6017",
    lat: 10.2467967,
    lng: 123.9359639,
    series: "Street Food Asia",
    season: 1,
    episode: 9,
    episodeLink: "https://www.netflix.com/watch/81035673?trackId=14277281&tctx=0%2C8%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Leslie's Lechon",
    address1: "Talisay",
    city: "Cebu City",
    country: "Philippines",
    postcode: "",
    lat: 10.2851217,
    lng: 123.7905164,
    series: "Street Food Asia",
    season: 1,
    episode: 9,
    episodeLink: "https://www.netflix.com/watch/81035673?trackId=14277281&tctx=0%2C8%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Ian Secong",
    address1: "Taft Business Center, Gorordo Avenue",
    city: "Cebu City",
    country: "Philippines",
    postcode: "",
    lat: 14.568892,
    lng: 120.9898002,
    series: "Street Food Asia",
    season: 1,
    episode: 9,
    episodeLink: "https://www.netflix.com/watch/81035673?trackId=14277281&tctx=0%2C8%2Ca2c753e6-2165-4ddc-bce6-293792280ca2-26195604%2C%2C%2C",
    website: "",
  },
  {
    name: "Osteria Francescana",
    address1: "Via Stella, 22",
    city: "Modena",
    country: "Italy",
    postcode: "41121 MO",
    lat: 44.6448264,
    lng: 10.9215729,
    series: "Chef's Table",
    season: 1,
    episode: 1,
    episodeLink: "https://www.netflix.com/watch/80007951?trackId=13752289&tctx=0%2C0%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://www.osteriafrancescana.it/",
  },
  {
    name: "Blue Hill at Stone Barns",
    address1: "630 Bedford Road",
    city: "Tarrytown",
    country: "United States",
    postcode: "NY 10591",
    lat: 40.9177076,
    lng: -74.1945357,
    series: "Chef's Table",
    season: 1,
    episode: 2,
    episodeLink: "https://www.netflix.com/watch/80007950?trackId=13752289&tctx=0%2C1%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "https://www.bluehillfarm.com/dine/stone-barns",
  },
  {
    name: "Patagonia Sur",
    address1: "AEA, Rocha 801",
    city: "Buenos Aires",
    country: "Argentina",
    postcode: "C1166 CABA",
    lat: -34.6402197,
    lng: -58.3640044,
    series: "Chef's Table",
    season: 1,
    episode: 3,
    episodeLink: "https://www.netflix.com/watch/80007948?trackId=13752289&tctx=0%2C2%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://www.restaurantepatagoniasur.com/",
  },
  {
    name: "n/naka",
    address1: "3455 Overland Ave",   
    city: "Los Angeles",
    country: "United States",
    postcode: "CA 90034",
    lat: 34.0251396,
    lng: -118.4144143,
    series: "Chef's Table",
    season: 1,
    episode: 4,
    episodeLink: "https://www.netflix.com/watch/80007947?trackId=13752289&tctx=0%2C3%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://www.n-naka.com/",
  },
  {
    name: "Attica",
    address1: "74 Glen Eira Rd",  
    city: "Ripponlea",
    country: "Australia",
    postcode: "VIC 3185",
    lat: -37.8770094,
    lng: 144.9951204,
    series: "Chef's Table",
    season: 1,
    episode: 5,
    episodeLink: "https://www.netflix.com/watch/80007946?trackId=13752289&tctx=0%2C4%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://www.attica.com.au/",
  },
  {
    name: "Fäviken",
    address1: "FÄVIKEN 216",   
    city: "Järpen",
    country: "Sweden",
    postcode: "830 05",
    lat: 63.4352778,
    lng: 13.2908668,
    series: "Chef's Table",
    season: 1,
    episode: 6,
    episodeLink: "https://www.netflix.com/watch/80007949?trackId=13752289&tctx=0%2C5%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://www.favikenmagasinet.se/",
  },
  {
    name: "Alinea",
    address1: "1723 N Halsted St", 
    city: "Chicago",
    country: "United States",
    postcode: "IL 60614",
    lat: 41.913435,
    lng: -87.6502439,
    series: "Chef's Table",
    season: 2,
    episode: 1,
    episodeLink: "https://www.netflix.com/watch/80075151?trackId=13752289&tctx=0%2C0%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://www.alinearestaurant.com/",
  },
  {
    name: "D. O. M.",
    address1: "R. Barão de Capanema, 549",
    city: "São Paulo",
    country: "Brazil",
    postcode: "SP, 01411-011",
    lat: -23.5663212,
    lng: -46.6696998,
    series: "Chef's Table",
    season: 2,
    episode: 2,
    episodeLink: "https://www.netflix.com/watch/80075155?trackId=13752289&tctx=0%2C1%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://domrestaurante.com.br/",
  },
  {
    name: "Atelier Crenn",
    address1: "3127 Fillmore St", 
    city: "San Francisco",
    country: "United States",
    postcode: "CA 94123",
    lat: 37.7983412,
    lng: -122.4381298,
    series: "Chef's Table",
    season: 2,
    episode: 3,
    episodeLink: "https://www.netflix.com/watch/80075152?trackId=13752289&tctx=0%2C2%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "https://www.ateliercrenn.com/",
  },
  {
    name: "Pujol",
    address1: "Gral. Benjamín Hill 146",
    city: "Mexico City",
    country: "Mexico",
    postcode: "06100 Ciudad de México",
    lat: 19.4077573,
    lng: -99.1793213,
    series: "Chef's Table",
    season: 2,
    episode: 4,
    episodeLink: "https://www.netflix.com/watch/80075156?trackId=13752289&tctx=0%2C3%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://pujol.com.mx/molino/",
  },
  {
    name: "Hiša Franko",
    address1: "Staro selo 1",
    city: "Kobarid",
    country: "Slovenia",
    postcode: "5222",
    lat: 46.2472492,
    lng: 13.5355727,
    series: "Chef's Table",
    season: 2,
    episode: 5,
    episodeLink: "https://www.netflix.com/watch/80075153?trackId=13752289&tctx=0%2C4%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://www.hisafranko.com/",
  },
  {
    name: "Gaggan",
    address1: "Pathum Wan District",
    city: "Bangkok",
    country: "Thailand",
    postcode: "10330",
    lat: 13.7376179,
    lng: 100.5399784,
    series: "Chef's Table",
    season: 2,
    episode: 6,
    episodeLink: "https://www.netflix.com/watch/80075154?trackId=13752289&tctx=0%2C5%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "",
  },
  {
    name: "Chunjinam Hermitage",
    address1: "14-2 Yaksu-ri",
    city: "Jangseong-gun",   
    country: "South Korea",
    postcode: "",
    lat: 35.4432039,
    lng: 126.885157,
    series: "Chef's Table",
    season: 3,
    episode: 1,
    episodeLink: "https://www.netflix.com/watch/80075165?trackId=13752289&tctx=0%2C0%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "",
  },
  {
    name: "White Rabbit",
    address1: "Smolenskaya Square, 3",
    city: "Moscow",
    country: "Russia",
    postcode: "121099",
    lat: 55.747439,
    lng: 37.5792053,
    series: "Chef's Table",
    season: 3,
    episode: 2,
    episodeLink: "https://www.netflix.com/watch/80075166?trackId=13752289&tctx=0%2C1%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://whiterabbitmoscow.ru/",
  },
  {
    name: "Mozza",
    address1: "6602 Melrose Ave",
    city: "Los Angeles",
    country: "United States",
    postcode: "CA 90038",
    lat: 34.0832419,
    lng: -118.3411521,
    series: "Chef's Table",
    season: 3,
    episode: 3,
    episodeLink: "https://www.netflix.com/watch/80075161?trackId=13752289&tctx=0%2C2%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://www.osteriamozza.com/",
  },
  {
    name: "Ivan Ramen",
    address1: "25 Clinton St",
    city: "New York",
    country: "United States",
    postcode: "NY 10002",
    lat: 40.7414017,
    lng: -74.0256744,
    series: "Chef's Table",
    season: 3,
    episode: 4,
    episodeLink: "https://www.netflix.com/watch/80075162?trackId=13752289&tctx=0%2C3%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://www.ivanramen.com/en/new-york/",
  },
  {
    name: "Restaurant Tim Raue",
    address1: "Rudi-Dutschke-Straße 26", 
    city: "Berlin",
    country: "Germany",
    postcode: "10969 Berlin",
    lat: 52.50695,
    lng: 13.3897559,
    series: "Chef's Table",
    season: 3,
    episode: 5,
    episodeLink: "https://www.netflix.com/watch/80075163?trackId=13752289&tctx=0%2C4%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "https://tim-raue.com/",
  },
  {
    name: "Central Restaurante",
    address1: "Av. Pedro de Osma 301",
    city: "Lima",
    country: "Peru",
    postcode: "Barranco 15063",
    lat: -12.1528184,
    lng: -77.0247107,
    series: "Chef's Table",
    season: 3,
    episode: 6,
    episodeLink: "https://www.netflix.com/watch/80075164?trackId=13752289&tctx=0%2C5%2Cef011f83-efdf-42e7-92a8-29cae4e0dce6-2920697%2C70a9ae0073fc3b08f16209012a8b733c28cbb186%3A8ff674ca3c96faa817f59d770eb8d5ae9dddd2c1%2C%2C",
    website: "http://www.centralrestaurante.com.pe/",
  }
];

let restaurantsMatchingFilter = [];

// Defining Selectors

let seriesDropdown = document.querySelectorAll(".dropdown-series");
let locationDropdown = document.querySelectorAll(".country");
let countryFilter = document.querySelector(".country-filter");
let showAllButton = document.querySelector(".show-all");

// Functions

function selectSpotlight() {
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

window.addEventListener("load", selectSpotlight);

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