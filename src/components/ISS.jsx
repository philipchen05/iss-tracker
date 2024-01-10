import React from 'react';
import pixel from "./pixel.jpeg";

function ISS(props) {
    const latitude = parseFloat(props.coordinates.latitude);
    const longitude = parseFloat(props.coordinates.longitude);
    var lat;
    var lon;
    // origin: lat = 315, lon = 280
    // top: 60px
    // bottom: 500px
    // left: 0px
    // right: 600px
    if(latitude > 0)
        lat = Math.floor(315-2.8333*latitude);
    else
        lat = Math.floor(315-2.0556*latitude);

    if(longitude > 0)
        lon = Math.floor(280+1.7778*longitude);
    else
        lon = Math.floor(280+1.5556*longitude);
    
    console.log("latitude: " + latitude + "\nlongitude: " + longitude)
    return(<img src={pixel} alt="ISS" className="z-1 absolute size-3" style={{top: `${lat}px`, left: `${lon}px`}} />)
}

export default ISS;
