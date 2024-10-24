import { render } from "@testing-library/react";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";


const feature = loadFeature("./src/features/SpecifyNumberOfEvents.feature");


defineFeature(feature, (test) => { 
  let AppComponent;
  let NumberOfEventsComponent;
  let AppDOM;

  test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => { 
    given('user access the app', () => {
      AppComponent = render(<App />);
    });

    when('they haven\'t specified the number of events', () => {

      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => {}} />, { container: EventListDOM });
      expect(NumberOfEventsComponent).toBeTruthy();

    });

    then('32 events will be displayed by default', () => {
      expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue('32'); 
    });
  });
  
  test('User can change the number of events displayed.', ({ given, when, then }) => {
    given('user is viewing the list of events', () => {
      AppComponent = render(<App />).container.firstChild;
    }); 

    when('they change the number of events to be displayed', async () => {
      const EventListDOM = AppComponent.querySelector('#event-list');
      NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} setErrorAlert={() => { }}/>, { container: EventListDOM }); 
      const user = userEvent.setup();
      const numberOfEvents = NumberOfEventsComponent.getByRole('textbox');
      await user.type(numberOfEvents, '{backspace}{backspace}10');    
    }); 

    then('the events list will show the specified number of events', async () => {
      expect(NumberOfEventsComponent.getByRole('textbox')).toHaveValue('10'); 
    });   
});
});   