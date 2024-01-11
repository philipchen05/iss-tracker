import React, { useState, useEffect } from "react";
import ISS from "./ISS";
import axios from "axios";

function Map() {
    const [coordinates, setCoordinates] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {            
        setTimeout(() => {
            getCoordinates()
            console.log("got coordinates")
        }, 3000)
    })

    const getCoordinates =  async () => {
        await axios
        .get("https://api.wheretheiss.at/v1/satellites/25544")
        .then((res) => {
            setCoordinates(res.data)
            setLoading(false)})
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div className="relative w-[620px] h-[475px] map flex content-center justify-center">
            {!loading && <ISS coordinates={coordinates} />}
        </div>
    );
}

export default Map;
