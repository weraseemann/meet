
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Event from './Event'; // Adjust the import path as necessary
import { getEvents } from './api'; // Import the getEvents function

describe('Event Component', () => {
    let event;

    beforeAll(async () => {
        const allEvents = await getEvents();
        event = allEvents[0]; // Use the first event from the mock data
    });

    test('renders the event title', () => {
        render(<Event event={event} />);
        expect(screen.queryByText(event.summary)).toBeInTheDocument();
    });

    test('renders the event start time', () => {
        render(<Event event={event} />);
        expect(screen.queryByText(event.created)).toBeInTheDocument();
    });

    test('renders the event location', () => {
        render(<Event event={event} />);
        expect(screen.queryByText(event.location)).toBeInTheDocument();
    });

    test('renders the show details button', () => {
        render(<Event event={event} />);
        expect(screen.queryByText('Show Details')).toBeInTheDocument();
    });

    test('event details should be collapsed by default', () => {
        render(<Event event={event} />);
        const { container } = render(<Event event={event} />);
        const detailsElement = container.querySelector('.event-details');
        expect(detailsElement).not.toBeInTheDocument();
    });

    test('shows event details when "Show Details" button is clicked', () => {
        render(<Event event={event} />);
        const buttonElement = screen.queryByText('Show Details');
        fireEvent.click(buttonElement);
        expect(screen.queryByText(event.details)).toBeInTheDocument();
        expect(screen.queryByText('Hide Details')).toBeInTheDocument();
    });

    test('hides event details when "Hide Details" button is clicked', () => {
        render(<Event event={event} />);
        const showButton = screen.queryByText('Show Details');
        fireEvent.click(showButton);
        const hideButton = screen.queryByText('Hide Details');
        fireEvent.click(hideButton);
        expect(screen.queryByText(event.details)).not.toBeInTheDocument();
        expect(screen.queryByText('Show Details')).toBeInTheDocument();
    });
});