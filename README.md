# [Delish TV - Find the stars of Netflix's original culinary series](https://mark-obeirne.github.io/culinary-world-tour/)

Code Institute - Milestone Project 2


Deadline: 28/06/20


Live GitHub Pages Link: https://mark-obeirne.github.io/culinary-world-tour/

![Delish TV multi-device mockup](https://raw.githubusercontent.com/mark-obeirne/culinary-world-tour/master/assets/wireframes/multi-device-mockup.PNG)

## Summary
Delish TV is a Netflix companion site that enables users to find the various restaurants featured in their favourite Netflix Original culinary shows. 

## Aim of the site
Food television is the fastest-growing niche in unscripted TV, according to [a recent study by The Hollywood Reporter](https://www.hollywoodreporter.com/features/gordon-ramsay-more-hollywoods-growing-hunger-food-tv-shows-1225214). After dipping its toe into the waters in 2015 with the release of Chef's Table, Netflix became one of the leaders in investing in original culinary programming. Today, Netflix's catalogue of culinary shows includes The Chef Show, starring Hollywood superstar Jon Favreau; the humble street stands of Street Food Asia; Michelin star chefs in Chef's Table and Chef's Table France; and a smorgasbord of cuisines and settings in Ugly Delicious, starring celeb chef David Chang. 

Brandon Riegg, Netflix VP of nonfiction series and comedy specials, said that food and cooking shows are the frontrunners when looking at categories of programming that people respond to globally. Lisa Nishimura, Netflix VP independent film and documentary features, said that people connect with these shows because "even though you can't smell or taste this food through the screen, you can absolutely feel it."

While shows such as Ugly Delicious and Street Food can give us a sense of what it is like to visit a particular business and we can witness our hosts delighting at the food on offer, it can be challenging to find more information about the various settings that they explore. If a viewer wishes to find more information, they must become proficient with Google and be very willing to peruse article after article that may provide them with some tidbits of information.

The purpose of this site is to connect users with the restaurants and businesses featured in Netflix Original culinary shows and provide them with relevant information should they wish to experience it for themselves rather than live through an on-screen host. The link between restaurant and Netflix show adds another dimension when a user is looking for a restaurant as they will be able to judge a restaurant on more than the menu, still pictures, and reviews from users who they do not know; instead, they can see the food preparation and presentation brought to life as well as reactions to a dish. 

## Scope 
The site targets not only viewers of Netflix Original culinary shows, but is of use to foodies living in an area in which a series have taken place as well as travellers. As a business, we have our own distinct goals, as reflected by the user stories.

### User Stories
"As a viewer of culinary shows, I am often automatically recommended other reality TV shows that have nothing to do with food. I would like to find similarly themed series that would be of interest to me."

"As a fan of Ugly Delicious, I would like to find out more information about some of my favourite restaurants featured in the series."

"As someone travelling to Japan, I would like an easy way to find out more about the Toyo street food restaurant, as seen on Street Food Asia, so that I can experience the food and performance for myself." 

"As a foodie, I would like to thoroughly research restaurants in my area to ensure that it appeals to me and that I will get value for money." 

#### Meeting User Expectations
[Include screenshots for added reference]

### Business Goals
"As a business, we would like to showcase our range of culinary series, as we would like users to keep finding value for money in their subscription or attract new customers."

"As a business, we would like to highlight the restaurants involved in series, which rewards them for allowing a series to be filmed there."

"As a business, we wish to continue making original culinary series and providing this added value to participating restaurants could encourage others to get involved."

### Design Choices
#### Colours
As Delish TV is built as a Netflix companion site, we have chosen to base our colour scheme on that used by Netflix. 

The background and text colour of #181818 provides good contrast, making it a suitable choice for text and the background to other elements. When acting as a background colour, it allows the map, series jumbotron, individual restaurant cards, and additional buttons to stand out. The exception to this is the navbar colour (#313131), which is 10% lighter according to https://www.colorbook.io/, which enables the logo to be displayed correctly.

The red shade (#E30914) is perfectly suited to smaller buttons, such as the dropdown menus and buttons that are created when a user clicks on an individual restaurant card. These draw the eye without being overpowering and provides good contrast to white text or background elements.

Finally, a grey shade (#CCCCCC) is used for added flourishes such as hover colours as it provides the user with information that an element is being hovered over or can be interacted with without impacting the readability of the text.

#### Fonts
While researching this project, Nunito Sans was highlighted as a font that is close to Netflix's own custom font. This is used for headings, most notably in the Featured Restaurants section where it is used for the section heading as well as the name of the restaurant and the series that it is featured in. 

The site uses Roboto for non-heading text. It is a good pairing for Nunito Sans without shifting the overall font style of the site.  

## Wireframe Mockups

### Mobile Wireframe
* [Index on Mobile - Original Layout](https://raw.githubusercontent.com/mark-obeirne/culinary-world-tour/master/assets/wireframes/Index_Mobile_Initial.png)
* [Index on Mobile - Revised Layout](https://raw.githubusercontent.com/mark-obeirne/culinary-world-tour/master/assets/wireframes/Index_Mobile_Revised.png)

### Tablet Wireframe
* [Index on Tablet](https://raw.githubusercontent.com/mark-obeirne/culinary-world-tour/master/assets/wireframes/Index_Tablet.png)

### Desktop Wireframe
* [Index on Desktop](https://raw.githubusercontent.com/mark-obeirne/culinary-world-tour/master/assets/wireframes/Index_Desktop.png)

## Changes to Wireframe
Originally, the tablet and desktop sites were larger versions of the mobile site, spacing out the individual restaurant cards better. 

However, in testing it became clear and was recommended that the space could be better utilised. The result is the altered layout that can be seen on the desktop site where the restaurant cards push up alongside the map allowing users access to all information easily. This did result in an issue whereby there was a lot of unused space beneath the map so a max height was added to the restaurant card column with a scrollbar available if there were more cards.

## Site Features
### Spotlight Series Jumbotron
When a user visits the site, a Netflix Original series is chosen at random to be displayed as the Jumbotron. This provides the user with more details about the series, the opportunity to watch a trailer to see if it is to their liking, and the option to watch it on Netflix if it is. If a user chooses a different series from the dropdown menu, this jumbotron is updated to reflect this. The jumbotron also ties in with the Google Maps feature, as detailed below.

### Google Maps
The Google Map is one of the focal points of this project. Upon an initial visit, the map is populated based on the restaurants featured in the randomly chosen spotlight series. When a user chooses a new series or location, the map updates to reflect the locations of restaurants that match the chosen filter. The user is also able to find out more information by clicking on a marker, which provides them with the address, series name, episode, and an episode link so that they can watch immediately. It is also possible to choose an individual restaurant card, which focuses the map on this location.

### Individual Restaurant cards
A number of individual restaurant cards are displayed to a user depending on the chosen filter. These cards present the user with information about the restaurant such as its general address and the series that it is featured in. When an individual card is selected by the user, the map zooms in on that location as previously mentioned and the card provides the user with a button to watch the episode that the restaurant is featured in. 

## Future Features
### Restaurant Wishlist
While enabling users to find out so much more about restaurants can be helpful, we hope to do more in the future. We would like to add a feature which enables users to add individual restaurants to a wishlist of places that they would like to visit or save for looking up again later; perhaps it will entice them to rewatch the episode that takes place at that restaurant (or, in some cases, watch for the first time).

### Search bar Functionality
Currently, users are able to search based on the series that a restaurant is featured in or its country. We would like to be able to offer users more choice in how they search. In the future, we would like to add a search bar, which will enable users to search by restaurant name, its city, its country, or the series that it features in. This search bar will suggest searches based on the user's input or, if no matches are found, will offer suggestions, including a restaurant, a city, a country, or a series.

### Embedded YouTube Trailers
While we tested embedding YouTube trailers in a hidden iframe that displayed when a user clicked on the More Info button in the spotlight panel, since replaced by the Trailer button, we found that it resulted in errors and slowed down the performance of the site. For the next release, we would have time to utilise the YouTube API in order to display trailers for the featured series in a more streamlined way than embedded iframes.

## Technology Used

[HTML](https://en.wikipedia.org/wiki/HTML) & [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) programming languages - For the basic site structure and design elements.

[JavaScript](https://en.wikipedia.org/wiki/JavaScript) - JavaScript makes up the lion's share of this project as it is used extensively to build and populate the site based on either a randomly chosen series or user choices.

[Bootstrap 4](https://getbootstrap.com/) - Bootstrap 4 was used to prioritise the mobile design, while enabling the site to be responsive and look its best across a variety of screen sizes. 

[Balsamiq](https://balsamiq.com/wireframes/desktop/#) - Balsamiq was used to create a series of wireframes that the site was built based on.

[Coolors](https://coolors.co/) - Coolors assisted in finding a colour palette that worked well. 

[Google Fonts](https://fonts.google.com/) - Google Fonts assisted in finding and sourcing fonts that would suit a site of this type.

[Font Awesome](https://fontawesome.com/) - Font Awesome was used to find icons that would provide more detail for buttons such as the Play Now and More Info buttons as well as visual representations of social media platforms. 

[Git](https://git-scm.com/) - To track changes in code during development.

[GitHub](https://github.com/) - To host the project’s repository and to host the live website via GitHub Pages.

[Gimp 2](https://www.gimp.org/) - Gimp 2 allowed for image manipulation and was used to create the brand’s logo.

[Birme](https://www.birme.net) - To ensure that images for the spotlight jumbotron panel were a similar height.

[TinyPNG](https://tinypng.com/) - To compress and optimise image files.

[Favicon Converter](https://favicon.io/favicon-converter/) - To create the favicon based on the brand logo.

[WebFormatter](https://webformatter.com/html) - Used to tidy up and properly format the index.html file. 

[FreeFormatter CSS Beautifier](https://www.freeformatter.com/css-beautifier.html) - Used to standardise indents and tidy up the style.css layout and formatting.

[Multi Device Website Mockup Generator](http://techsini.com/multi-mockup/index.php) - Used to create the multi-device image featured at the top of this README file.


## Testing
* Chrome Developer Tools - Throughout the development of this project, the Chrome Developer Tools were frequently used to ensure that the site behaved responsively, looked attractive across a range of screen sizes, and to ensure that there was sufficient contrast between background colours and text. 

* [HTML Validator](https://validator.w3.org/nu/) - The W3 validator was used to ensure code was valid throughout the project and issues were corrected along the way. The code was determined to be valid.

* [HTML Validator](https://www.freeformatter.com/html-validator.html) - FreeFormatter's HTML validation tool was also used to double check that no other issues could be found. The code was determined to be valid.

* [CSS Validator](https://jigsaw.w3.org/css-validator/validator) - W3's CSS Validation tool was used to ensure that the style.css file was valid and correct. The code was determined to be valid.

* [JavaScript Validator](https://esprima.org/demo/validate.html) - The Esprima syntax validator checked the script.js file for mistakes and errors. 

* [JavaScript Validator](https://jshint.com/) - JSHint was used to check the validity of JavaScript code contained in this project.

* [WAVE](https://wave.webaim.org/) - This site was used to evaluate the accessibility the project. It produced one contrast error highlighting the series description as the source of the issue. However, in testing, a font colour of #000, which would pass the test, did not apppear readable.  

* [a11y](https://color.a11y.com/Contrast/) - This site also performed checks on the colour contrast accessibility. Again, it highlighted the series description text as problematic, but did not take the background image or overlay into account, which has increased readability in practice. 

* [Web Accessibility by Level Access](https://www.webaccessibility.com/) - The Delish TV project received a total compliance rating of 91%. The site highlighted that links or controls that open new windows do not do so without a warning. We acknowledge that the trailer links and play now buttons contained within jumbotrons could provide more warning. However, other instances indicate that the user will be directed to watch the episode on Netflix, an external source, and it is best practice to open tabs such as these in a new tab.

## Testing Process
This website was also tested manually on a range of devices and internet browsers. Please note that this project does not support Internet Explorer due to the use of ES6 features and notation. 

Dell Laptop
* Google Chrome
* Microsoft Edge
* Mozilla Firefox

Mobile
Samsung Galaxy S10:
* Google Chrome 
* Firefox
* Opera

iPhone 8:
* Safari
* Google Chrome

The manual testing process included the following tests and steps:

### Series Selection From Dropdown:
1. Select Breakfast, Lunch & Dinner from the series dropdown menu. 

2. Ensure that the jumbotron, map, and restaurants list change to reflect this choice.

3. Select Chef's Table from the series dropdown menu and repeat step 2.

4. Select Chef's Table France from the series dropdown menu and repeat step 2.

5. Select Street Food Asia from the series dropdown menu and repeat step 2.

### Google Map
#### Map Clusters
1. Select a filter that results in marker clusters to feature on the map. e.g. Breakfast, Lunch & Dinner

2. Tap on a marker cluster. Ensure that the map zooms in to restaurants in this cluster without an error.

3. Zoom back out to ensure that the marker cluster reappears.

#### Map Markers
1. Using the map, navigate to a zoom that provides a view of individual markers or select a filter from the dropdown menu that shows individual markers. e.g. Japan.

2. Tap or click on a marker. Ensure that the resulting infowindow popup information matches the associated restaurant card identified by the label.

3. Repeat this process a number of times, checking a variety of filters and markers.

#### Map Display By Location
1. Choose a location from the location dropdown menu.

2. Ensure that the map changes to reflect this chosen filter and compare marker information to the featured restaurants.

#### Zoom To Individual Restaurant
1. Choose a series or location from the relevant dropdown menu.

2. Click on an individual restaurant card.

3. Ensure that the map displays this chosen location and that the infowindow matches the restaurant card's information.

4. Repeat this process.

### Display/Hide Show All Button And See More Text Where Appropriate
1. When the page loads initially, ensure that the Back To All Filtered Restaurants button is hidden and that the text inviting users to click on a restaurant card to learn more (from this point on, referred to as "More Info text") is visible.

2. Click on an individual restaurant card. Ensure the Back To All Filtered Restaurants button is displayed and the More Info Text is hidden.

3. Click on a different series or location. Ensure the Back To All Filtered Restaurants is hidden and the More Info Text is displayed.

4. Click on a restaurant card. 

5. Click the Back To All Featured Restaurants button. Ensure this button is then hidden and the More Info Text becomes visible. 

### Opening Links
1. Press the Play Now button on the jumbotron. Ensure that the series link to Netflix opens in a new tab.

2. Click the Trailer button on the jumbotron. Ensure that the YouTube link opens in a new tab.

3. Click on a restaurant marker on the map.

4. Click the Watch on Netflix link. Ensure this link opens in a new tab.

5. Click on the Watch on Netflix button attached to a restaurant card. Ensure this link opens in a new tab.

### Jump Between Series Filter And Location Filter
1. Click on a series in the series dropdown menu.

2. Ensure the jumbotron, map, and restaurant cards update to reflect this choice.

3. Click on a country in the location dropdown menu.

4. Ensure the jumbotron is hidden, and the map and restaurant cards update to reflect this choice.

5. Click on another series in the series dropdown menu.

6. Ensure the relevant jumbotron is displayed and the map and restaurants cards update to reflect this choice.

### Filter Country By Text entry
1. Click on the location dropdown menu

2. Click where the placeholder says "Enter Country".

3. Enter the name of a country.

4. As you type, the dropdown list should filter to only return countries that match the text entered.

5. Click on the relevant country to apply this filter. 

### Test Hover Effects
1. Hover over the Play Now button in the jumbotron. Ensure that the background colour changes.

2. Hover over the More Info button in the jumbotron. Ensure that the background colour changes.

3. Hover over a restaurant card. Ensure that the background colour fades to grey.

4. Move the mouse away from the highlighted restaurant card. Ensure that the background colour fades to white. 

5. Hover over the dropdown menu buttons. Ensure that the colours invert.

6. Hover over a select number of Watch On Netflix buttons. Ensure that the colours invert.

7. Hover over each of the footer links. Ensure that the colour darkens slightly. 

## Issues Encountered and Resolutions
### Error on page load
Initially, the selectSpotlight function was used as the callback function in the google maps apis script, but this produced an error on page load occasionally. Removing the callback and instead adding a load event listener to the window that called this function has rectified this issue.

### Watch on Netflix button not appearing if only one restaurant matches filter
When a user clicked on a restaurant card, the Watch on Netflix span would be generated with a link to the episode. However, this button did not appear for restaurants where only one restaurant met the filter (e.g. Germany). Previously, the function checked if there was an existing span (as there was previously an issue whereby clicking on a card again would produce multiple spans). In the end, it was decided to create the button immediately upon creation of the card so that a user can click through to the episode immediately instead of taking an additional step to isolate a restaurant card.

### Grey border to spotlight images on larger screens
As the site is designed with a mobile-first philosophy, an emphasis was placed on making the spotlight images appear well on mobile. However, at larger screen sizes the custom background position set caused a grey border to appear at the right of some images. Using a media query, the position of these images has been updated to render them correctly on larger devices.

### Any known issues?
#### Filter By Location dropdown
This filter dropdown allows the user to type in a country name to filter the dropdown options to just the countries that match the text entered. If the dropdown menu is displayed above the button, the text entry field is at the top of the list and entering text causes the remaining menu options to seemingly float in the middle of the page.

## Deployment
### GitHub Pages
To deploy this website on GitHub Pages, I followed the following steps:
1. Navigate to the [project’s repository](https://github.com/mark-obeirne/culinary-world-tour)

2. Navigate to the [settings page](https://github.com/mark-obeirne/culinary-world-tour/settings)

3. Scroll down to the section titled GitHub Pages

4. As my repository was private while I was working on it, I had to choose to make it public

5. Select Master Branch from the Source dropdown

6. The GitHub Pages section changed to inform me that my site "is ready to be published at https://mark-obeirne.github.io/culinary-world-tour/"

### Local Deployment
To clone this project and to deploy it locally, follow these steps:

1. Navigate to the [project’s repository](https://github.com/mark-obeirne/culinary-world-tour)

2. Click the green button marked “Clone or download”

3. Highlight the provided URL and copy it or click the copy button to the right. Alternatively, you can download a .zip file of the repository to run the website locally

4. Open your terminal

5. Navigate to the working directory where you would like to place the cloned repository

6. In the command line, type “git clone” followed by the URL copied previously

For more information or guidance, please see [GitHub’s Help Section](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).


## Credits 
### Content
Show descriptions were provided by Netflix in the About section of the relevant series. 

Information contained within the restaurants array was put together manually from a variety of sources, including [Wikipedia](https://en.wikipedia.org/wiki/Chef%27s_Table), [Bustle](https://www.bustle.com/p/every-breakfast-lunch-dinner-restaurant-in-david-changs-new-series-19259453), Netflix's episode list, [Food and Wine](https://www.foodandwine.com/travel/netflix-street-food-chef-guide), and [Google Maps](https://www.google.com/maps).

### Media
Logos were sourced from Netflix, while screenshots from episodes were used for the jumbotron images.

#### Site Logo
[TV Monitor](https://pixabay.com/vectors/screen-monitor-tv-internet-1065137/)

[Plate and Cutlery](https://pixabay.com/vectors/eating-food-fork-knife-plate-2026455/)

### Code
[How to autocenter map with multiple markers in unknown locations](https://stackoverflow.com/questions/15719951/auto-center-map-with-multiple-markers-in-google-maps-api-v3)
This ensured that it was not necessary to set a central location for the map without knowing where the map markers are situated. This was necessary as the central point for a series like Chef's Table France is quite different to Street Food Asia, for example.

[Ensuring that the zoom isn't too close when the map features just one location](https://stackoverflow.com/questions/4523023/using-setzoom-after-using-fitbounds-with-google-maps-api-v3)
The zoom of the map for this project has to suit both wide reaching locations, such as in Breakfast, Lunch & Dinner, as well as single locations where a distant zoom would not be user friendly. 

[Integrating MarkerClusterer with infowindow](https://stackoverflow.com/questions/40047210/integrate-google-maps-markerclusterer-with-infowindow)
This code enabled the usage of both MarkerClusterer, which enables many markers in a location to be grouped together, and the infowindow popup to provide more information about a marker. 

## Acknowledgements
I would like to thank my mentor, [Antonio Rodriguez](https://github.com/AkaAnto) for their support and advice. In particular, I would like to thank them for their feedback during our second call, which prompted a revision of the site's layout, leading to better flow and overall UI. 

I would also like to thank my fellow Code Institute students and the alumni who provided support, advice, and a second opinion on Slack.

Finally, I would like to thank all those who took the time to test this website and provide feedback and suggestions. 


## Disclaimer
This project is for educational purposes only.