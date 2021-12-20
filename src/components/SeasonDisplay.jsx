import React from 'react'

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
        return lat > 0 ? 'Summer' : 'Winter'
    } else {
        return lat > 0 ? 'Winter' : 'Summer'
    }
}

const SeasonDisplay = props => {
    // props.lat gives the latitute and getMonth will give month to the function
    const season = getSeason(props.lat, new Date().getMonth())
    return <h1>{ season }</h1>
}

export default SeasonDisplay