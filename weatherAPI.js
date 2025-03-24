// coordinates as 4 decimal places in array as [longitude,lattidue]
export function getWeatherURL(co_ords){
    return `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${co_ords[1]}&longitude=${co_ords[0]}`;
  }