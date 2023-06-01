import BoulderSpots from "../scripts/bouldering";

export async function loadMap() {

    //create map variable
    let map;    


    //create and initilize the map
    async function initMap() {

        //importing google api
        const { Map } = await google.maps.importLibrary("maps");

        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: 37.773972, lng: 	-122.431297 },
            zoom: 8,
        });
    };

    // initialize the map
    await initMap();


    
    //created container for difficulties in a park
    let counter = new Map();

    //each individual park
    let parks = []

    for (let i = 1; i < BoulderSpots.allSpots.length; i++) {
        // iterated through all of the climbs
        let climb = BoulderSpots.allSpots[i];
        
        // adds climb coordinated and difficulty to my counter hash
        if (counter.get(climb.park) !== undefined) {
            let diff = counter.get(climb.park);
            diff.push(climb.difficulty);
            counter.set(climb.park, diff.sort())
        } else {
            counter.set(climb.park, [climb.coordinates, climb.difficulty])
        };


        //adds parks to the parks array
        if (!parks.includes(climb.park)) parks.push([climb.park, climb.location]);
    };

    //iterated through each park
    for (let i = 0; i < parks.length; i++) { 

        //create a descriptiong for each marker
        let description = ''
        
        //hash of the difficulty count of each location
        let difficulties = new Map();


        //each individual climbing locatin
        let climb = counter.get(parks[i][0]);

        for (let j = 1; j < climb.length; j++) {
            // counts the difficulties and add it to the hash
            if (difficulties.get(climb[j]) === undefined) {
                difficulties.set(climb[j], 1)
            } else {
                let count = difficulties.get(climb[j]);
                count += 1;
                difficulties.set(climb[j], count);
            };
        };

        for (const x of difficulties.entries()) {
            //creates the description in the info window
            //x[0] is the key, x[1] is the count
            if (x[1] === 1){
                description += `${x[0]}: ${x[1]} Problem <br>`;
            } else {
                description += `${x[0]}: ${x[1]} Problems <br>`;
            };
            
        };

        //creates the marker, along with the info window
        let marker = _addMarker(map, parks[i][0], counter.get(parks[i][0])[0], description);

        //arrays to hold climbs corresponding to each group
        let north = [];
        let east= [];
        let south = [];
        let west = [];
        let markers = [];

        markers.push(marker);

        let markerSwitch = document.getElementsByClassName("switch")[0];
        
        for (let i = 0; i < markers.length; i++) {
            markerSwitch.addEventListener("click", (e) => {
                if (e.target.checked === false) {
                    markers[i].setMap(null);
                    markers[i].setIcon("https://img.icons8.com/?size=50&id=58mu148U0fsj&format=png");
                    markers[i].setAnimation(google.maps.Animation.DROP);
                    markers[i].setMap(map);
                    setTimeout( () => {markers[i].setAnimation(google.maps.Animation.BOUNCE)}, 500)
                    ;
                } else {
                    markers[i].setMap(null);
                    markers[i].setIcon("https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/40/external-rock-desert-icongeek26-linear-colour-icongeek26.png");
                    markers[i].setAnimation(google.maps.Animation.DROP);
                    markers[i].setMap(map);
                };
            });

        };
   


        //adds markers to their corresponding area
        if (parks[i][1] === 'North Bay') {
            north.push(marker);
        } else if (parks[i][1] === 'East Bay') {
            east.push(marker);
        } else if (parks[i][1] === 'South Bay') {
            south.push(marker); 
        } else if (parks[i][1] === 'West Bay') {
            west.push(marker)
        };


        //finds the corresponding buttons to control the toggle
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

        

    };

};


function _addMarker(map, name, location, difficulties) {
    //translates arguments to variables
    let lat = location[0];
    let lng = location[1];

    //creates the marker
    let marker = new google.maps.Marker({
    position: {lat: lat, lng: lng },
    map: map,
    title: `${name}`,
    icon:'https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/40/external-rock-desert-icongeek26-linear-colour-icongeek26.png',
    // pet rock icon
    // https://img.icons8.com/?size=50&id=58mu148U0fsj&format=png
    animation: google.maps.Animation.DROP
    });
    
    //creates a info window
    const detailWindow = new google.maps.InfoWindow({
        content: `
        <h2 class="cool-text">${name}</h2>
        <a class="marker-coordinate" href="http://www.google.com/maps/place/${lat},${lng}" target="_blank">${lat}, ${lng}</a>
        <p> ${difficulties}</p>
        `
    });

    
    //links info window with marker
    marker.addListener("click", () => {
        detailWindow.open(map, marker)
    });


    // returns marker for later use
    return marker
    
};


