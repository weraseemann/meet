/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable no-restricted-globals */
/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
// src/__tests__ / App.test.js

import React from 'react';
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

    test('render NumberOfEvents', () => {
        expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
    });
})
