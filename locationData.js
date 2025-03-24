const locationsConfig={
    Whangarei:{center: [174.3194, -35.7275], style: 'mapbox://styles/jontyman/cm8a7l1rr00h201sq0uxwciak'},
    Auckland:{center:[174.7632, -36.8521], style: 'mapbox://styles/jontyman/cm8goep8q012c01r09osm4psr'},
    Wellington:{center:[174.7772,-41.2888], style: 'mapbox://styles/jontyman/cm8gpkbqm010k01so48boewf8'},
  };

  export function getCoordinates(place){
    return locationsConfig[place].center
  }

  export function getStyle(place){
    return locationsConfig[place].style
  }

  