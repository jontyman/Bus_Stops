import {getWeatherDescription, getWeatherIcon} from './weatherDescriptions.js';
import {getCoordinates,getStyle} from './locationData.js';
import {getWeatherURL} from './weatherAPI.js';
import {getMapBoxAccessToken} from './mapBoxAPI.js';

    var defaultPlace = document.getElementById('evaluator').value; 
    mapboxgl.accessToken = getMapBoxAccessToken();
    
    const map = new mapboxgl.Map({
        container: document.getElementById('map'), // container ID
        style: getStyle(defaultPlace),
        center: getCoordinates(defaultPlace),
        zoom: 11 // starting zoom
    });

    document.getElementById('evaluator').addEventListener("change",updateWeatherAndMap);
    var responseObject=null;
    var temp;
    getWeatherData();


   function mapFly(){
        var x = document.getElementById('evaluator');
        const selectedValue=x.value;
        map.flyTo({
            center: getCoordinates(selectedValue),
            essential: true
        });
        map.setStyle(getStyle(selectedValue));
    }

    async function getWeatherData() {
        var x = document.getElementById('temperature');
        var y = document.getElementById('evaluator');
        var z = document.getElementById('weather');
        var wIcon = document.getElementById('weatherImage');

        const selectedValue=x.value;
        var apiURL;
        apiURL = getWeatherURL(getCoordinates(y.value));
        

        const url = apiURL;
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
        
            const json = await response.json();
            responseObject=json;
            x.innerHTML=responseObject.current_weather.temperature + " " + responseObject.current_weather_units.temperature;
            z.innerHTML=getWeatherDescription(responseObject.current_weather.weathercode,Boolean(responseObject.current_weather.is_day));
            wIcon.src=getWeatherIcon(responseObject.current_weather.weathercode,Boolean(responseObject.current_weather.is_day));
        } catch (error) {
            console.error(error.message);
        }
        
    }

    function updateWeatherAndMap(){
        mapFly();
        getWeatherData();
    }

            // hsla(244, 87%, 66%, 0.75)