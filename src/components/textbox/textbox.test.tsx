import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import TextBox from './TextBox';

describe('TextBox', () => {
  test('renders App component', () => {
    render(<TextBox name='textBox' label='First Name' />);

    expect(screen.getByText(/First Name/)).toBeInTheDocument();
  });
});
