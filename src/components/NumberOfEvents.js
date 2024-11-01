/* eslint-disable jsx-a11y/no-redundant-roles */
// src/components/NumberOfEvents.js

/* eslint-disable jsx-a11y/no-redundant-roles */
// src/components/NumberOfEvents.js

import { useState } from "react"
import PropTypes from 'prop-types'

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const [number, setNumber] = useState(32)

    const handleInputChanged = (e) => {
        let value = e.target.value
        setNumber(value)
        let errorText;
        if(value === isNaN || value.length <= 0) { 
          errorText = 'Please enter a valid number'
        } else {
          errorText = ''
        }
        setCurrentNOE(value)
        setErrorAlert(errorText) 
      }

    return (
        <div id="number-of-events" >
            <label className='NOE'>
                Number of Events:
                <input
                    className='NOE'
                    type="text"
                    defaultValue="32"
                    onChange={handleInputChanged}
                    data-testid="numberOfEventsInput"
                />
            </label>
        </div>
    )
};

export default NumberOfEvents;

NumberOfEvents.propTypes = {
    setCurrentNOE: PropTypes.func.isRequired,
    setErrorAlert: PropTypes.func.isRequired
  }