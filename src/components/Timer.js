import React, { useState, useEffect, } from 'react';


export default function Timer(){
    const [elapsed, setElapsed] = useState(0);
    let timer = {};
    let startTime = 0;

    useEffect(() => {
        startTime = Date.now();
        timer = window.setInterval(tick, 1);
        return () => {
            // Equilvalent to componentWillUnmount here
            clearInterval(timer);
        };
    }, []);

    const tick = () => {
        setElapsed(Date.now() - startTime);
    }

    return(
        <div>
            Time Elapsed: {(elapsed / 1000).toFixed(3)}s
        </div>
    )
}