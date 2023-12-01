
import { render, screen } from '@testing-library/react'
import Header from '../Header';
describe('Header', () => {

    it('should render the "Next Todos" heading', () => {
        render(<Header title="Next Todos" />);

        const header = screen.getByRole('heading', {
            name: 'Next Todos'
        });

        expect(header).toBeInTheDocument();
    })

    it('should render "Test" as heading', () => {
        render(<Header  title="Test"/>);

        const header = screen.getByRole('heading', {
            name: 'Test'
        });

        expect(header).toBeInTheDocument();
    });
});