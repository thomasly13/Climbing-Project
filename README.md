### BoulderUp

[Go to the website](https://thomasly13.github.io/Climbing-Project/)

### Background
This is a informative bay area bouldering appplication. It contains various bouldering problems from the different areas of the bay. The bay is split in North, South, West, East, along with listing parks at which these problems can be found. It has a interactive bar graph, with toggle settings, which includes difficulty and bay area location. Users can toggle these settings to to show relevant information about the parks on the bar graph along with the location of these problems on the map. The map will have markers which users can click on to see the type of climbs there. 

https://github.com/thomasly13/Climbing-Project

## Functionality 
* Search what areas have the problem difficulty the User desires.
* Users can search by area and find problems near them
* Can use the coordinates and google Maps links as directions to the climb

## Technologies
This project is implemented with the following technologies:
* Vanilla Javascript
* ```Google Maps API``` to display a map 
* ```Canvas API``` to display a bar graph
* ``` Webpage ``` and ``` Babel``` to bundle and deploy the Javascript code.

### Highlighted Features:
1. Toggled climbs on the google maps based on what filters the user clicked. The below code is for the area filters.
```javascript
    let northButton = document.getElementById("north-button")
    let eastButton = document.getElementById("east-button")
    let southButton = document.getElementById("south-button")
    let westButton = document.getElementById("west-button")



    //adding the event listener to toggle markers on the map
    northButton.addEventListener("click", (e) => {
        let className = e.target.classList['value'];

        if (className === 'areas') {
            for (let i = 0; i < north.length; i++) {
                north[i].setAnimation(google.maps.Animation.DROP)
                //shows markers
                north[i].setMap(map)
            };
        } else {
            for (let i = 0; i < north.length; i++) {
                //makes markers disappear
                north[i].setMap(null)
            };
        };

    });

    eastButton.addEventListener("click", (e) => {

        let className = e.target.classList['value'];

        if (className === 'areas') {
            for (let i = 0; i < east.length; i++) {
                east[i].setAnimation(google.maps.Animation.DROP)
                east[i].setMap(map)
            };
        } else {
            for (let i = 0; i < east.length; i++) {
                east[i].setMap(null)
            };
        };

    } );

    southButton.addEventListener("click", (e) => {
        let className = e.target.classList['value'];

        if (className === 'areas') {
            for (let i = 0; i < south.length; i++) {
                south[i].setAnimation(google.maps.Animation.DROP)
                south[i].setMap(map)
            };
        } else {
            for (let i = 0; i < south.length; i++) {
                south[i].setMap(null)
            };
        };

    } );

    westButton.addEventListener("click", (e) => {
        let className = e.target.classList['value'];

        if (className === 'areas') {
            for (let i = 0; i < west.length; i++) {
                west[i].setAnimation(google.maps.Animation.DROP)
                west[i].setMap(map)
            };
        } else {
            for (let i = 0; i < west.length; i++) {
                west[i].setMap(null)
            };
        };

    } );
```

## Bonus Feateures 

* Create individual climbs show pages.
