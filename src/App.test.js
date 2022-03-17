import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders IMDB API', () => {
  render(<App />);
  const linkElement = screen.getByText(/IMDB API/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders IMDB API', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dark Mode:/i);
  expect(linkElement).toBeInTheDocument();
});
