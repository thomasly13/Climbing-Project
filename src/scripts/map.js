import BoulderSpots from "../scripts/bouldering";

export async function loadMap() {
    let map;

    async function initMap() {

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
        console.log(climb.difficulty)
        
        if (counter.get(climb.park) !== undefined) {
            let diff = counter.get(climb.park);
            diff.push(climb.difficulty);
            counter.set(climb.park, diff.sort())
        } else {
            counter.set(climb.park, [climb.coordinates, climb.difficulty])
        };

        if (!parks.includes(climb.park)) parks.push(climb.park);

        for (let i = 0; i < parks.length; i++) {
            _addMarker(map, parks[i], counter.get(parks[i])[0], counter.get(parks[i]).slice(1));
            
        }
        

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
        content: `<h2 class="cool-text">${name}</h2><p> ${difficulties}</p>`
    });

    marker.addListener("click", () => {
        detailWindow.open(map, marker)
    });

    marker.addListener("mouseover", () => {
        detailWindow.open(map, marker)
    });
    marker.addListener("mouseout", () => {
        detailWindow.close(map, marker)
    });

    
};


