import { loadMap } from "./scripts/map";
import { createSeeds } from "./scripts/seed";
import BoulderSpots from "./scripts/bouldering";


window.BoulderSpots = BoulderSpots;

document.addEventListener("DOMContentLoaded", () => {
  createSeeds();
  loadMap(); 


});






  




 