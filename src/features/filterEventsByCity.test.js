import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor, and } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../api';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
    
    test('When user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
        given('user hasn\'t searched for any city', () => {

        });
        let AppComponent;
        when('user opens the app', () => {
        AppComponent = render(<App />);
        });

        then('upcoming events from all cities will be displayed', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
      
            await waitFor(() => {
              const EventListItems = within(EventListDOM).queryAllByRole('listitem');
              expect(EventListItems.length).toBe(32);
            });
          });
        });

    test('User should see a list of suggestions when they search for a city.', ({ given, when, then }) => {
        let AppComponent;
        given('user opens the app', () => {
            AppComponent = render(<App />);
        });
        let CitySearchDOM;
        when('they type already one letter in the search bar', async () => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            CitySearchDOM = AppDOM.querySelector('#city-search');
            const CitySearchInput = within(CitySearchDOM).getByRole('textbox');
            await user.type(CitySearchInput, 'B');
          });

        then('a list of suggested cities will be displayed', () => {
            const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem'); 
            expect(suggestionListItems).toHaveLength(2);
          });
        });
    
    test('User can select a city from the suggested list.', ({ given, when, then, and }) => {
        let AppComponent;
        let AppDOM; 
        let CitySearchDOM;
        let citySearchInput;
        given('user has typed in a city in the search bar', async () => {
            AppComponent = render(<App />);
            const user = userEvent.setup();
            AppDOM = AppComponent.container.firstChild;
            CitySearchDOM = AppDOM.querySelector('#city-search');
            citySearchInput = within(CitySearchDOM).queryByRole('textbox');  
            await user.type(citySearchInput, "Berlin");
          });
      
          let suggestionListItems;
          and('the list of suggested cities is showing', () => {
            suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem'); 
            expect(suggestionListItems).toHaveLength(2);
          }); 
      
        when('they select a city from the suggested list', async () => {
            const user = userEvent.setup();
            await user.click(suggestionListItems[0]);
            expect(citySearchInput.value).toBe('Berlin, Germany');
          }); 

        then('events for the selected city will be displayed', async () => {
          const EventListDOM = AppDOM.querySelector('#event-list');
          const EventListItems = within(EventListDOM).queryAllByRole('listitem');
          const allEvents = await getEvents();
          // citySearchInput.value should have the value "Berlin, Germany"
          const berlinEvents = allEvents.filter(event => event.location === citySearchInput.value)
          expect(EventListItems).toHaveLength(berlinEvents.length);
        });
    });
    });