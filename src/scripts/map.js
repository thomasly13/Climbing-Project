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

    await initMap();



    let counter = new Map();
  
    let parks = []

    for (let i = 1; i < BoulderSpots.allSpots.length; i++) {
        let climb = BoulderSpots.allSpots[i];
        
        if (counter.get(climb.park) !== undefined) {
            let diff = counter.get(climb.park);
            diff.push(climb.difficulty);
            counter.set(climb.park, diff.sort())
        } else {
            counter.set(climb.park, [climb.coordinates, climb.difficulty])
        };

        if (!parks.includes(climb.park)) parks.push(climb.park);
    };

    for (let i = 0; i < parks.length; i++) { 
        let description = ''
        let difficulties = new Map();
        let park = counter.get(parks[i]);
        for (let j = 1; j < park.length; j++) {
            if (difficulties.get(park[j]) === undefined) {
                difficulties.set(park[j], 1)
            } else {
                let count = difficulties.get(park[j]);
                count += 1;
                difficulties.set(park[j], count);
            };
        };
        for (const x of difficulties.entries()) {
            if (x[1] === 1){
                description += `${x[0]}: ${x[1]} Problem <br>`;
            } else {
                description += `${x[0]}: ${x[1]} Problems <br>`;
            }
            
        };

        _addMarker(map, parks[i], counter.get(parks[i])[0], description);

    };

};


function _addMarker(map, name, location, difficulties) {
    let lat = location[0];
    let lng = location[1];
    let marker = new google.maps.Marker({
    position: {lat: lat, lng: lng },
    map: map,
    title: `${name}`,
    icon:'https://img.icons8.com/?size=50&id=58mu148U0fsj&format=png' 
    });
    
    const detailWindow = new google.maps.InfoWindow({
        content: `
        <h2 class="cool-text">${name}</h2>
        <a class="marker-coordinate" href="http://www.google.com/maps/place/${lat},${lng}" target="_blank">${lat}, ${lng}</a>
        <p> ${difficulties}</p>
        `
    });

    marker.addListener("click", () => {
        detailWindow.open(map, marker)
    });

    // marker.addListener("mouseover", () => {
    //     detailWindow.open(map, marker)
    // });
    // marker.addListener("mouseout", () => {
    //     detailWindow.close(map, marker)
    // });
    
};

