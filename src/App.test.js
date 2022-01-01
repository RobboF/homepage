import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

test('renders logo', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId('logo');
  expect(linkElement).toBeInTheDocument();
});