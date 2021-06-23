
import React, { useState, useEffect, } from 'react';

/*
Clock is an :
In object-oriented programming with classes, an instance variable is a variable defined in a class (i.e. a member variable ), for which each instantiated object of the class has a separate copy, or instance. An instance variable is similar to a class variable.[1] An instance variable is a variable which is declared in a class but outside the constructor and the method/function. Instance variables are created when an object is instantiated, and are accessible to all the methods, the constructor and block in the class. Access modifiers can be given to the instance variable.
*/

const Clock = () => {
    const currentTime = new Date();
    const [hours, setHours] = useState(currentTime.getHours());
    const [minutes, setMinutes] = useState(currentTime.getMinutes());
    const [seconds, setSeconds] = useState(currentTime.getSeconds());
    const [ampm, setAMPM] = useState(currentTime.getHours() >= 12 ? 'Pm' : 'Am');
    const updateClock = () => {
        const currentTime = new Date();
        setHours(currentTime.getHours());
        setMinutes(currentTime.getMinutes());
        setSeconds(currentTime.getSeconds());
        setAMPM(currentTime.getHours() >= 12 ? 'Pm' : 'Am');
    }
    let Clock = {};

    useEffect(() => {
        Clock = window.setInterval(updateClock, 1000);
        return () => {
            // Same as componentWillUnmount() here
            // this prevents memory leak
            // where a function is trying to run but cannot access its state
            clearInterval(Clock);
        };
    }, []);

    return (
        <div className="clock">
            {
                hours === 0 ? 12 :
                    (hours > 12) ?
                        hours - 12 : hours
            } : {
                minutes > 9 ? minutes : `0${minutes}`
            } : {
                seconds > 9 ? seconds : `0${seconds}`
            } {ampm}
        </div>
    )
}

export default Clock;

