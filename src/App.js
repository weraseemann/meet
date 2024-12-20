import './App.css';

import EventGenresChart from './components/EventGenresChart';
import CityEventsChart from './components/CityEventsChart';
import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';

import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("You are offline. Events data may be outdated.")
    }
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents : allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">
      
      <div className="App-header">
        <p>Meet Event</p>
      </div>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <div className='h1'> Find an event in nearby cities
      <CitySearch className="city-search"
        allLocations={allLocations}
        setCurrentCity={setCurrentCity} 
        setInfoAlert={setInfoAlert}
        />
      <NumberOfEvents className="number-of-events"
        setCurrentNOE={setCurrentNOE} 
        setErrorAlert={setErrorAlert}/>
        </div>
      <div className="charts-container">
        <EventGenresChart events={events} /> 
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList
        events={events} />

    </div>
  );
}

export default App;