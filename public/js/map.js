 maptilersdk.config.apiKey = mapToken;

  const map = new maptilersdk.Map({
      container : 'map',                         // container id
      style: maptilersdk.MapStyle.STREETS.DARK,      // style (streets, satellite, outdoor...)
      center: listing.geometry.coordinates,                      // [lng, lat]
      zoom: 12, 
      geolocateControl:true,                               // zoom level
    });

  const el = document.createElement('div');
  el.className = 'custom-marker';
  el.innerText = "Wonderlust";

  // Marker CSS
  el.style.background = "#FF385C";   // Airbnb pink
  el.style.color = "white";
  el.style.fontSize = "14px";
  el.style.fontWeight = "bold";
  el.style.padding = "6px 10px";
  el.style.borderRadius = "12px";
  el.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
  el.style.cursor = "pointer";
  el.style.whiteSpace = "nowrap";

const marker = new maptilersdk.Marker({ element: el ,color : "red"})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new maptilersdk.Popup({offset:25})
  .setHTML(
    `<h3>${listing.location}</h3><p>Exact Location provided after booking</p>`))
  .addTo(map);

 el.addEventListener("click", () => {
    el.style.transform = "rotateY(180deg)";
    el.style.transition = "transform 0.6s";
    setTimeout(() => {
      el.style.transform = "rotateY(0deg)";
    }, 1000);
  });


