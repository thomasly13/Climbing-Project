

class BoulderSpots{

    static allSpots = [];

    constructor(park, location, difficulty, coordinates, name){
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




  