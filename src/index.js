import { loadMap } from "./scripts/map";
import { createSeeds } from "./scripts/seed";
import BoulderSpots from "./scripts/bouldering";
import { toggle } from "./scripts/toggle";
import { loadChart } from "./scripts/chart";


window.BoulderSpots = BoulderSpots;

document.addEventListener("DOMContentLoaded", () => {
  createSeeds();
  loadMap(); 
  toggle();
  loadChart();
  
});






  




 