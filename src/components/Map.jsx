import React, { useState, useEffect } from "react";
import ISS from "./ISS";
import axios from "axios";

function Map() {
    const [coordinates, setCoordinates] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        try {
            const getCoordinates =  async () => {
                const res = await axios.get("https://api.wheretheiss.at/v1/satellites/25544")
                setCoordinates(res.data);
                setLoading(false)
            }
            
            getCoordinates();
        } catch(err) {
            console.log(err);
        }
    })

    /*setInterval(() => {
        getCoordinates();
    }, 5000);*/

    return(
        <div className="relative w-[620px] h-[475px] map flex content-center justify-center">
            {!loading && <ISS coordinates={coordinates} />}
        </div>
    );
}

export default Map;
