/* eslint-disable jsx-a11y/no-redundant-roles */
// src/components/NumberOfEvents.js

/* eslint-disable jsx-a11y/no-redundant-roles */
// src/components/NumberOfEvents.js

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    const handleInputChanged = (event) => {
        const value = event.target.value;

        if (isNaN(value)) {
            setErrorAlert('Value is not a number');
        } else if (value > 32) {
            setErrorAlert('Maximum value 32 is allowed');
        } else if (value <= 0) {
            setErrorAlert('Minimum value is 1');
        } else {
            setErrorAlert('');
            setCurrentNOE(value);
        }
    };

    return (
        <div id="number-of-events">
            <input
                type="text"
                defaultValue="32"
                onChange={handleInputChanged}
                data-testid="numberOfEventsInput"
            />
        </div>
    );
};

export default NumberOfEvents;