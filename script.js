require([
"esri/Map",
"esri/views/SceneView",
"esri/layers/SceneLayer",
"esri/widgets/Daylight",
"esri/widgets/Expand"],
(Map, SceneView, SceneLayer, Daylight, Expand) => {
  
  const webScene = new Map({
    basemap: "satellite",
    ground: "world-elevation",
    layers: [
      new SceneLayer({
        popupEnabled: true,
        portalItem: {id: "ca0470dbbddb4db28bad74ed39949e25"},
        definitionExpression: "ObjectID = 170826848 OR ObjectID = 982796108"
      })
    ]
  });

  const today = new Date();
  today.setUTCHours(17 - 5, 0, 0, 0);

  const view = new SceneView({
    map: webScene,
    container: "viewDiv",
    qualityProfile: "high",
    environment: {
      lighting: {
        type: "sun",
        date: today.toString(),
        directShadowsEnabled: true
      }
    }
  });

  view.when(function() {
    view.goTo({
      center: [-84.39285505518536, 33.77250731345822], //bobby dodd centroid coords
      zoom: 18,
      heading: 90, //North = 0, East = 90, South = 180, West = 270
      tilt: 5,
    })
  });

  const daylightWidget = new Daylight({
    view: view,
    playSpeedMultiplier: 0.75,
    visibleElements: {
      sunLightingToggle: false,
      shadowsToggle: false
    }
  });

  view.ui.add(new Expand({
    content: daylightWidget,
    view: view,
    expanded: true
  }), "top-right");
});