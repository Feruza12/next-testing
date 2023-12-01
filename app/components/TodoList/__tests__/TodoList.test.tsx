import { render, screen } from '@testing-library/react'
import TodoList from '../TodoList'

const mockTodos = [
    {
        "userId": 1,
        "title": "Wave hello! 👋",
        "completed": false,
        "id": 1
    },
    {
        "userId": 1,
        "title": "Get Coffee ☕☕☕",
        "completed": false,
        "id": 2
    },
]

const mockSetTodos = jest.fn()

describe('Todo List', () => {

    it('should render "No Todos Available" when the array is empty', () => {
        render(<TodoList todos={[]} setTodos={mockSetTodos} />);

        const message = screen.getByText('No Todos Available');

        expect(message).toBeInTheDocument();
    })

    it('should render a list of correct number of items', () => {
        render(<TodoList todos={mockTodos} setTodos={mockSetTodos} />);

        const articlesArray = screen.getAllByRole('article');

        expect(articlesArray.length).toEqual(2);
    });

    it('should render list in correct order', () => {
        render(<TodoList todos={mockTodos} setTodos={mockSetTodos} />);

        const firstTodo = screen.getAllByTestId('todo-item')[0];

        expect(firstTodo).toHaveTextContent("Get Coffee ☕☕☕");
    });
});