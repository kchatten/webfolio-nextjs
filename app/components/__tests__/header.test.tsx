import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react";
import Header, { generateRandomChar, generateSiteName} from '../header/header';
import { useRouter, usePathname } from "next/navigation";


const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: pushMock,
    }),

    usePathname: () => '/',
}));

jest.useFakeTimers();
describe("Testing Header component internal functions", () => {

    it("generateRandomChar() should generate a random character from a provided array", () => {
        const variants = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        const randomChar = generateRandomChar(variants);
        expect(variants).toContain(randomChar);
    });

    it("generateSiteName() should generate a non-empty string", () => {
        const result = generateSiteName();
        expect(result.length).toBeGreaterThan(0);
        expect(typeof result).toBe('string');
    });

    it('can update the banner text element', () => {
        render(<Header />);

        const bannerTextElement = screen.getByRole('banner').querySelector('span');
        const initialTextContent = bannerTextElement.textContent;

        jest.advanceTimersByTime(200);

        const updatedTextContent = bannerTextElement.textContent;

        expect(updatedTextContent).not.toBe(initialTextContent);
    });
})

describe("Testing Header component", () => {

    it('can be rendered in a default state', () => {

        render(<Header />);
        const header = screen.getByRole('banner');
        const siteTitle = screen.getByLabelText('kchat.dev');
        const homeButton = screen.getByText('Home');
        const projectsButton = screen.getByText('Projects');
        const contactButton = screen.getByText('Contact');

        expect(header).toBeInTheDocument();

        expect(siteTitle).toBeInTheDocument();
        expect(siteTitle.getAttribute('aria-label')).toBe('kchat.dev');

        expect(homeButton).toBeInTheDocument();
        expect(projectsButton).toBeInTheDocument();
        expect(contactButton).toBeInTheDocument();
    });

});