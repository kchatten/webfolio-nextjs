import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from '../buttons/button'
import styles from '../buttons/button.module.css'


describe('Testing base Button component', () => {
    const DEFAULT_ENV = process.env;

    describe('in a production environment', () => {
        beforeEach(() => {
            process.env = { ...DEFAULT_ENV, NODE_ENV: 'production' };
            jest.resetModules();
        });

        afterEach(() => {
            process.env = DEFAULT_ENV;
            jest.restoreAllMocks();
        });

        it('can be rendered in a default state', async () => {

            const spy = jest.spyOn(global.console, 'log');
            render(<Button />)
            const button = screen.getByRole('button')

            userEvent.click(button)
            expect(button).toBeInTheDocument()
            expect(button).toHaveTextContent('Click me!');

            await waitFor(()=>{
                expect(spy).toHaveBeenCalledTimes(0);
            })
        });

        it('can be rendered with custom styling', () => {
            render(<Button className={styles.button} />)
            const button = screen.getByRole('button')

            expect(button).toHaveClass(styles.button);
        });

        it('can be rendered with custom text', () => {
            render(<Button textContent='test' />)
            const button = screen.getByText('test');
            expect(button).toBeInTheDocument();
        });

        it('can be clicked in a production environment with a custom handleClick function', async () => {
            const spy = jest.spyOn(global.console, 'log')
            function customFunc(a: number, b: number) {
                const result = a + b;
                return console.log(result);
            }

            render(<Button handleClick={() => customFunc(1, 2)} />)

            const button = screen.getByRole('button')

            userEvent.click(button)

            await waitFor(()=>{
                expect(spy).toHaveBeenCalledTimes(1);
                expect(spy).toHaveBeenCalledWith(3);
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
            render(<Button />)
            const button = screen.getByRole('button')

            expect(button).toBeInTheDocument()
            expect(button).toHaveTextContent('Click me!');

            userEvent.click(button)

            await waitFor(() => {
                expect(spy).toHaveBeenCalledTimes(1);
                expect(spy).toHaveBeenCalledWith(`You just clicked a base button element! You probably shouldn't be seeing this.`);
            }); // Delay the test to allow the click event to resolve.
        });
        
        it('can be clicked in a development environment with a custom handleClick function', async () => {
            const spy = jest.spyOn(global.console, 'log')
            function customFunc(a: number, b: number) {
                const result = a + b;
                return console.log(result);
            }

            render(<Button handleClick={() => customFunc(1, 2)} />)

            const button = screen.getByRole('button')

            userEvent.click(button)

            await new Promise(resolve => setTimeout(resolve, 100)); // Delay the test to allow the click event to resolve.

            expect(spy).toHaveBeenCalledTimes(1);
            expect(spy).toHaveBeenCalledWith(3);
        });
    });
});
