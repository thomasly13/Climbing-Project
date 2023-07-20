import { loadMap } from "./scripts/map";
import { createSeeds } from "./scripts/seed";
import BoulderSpots from "./scripts/bouldering";
import { toggle } from "./scripts/toggle";
import { loadOriginalChart } from "./scripts/chart";
import { animateSlider } from "./scripts/coolEventListeners";


window.BoulderSpots = BoulderSpots;


document.addEventListener("DOMContentLoaded", () => {
  loadMap(); 
  createSeeds();
  toggle();
  loadOriginalChart();
  animateSlider();
});






  




 