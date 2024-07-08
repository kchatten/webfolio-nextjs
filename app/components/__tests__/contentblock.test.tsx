import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import ContentBlock from '../content/contentblock';

describe("Testing ContentBlock component", () => {
    it('can be rendered in a default state', () => {
        render(<ContentBlock><p>content</p></ContentBlock>);
        const content = screen.getByText('content');
        expect(content).toBeInTheDocument();
    });
});