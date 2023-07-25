import React from 'react'
import '../SeasonDisplay.css'

const seasonConfig = {
    summer: {
        message: `Let's hit the beach!`,
        iconName: 'sun',
    },
    winter: {
        message: `Burr, it's chilly!`,
        iconName: 'snowflake',
    },
}

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
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = ({ lat }) => {
    // props.lat gives the latitude and getMonth will give month to the function
    const season = getSeason(lat, new Date().getMonth())
    const { message, iconName } = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon icon-left massive`} />
            <h1>{message}</h1>
            <i className={`${iconName} icon icon-right massive`} />
        </div>
    )
}

export default SeasonDisplay
