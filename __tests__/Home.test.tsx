import {render, screen} from '@testing-library/react';
import Home from '@/app/page';

it('should have Docs text', () => {
    render(<Home />) //ARRANGE

    const myElement = screen.getByText('Docs'); //ACT

    expect(myElement).toBeInTheDocument();
});