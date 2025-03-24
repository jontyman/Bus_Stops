import {getWeatherDescription, getWeatherIcon} from './weatherDescriptions.js';
import {getCoordinates,getStyle} from './locationData.js';
import {getWeatherAPIData} from './weatherAPI.js';
import {getMapBoxAccessToken} from './mapBoxAPI.js';
import mapHandler from './mapHandler.js';

    var defaultPlace = document.getElementById('placeDropdown').value; 
    const mapObject = new mapHandler('map',getStyle(defaultPlace), getCoordinates(defaultPlace),getMapBoxAccessToken(),11);

    document.getElementById('placeDropdown').addEventListener("change",()=>updateWeatherAndMap(event.target.id));

    updateWeatherDashBoard('temperature', 'weather', 'weatherImage',getCoordinates(defaultPlace));

    function updateWeatherAndMap(elementId){
        var x = document.getElementById(elementId);
        mapObject.mapFly(getCoordinates(x.value),getStyle(x.value));
        updateWeatherDashBoard('temperature', 'weather', 'weatherImage', getCoordinates(x.value));
    }

    async function updateWeatherDashBoard(temperID,weatherID,weatherImageID,co_ords){
        const weatherReadings = await getWeatherAPIData(co_ords);
        var temperPanel = document.getElementById(temperID);
        var weatherDesc = document.getElementById(weatherID);
        var weatherIcon = document.getElementById(weatherImageID);

        temperPanel.innerHTML=weatherReadings.temperature + " " + weatherReadings.temperUnits;
        weatherDesc.innerHTML=getWeatherDescription(weatherReadings.weathercode,weatherReadings.isDay);
        weatherIcon.src=getWeatherIcon(weatherReadings.weathercode,weatherReadings.isDay);
    }

            // hsla(244, 87%, 66%, 0.75)