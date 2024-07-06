import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HeaderButton from '../buttons/routerbutton';
import styles from '../buttons/headerbutton.module.css';

// Mock useRouter and usePathname
const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: pushMock,
    }),

    usePathname: () => '/',
}));

describe('Testing HeaderButton component', () => {
    const DEFAULT_ENV = process.env;

    describe('in a production environment', () => {
        beforeEach(() => {
            process.env = { ...DEFAULT_ENV, NODE_ENV: 'production' };
            jest.resetModules();
        });

        afterEach(() => {
            process.env = DEFAULT_ENV;
            jest.clearAllMocks();
            pushMock.mockClear();
        });

        it('changes the url path when clicked', async () => {

            const logSpy = jest.spyOn(global.console, 'log');

            const href = '/nextpage';
            const textContent = 'Homepage';
            render(<HeaderButton href={href} textContent={textContent} />);

            const button = screen.getByRole('button');
            userEvent.click(button);

            expect(logSpy).toHaveBeenCalledTimes(0);

            await waitFor(() => {
                expect(pushMock).toHaveBeenCalledTimes(1);
                expect(pushMock).toHaveBeenCalledWith(href);
            }); // Delay the test to allow the click event to resolve.
        });

        it('renders different stylings based on url path', async () => {
            const logSpy = jest.spyOn(global.console, 'log');

            const href = '/';
            const textContent = 'Homepage';
            render(<HeaderButton href={href} textContent={textContent} />);
            render(<HeaderButton href={'badhref'} textContent={'badtext'} />);

            const activeButton = screen.getByText('Homepage');
            const inactiveButton = screen.getByText('badtext');

            userEvent.click(activeButton);
            userEvent.click(inactiveButton);

            // Assert active button has the correct classes
            expect(activeButton).toBeInTheDocument();
            expect(activeButton).toHaveClass(styles.headerbutton);
            expect(activeButton).toHaveClass(styles.active);

            // Assert inactive button does not have active class
            expect(inactiveButton).toBeInTheDocument();
            expect(inactiveButton).not.toHaveClass(styles.active);

            // Verify console.log was not called during the test
            expect(logSpy).toHaveBeenCalledTimes(0);
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
            render(<HeaderButton href={'href'} />)
            const button = screen.getByRole('button')

            userEvent.click(button)

            expect(button).toBeInTheDocument()
            expect(button).toHaveTextContent('Click me!');

            await waitFor(() => {
                expect(spy).toHaveBeenCalledTimes(1);
                expect(spy).toHaveBeenCalledWith(`You just clicked a Header button element! You probably shouldn't be seeing this.`);
            }); // Delay the test to allow the click event to resolve.
        });
    })
});
