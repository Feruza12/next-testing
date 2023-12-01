import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../page'

describe('Home', () => {
    it('should add a new todo', async () => {
        render(<Home />);

        const input = screen.getByPlaceholderText('New Todo');
        await userEvent.type(input, 'New todo');
        expect(input).toHaveValue('New todo');

        const button = screen.getByRole('button', {
            name: 'Submit'
        })
        await userEvent.click(button);
        expect(input).toHaveValue('');

        const data = await screen.findByText('New Todo');
        expect(data).toHaveTextContent('New Todo');
    });

    it('should update a todo', async ()=>{
        render(<Home />);

        const checkbox = screen.getAllByRole('checkbox')[0] as HTMLInputElement;

        expect(checkbox.checked).toBeFalsy();
        await userEvent.click(checkbox);
        expect(checkbox.checked).toBeTruthy();
    });

    it('should delete a todo', async ()=>{
        render(<Home />);

        const todoText = screen.queryByText('Write Code 💻');
        expect(todoText).toBeInTheDocument();

        const deleteButton = screen.getAllByTestId('delete-button')[0];
        await userEvent.click(deleteButton);
        
        expect(todoText).not.toBeInTheDocument();
    });
});