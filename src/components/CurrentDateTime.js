import React, {useState, useEffect} from 'react';

export const CurrentDateTime = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        console.log("componentDidMount")
        const intervalId = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return() => {
            console.log("componentWillUnmount");
            clearInterval(intervalId);
        };
    }, []);

    return(
        <div>{dateTime.toLocaleTimeString()}</div>
    );
}