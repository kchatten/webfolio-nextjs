import '@testing-library/jest-dom';
import RootLayout from "@/app/layout";

import { render, screen } from "@testing-library/react";
import { useRouter, usePathname } from "next/navigation";


const pushMock = jest.fn();
jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: pushMock,
    }),

    usePathname: () => '/',
}));

describe("Testing RootLayout component", () => {

    it('can be rendered in a default state', () => {

        const reactNode = <p>child</p>;

        render(<RootLayout children={reactNode}/>);
        const header = screen.getByRole('banner');
        const childElement = screen.getByText('child');

        expect(header).toBeInTheDocument();
        expect(childElement).toBeInTheDocument();

    });

});