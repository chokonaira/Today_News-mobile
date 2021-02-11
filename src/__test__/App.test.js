import React from 'react';
import { render } from '@testing-library/react-native';

import App from '../../App';

describe('<App />', () => {
  it('has a welcome text', () => {
    const tree = render(<App />).toJSON();
    console.log(tree)
    expect(tree.children[0].children[0]).toBe('Welcome to Today News');
  });
});