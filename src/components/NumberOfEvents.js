/* eslint-disable jsx-a11y/no-redundant-roles */
// src/components/NumberOfEvents.js

import React, { useState } from 'react';

const NumberOfEvents = ({ setNumberOfEvents }) => {
    const [number, setNumber] = useState(32);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setNumber(value);
        setNumberOfEvents(value);
    };

    return (
        <div>
            <label htmlFor="number-of-events">Number of Events: </label>
            <input
                id="number-of-events"
                type="number"
                value={number}
                onChange={handleInputChange}
                role="textbox"
            />
        </div>
    );
};

export default NumberOfEvents;