import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/todo/i);
  expect(titleElement).toBeInTheDocument();
});
