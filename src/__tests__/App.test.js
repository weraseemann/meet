// src/__tests__ / App.test.js

import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    })

    test('renders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });

    test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });
    test('render NumberofEvents', () => {
        expect(AppDOM.container.firstChild.querySelector('#number-of-events')).toBeInTheDocument();
    });

    test('renders the NumberOfEvents component', async () => {
        const { container } = render(<App />);
        const numberOfEventsInput = container.firstChild.querySelector('#number-of-events');
        expect(numberOfEventsInput).toBeInTheDocument();
    });

    test('displays 20 events by default', async () => {
        render(<App />);
        const events = await screen.findAllByText(/Event/);
        expect(events).toHaveLength(20);
    });
});
