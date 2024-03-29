import React from 'react';
import { render } from '@testing-library/react';
import { BasicTextarea } from './textarea.composition.js';

it('should render the correct text', () => {
  const { getByText } = render(<BasicTextarea />);
  const rendered = getByText('This is a text area');
  expect(rendered).toBeTruthy();
});
