// coordinates as 4 decimal places in array as [longitude,lattidue]
function getWeatherURL(co_ords){
    return `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${co_ords[1]}&longitude=${co_ords[0]}`;
  }

export async function getWeatherAPIData(co_ords) {
		var apiURL;
		apiURL = getWeatherURL(co_ords);
		var responseObject=null;

		const url = apiURL;
		try {
			const response = await fetch(url);
			if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
			}
		
			const json = await response.json();
			responseObject=json;
		
		} catch (error) {
			console.error(error.message);
		}
		return{
			temperature: responseObject.current_weather.temperature,
			temperUnits: responseObject.current_weather_units.temperature,
			weathercode: responseObject.current_weather.weathercode,
			is_day: Boolean(responseObject.current_weather.is_day)
		};
	}