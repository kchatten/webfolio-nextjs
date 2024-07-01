
import '@testing-library/jest-dom'
import '@testing-library/react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import OffsiteButton from '../buttons/offsitebutton'


jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
    usePathname: jest.fn(),
}));

Object.defineProperty(window, 'confirm', {
    value: jest.fn(() => true), // Mocking window.confirm to always return true
});

describe('Testing OffsiteButton component', () => {

    const DEFAULT_ENV = process.env;

    describe('in a production environment', () => {

        beforeEach(() => {
            process.env = { ...DEFAULT_ENV, NODE_ENV: 'production' };
            jest.resetModules();
        });

        afterEach(() => {
            process.env = DEFAULT_ENV;
            jest.clearAllMocks();
        });


        it('can open a new tab to a specified URL', async () => {

            const logSpy = jest.spyOn(global.console, 'log');
            const windowSpy = jest.spyOn(global, 'open').mockImplementation();

            const href = 'www.google.com'
            const textContent = "Google"
            render(<OffsiteButton href={href} textContent={textContent} />)

            const button = screen.getByRole('button')
            userEvent.click(button)

            expect(button).toBeInTheDocument()
            expect(logSpy).toHaveBeenCalledTimes(0)

            await waitFor(() => {
                expect(windowSpy).toHaveBeenCalledTimes(1)
                expect(windowSpy).toHaveBeenCalledWith('www.google.com', '_blank')
            }); // Delay the test to allow the click event to resolve.
        });
    });

    describe('in a development environment', () => {
        beforeEach(() => {
            process.env = { ...DEFAULT_ENV, NODE_ENV: 'development' };
            jest.resetModules();
        });

        afterEach(() => {
            process.env = DEFAULT_ENV;
            jest.clearAllMocks();

        });

        it('can be rendered in a default state', async () => {
            const spy = jest.spyOn(global.console, 'log');
            render(<OffsiteButton href={'href'} />)
            const button = screen.getByRole('button')

            userEvent.click(button)
            expect(button).toBeInTheDocument()
            expect(button).toHaveTextContent('Click me!');

            await waitFor(()=> {
                expect(spy).toHaveBeenCalledTimes(1);
                expect(spy).toHaveBeenCalledWith(`You just clicked an Offsite button element! You probably shouldn't be seeing this.`);
            }); // Delay the test to allow the click event to resolve.
        });
    })
});






