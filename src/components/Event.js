// src/components/Event.js
import React, { useState } from 'react';

const Event = ({ event }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div>
            <h1 className="event-summary">{event.summary}</h1>
            <p className="event-created">{event.created}</p>
            <p className="event-location">{event.location}</p>
            <button className="event-details-button" onClick={() => setIsCollapsed(!isCollapsed)}>
                {isCollapsed ? 'Show Details' : 'Hide Details'}
            </button>
            {!isCollapsed && <p className="event-details">{event.details}</p>}
        </div>
    );
};

export default Event;