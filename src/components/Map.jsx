import React, { useState, useEffect } from "react";
import ISS from "./ISS";
import axios from "axios";

function Map() {
    const [coordinates, setCoordinates] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        try {
            const getCoordinates =  async () => {
                const res = await axios.get("http://api.open-notify.org/iss-now.json")
                setCoordinates(res.data.iss_position);
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
