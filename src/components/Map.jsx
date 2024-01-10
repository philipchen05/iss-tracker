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
            
            setInterval(() => {
                getCoordinates()
            }, 3000)

        } catch(err) {
            console.log(err);
        }
    })

    return(
        <div className="relative w-[620px] h-[475px] map flex content-center justify-center">
            {!loading && <ISS coordinates={coordinates} />}
        </div>
    );
}

export default Map;
