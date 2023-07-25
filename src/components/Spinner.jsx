import React from 'react';

const Spinner = ({ message = 'Loading...' }) => {
    return (
        <div class='ui active dimmer'>
            <div class='ui big text loader'>{message}</div>
        </div>
    );
};

export default Spinner;
