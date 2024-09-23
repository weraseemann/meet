import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NumberOfEvents from '../components/NumberOfEvents';

describe('NumberOfEvents Component', () => {
    test('contains an element with the role of the textbox', () => {
        render(<NumberOfEvents setNumberOfEvents={() => { }} />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toBeInTheDocument();
    });

    test('default value of the input field is 32', () => {
        render(<NumberOfEvents setNumberOfEvents={() => { }} />);
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveValue(32);
    });

    test('value of the NumberOfEvents component’s textbox changes when a user types in it', async () => {
        const { user } =
            render(<NumberOfEvents setNumberOfEvents={() => { }} />);
        const inputElement = screen.getByRole('textbox');
        await user.type(inputElement, '{backspace}{backspace}10');
        expect(inputElement).toHaveValue(10);
    });
});