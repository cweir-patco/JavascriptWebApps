require(["esri/Map", "esri/views/MapView", "esri/widgets/BasemapToggle"], (Map, MapView, BasemapToggle) => {
  const map = new Map({basemap: "topo-vector"});
  const view = new MapView({
    container: "viewDiv", // reference the view div in the body of index.html
    map: map, // reference the map object created before view
    zoom: 4, // set zoom level based on LOD
    center: [-98, 40] // center point of view [longitude, latitude]
  });

  const toggle = new BasemapToggle({view: view, nextBasemap: "satellite"});

  view.ui.add(toggle, "top-right");
});