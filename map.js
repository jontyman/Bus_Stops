
	mapboxgl.accessToken = 'pk.eyJ1Ijoiam9udHltYW4iLCJhIjoiY204YTR4NHVjMHpiODJxcHVyc3drc3B4NCJ9.bdW2qwj71tgZ0hFi7p4X_w';
    const map = new mapboxgl.Map({
        container: document.getElementById('map'), // container ID
        style: 'mapbox://styles/jontyman/cm8a7l1rr00h201sq0uxwciak',
        center: [174.3194202, -35.7275268], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 11 // starting zoom
    });

    document.getElementById('evaluator').addEventListener("change",mapFly);

   function mapFly(){
        var x = document.getElementById('evaluator');
        const selectedValue=x.value;
            switch(x.value){
                case "Auckland":
                    map.flyTo({
                        center: [174.7631803, -36.8520950],
                            //center: [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 100],
                        essential: true // this animation is considered essential with respect to prefers-reduced-motion
                    });
                    map.setStyle('mapbox://styles/jontyman/cm8goep8q012c01r09osm4psr');

                    break;

                case "Wellington":
                    map.flyTo({
                        center:[174.7772114,-41.2887953],
                        essential: true
                    });
                    map.setStyle('mapbox://styles/jontyman/cm8gpkbqm010k01so48boewf8');
                    break;

                default :
                    map.flyTo({
                        center: [174.3194202, -35.7275268],
                        essential: true // this animation is considered essential with respect to prefers-reduced-motion
                    });
                    map.setStyle('mapbox://styles/jontyman/cm8a7l1rr00h201sq0uxwciak');

                }
            }

            // hsla(244, 87%, 66%, 0.75)