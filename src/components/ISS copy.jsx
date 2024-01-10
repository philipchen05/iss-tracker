import React from 'react';
import pixel from "./pixel.jpeg";

function ISS(props) {
    var className = "mt-[315px] ml-[-32px] z-1 fixed size-3";


/*
    const [coordinates, setCoordinates] = useState('');
    
    const getCoordinates =  async () => {
        await axios.get("http://api.open-notify.org/iss-now.json")
        .then(res => {
            setCoordinates(res.data.iss_position);
        }).catch(err => {
            console.log(err);
        })
    }
    getCoordinates();

    function renderISS(coordinates) {
        <ISS coordinates={coordinates}/>
    }

    console.log(props.coordinates);
    const latitude = props.coordinates.latitude;
    const longitude = props.coordinates.longitude;
    var className = "mt-[315px] ml-[-32px] z-1 fixed size-3";
    //console.log("latitude: " + latitude + " " + "Longitude: " + longitude);
    /*
    if(latitude > 0) {
        if(longitude > 0) {
            className = `mt-[${Math.floor(315-2.9444*latitude)}px] ml-[${Math.floor(-32+1.8166667*longitude)}px] z-1 fixed size-3`;
        } else {
            className = `mt-[${Math.floor(315-2.9444*latitude)}px] ml-[${Math.floor(-32+1.65555556*longitude)}px] z-1 fixed size-3`;
        }
    } else {
        if(longitude > 0) {
            className = `mt-[${Math.floor(315-2.277778*latitude)}px] ml-[${Math.floor(-32+1.8166667*longitude)}px] z-1 fixed size-3`;
        } else {
            className = `mt-[${Math.floor(315-2.277778*latitude)}px] ml-[${Math.floor(-32+1.65555556*longitude)}px] z-1 fixed size-3`;
        }
    }
    //console.log(className);*/
    return(<img src={pixel} alt="ISS" className="mt-[315px] ml-[-32px] z-1 fixed size-3" />);
// 315px, -32px,   top is 50px lat. bottom is 520px  leftmost is -330px  rightmost is 295px*/
}


export default ISS;



