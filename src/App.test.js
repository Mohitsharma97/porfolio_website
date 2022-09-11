import React from 'react';
import { render } from '@testing-library/react';
import Home from '../src/contents/Home';

test('renders learn react link', () => {
  const { getByText } = render(<Home />);
  console.log("test run")
});
