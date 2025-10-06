import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskForm from './TaskForm';

test('renders input fields', () => {
  render(<TaskForm />);
  expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
});

test('allows typing in title field', async () => {
  render(<TaskForm />);
  const titleInput = screen.getByLabelText(/Title/i);
  await userEvent.type(titleInput, 'Learn SQL');
  expect(titleInput).toHaveValue('Learn SQL');
});
