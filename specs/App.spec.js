import React from 'react';
import { render } from '@testing-library/react-native';

import App from '../App';

describe('<App />', () => {
  it('has 1 child', () => {
    const screen = render(<App />)
    expect(screen.getByText('TuneShare').children).toHaveLength(1)
  });
});