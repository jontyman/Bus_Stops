    export default class mapHandler{

    constructor(mapElementID,styleURL,co_ords, accessToken,zoomLevel){
        mapboxgl.accessToken = accessToken;

        this.map= new mapboxgl.Map({
            container: document.getElementById(mapElementID), // container ID
            style: styleURL,
            center: co_ords,
            zoom: zoomLevel // starting zoom
        });
    }


     mapFly(co_ords,styleURL){
        this.map.flyTo({
            center: co_ords,
            essential: true
        });
        this.map.setStyle(styleURL);
    }
    
}


            // hsla(244, 87%, 66%, 0.75)