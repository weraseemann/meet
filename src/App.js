// src/App.js

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import React, { useState, useEffect } from 'react';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api'; // Assume this function fetches events
import Event from './Event'; // Assume this component displays an individual event
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(20);

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = await getEvents();
      setEvents(allEvents.slice(0, numberOfEvents));
    };
    fetchEvents();
  }, [numberOfEvents]);
  return (
    <div className="App">
      <CitySearch />
      <EventList />
      <NumberOfEvents setNumberOfEvents={setNumberOfEvents} />
      <div>
        {events.map((event) => (
          <Event key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};