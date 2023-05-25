

document.addEventListener("DOMContentLoaded", () => {
  async function initMap() {

  const { Map } = await google.maps.importLibrary("maps");

    let map = new Map(document.getElementById("map"), {
      center: { lat: 37.773972, lng: 	-122.431297 },
      zoom: 8,
      });

    let marker1 = new google.maps.Marker({
      position:{lat: 37.889364, lng: -122.632551 },
      map: map,
      title: "Mickey's Beach"
    });

    const detailWindow1 = new google.maps.InfoWindow({
      content: `<h2 class="cool-text">Mickey's Beach</h2`
    });

    marker1.addListener("click", () => {
      detailWindow1.open(map, marker1)
    });



  }

window.initMap = initMap();

})






  




 