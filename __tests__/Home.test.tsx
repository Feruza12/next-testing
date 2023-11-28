import { render, screen } from '@testing-library/react';
import Home from '@/app/page';


describe('Home', () => {
    it('should have Docs text', () => {
        render(<Home />); //ARRANGE

        const myElement = screen.getByText('Docs'); //ACT

        expect(myElement).toBeInTheDocument(); //ASSERT
    });


    it('should contain the text "information"', () => {

        render(<Home />);

        const myElement = screen.getByText(/information/i)

        expect(myElement).toBeInTheDocument(); 
    });

    it('should include a heading', () => {
        render(<Home />); 

        const myElement = screen.getByRole('heading', {
            name: 'Learn'
        });
        
        expect(myElement).toBeInTheDocument();
    });
});
