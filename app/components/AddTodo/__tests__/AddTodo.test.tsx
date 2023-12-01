import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddTodo from '../AddTodo'

const mockSetTodos = jest.fn()

describe('AddTodo', () => {
    describe('Render', () => {
        it('should render the input', () => {
            render(<AddTodo setTodos={mockSetTodos} />);

            const input = screen.getByPlaceholderText('New Todo');

            expect(input).toBeInTheDocument();
        })

        it('should render a diabled submit button', () => {
            render(<AddTodo setTodos={mockSetTodos} />);

            const button = screen.getByRole('button', {
                name: 'Submit'
            })

            expect(button).toBeDisabled();
        });
    });

    describe('Behavior', () => {
        it('should add a text to the input', async () => {
            render(<AddTodo setTodos={mockSetTodos} />);

            const input = screen.getByPlaceholderText('New Todo');
            await userEvent.type(input, 'Test todo');

            expect(input).toHaveValue('Test todo');
        })

        it('should enable the submit button when text is input', async () => {

            render(<AddTodo setTodos={mockSetTodos} />);

            const input = screen.getByPlaceholderText('New Todo');
            await userEvent.type(input, 'Test todo');

            const button = screen.getByRole('button', {
                name: 'Submit'
            })

            expect(button).toBeEnabled();
        });


        it('should empty the text after submitting text', async () => {
            render(<AddTodo setTodos={mockSetTodos} />)

            const input = screen.getByPlaceholderText('New Todo');
            await userEvent.type(input, 'Test todo');

            const button = screen.getByRole('button', {
                name: 'Submit'
            });

            await userEvent.click(button);

            expect(input).toHaveValue('');
        });

        it('should call setTodos after submitting', async () => {
            render(<AddTodo setTodos={mockSetTodos} />);

            await userEvent.type(screen.getByPlaceholderText('New Todo'), 'Test todo');

            const button = screen.getByRole('button', {
                name: 'Submit'
            });

            await userEvent.click(button);

            expect(mockSetTodos).toHaveBeenCalled();

        });
    });

});