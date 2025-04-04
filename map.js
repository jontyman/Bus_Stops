    var defaultPlace = document.getElementById('evaluator').value; 
    mapboxgl.accessToken = 'pk.eyJ1Ijoiam9udHltYW4iLCJhIjoiY204YTR4NHVjMHpiODJxcHVyc3drc3B4NCJ9.bdW2qwj71tgZ0hFi7p4X_w';
    
    const map = new mapboxgl.Map({
        container: document.getElementById('map'), // container ID
        style: locationsConfig[defaultPlace].style,
        center: locationsConfig[defaultPlace].center,
        zoom: 11 // starting zoom
    });

    document.getElementById('evaluator').addEventListener("change",updateWeatherAndMap);
    var responseObject=null;
    var temp;
    getData();


   function mapFly(elementID,co_ords,styleURL){
        var x = document.getElementById(elementID);
        const selectedValue=x.value;
        map.flyTo({
            center: co_ords,
            essential: true
        });
        map.setStyle(styleURL);
    }

    async function getData() {
        var x = document.getElementById('temperature');
        var y = document.getElementById('evaluator');
        var z = document.getElementById('weather');
        var wIcon = document.getElementById('weatherImage');

        const selectedValue=x.value;
        var apiURL;
        apiURL = getWeatherAPI(y.value);

        const url = apiURL;
        try {
            const response = await fetch(url);
            if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
            }
        
            const json = await response.json();
            responseObject=json;

            console.log(responseObject.current_weather.temperature);
            console.log(responseObject.current_weather.weathercode);
            console.log(responseObject.current_weather.is_day);
            console.log(getWeatherDescription(responseObject.current_weather.weathercode,Boolean(responseObject.current_weather.is_day)));
            console.log(getWeatherIcon(responseObject.current_weather.weathercode,Boolean(responseObject.current_weather.is_day)));
            x.innerHTML=responseObject.current_weather.temperature + " " + responseObject.current_weather_units.temperature;
            z.innerHTML=getWeatherDescription(responseObject.current_weather.weathercode,Boolean(responseObject.current_weather.is_day));
            wIcon.src=getWeatherIcon(responseObject.current_weather.weathercode,Boolean(responseObject.current_weather.is_day));
        } catch (error) {
            console.error(error.message);
        }
        
    }

    function updateWeatherAndMap(){
        mapFly();
        getData();
    }

            // hsla(244, 87%, 66%, 0.75)