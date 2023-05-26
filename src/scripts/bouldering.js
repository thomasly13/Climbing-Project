
class BoulderSpots{

    static allSpots = [];

    constructor(id, park, location, difficulty, coordinates, name){
        this.id = id;
        this.park = park;
        this.location = location;
        this.difficulty = difficulty;
        this.coordinates = coordinates;
        this.name = name;
        BoulderSpots.allSpots.push(this);
    };

    static renderSpots = function (){
        console.log(BoulderSpots.allSpots); 
    };

};

export default BoulderSpots;


