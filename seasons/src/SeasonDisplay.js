import './SeasonDisplay.css';
import React from 'react';

const SEASONCONFIG = {
    Summer: {
        text: 'Lets thi the beach',
        iconName: 'sun'
    },
    Winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake'
    } 
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter'
    } 

    return lat > 0 ? 'Winter' : 'Summer'
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = SEASONCONFIG[season];

    return (
        <div className={`season-display ${season}`}> 
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{ text }</h1> 
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;