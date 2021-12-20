import React from 'react';

const getSeason = (lat, month) => {
    /**
     * Supposition
     *
     * Northern Hemisphere
     * - Winter is from October until March
     * - Summer is from April until September
     * Southern Hemisphere
     * - Summer is from October until March
     * - Winter is from April until September
     */
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => {
    // props.lat gives the latitute and getMonth will give month to the function
    const season = getSeason(props.lat, new Date().getMonth());
    const message =
        season === 'winter' ? `Burr, it's chilly!` : `Let's hit the beach!`;
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    return (
        <div>
            <i className={ `${icon} icon` }/>
            <h1>{message}</h1>
            <i className={ `${icon} icon` }/>
        </div>
    );
};

export default SeasonDisplay;
