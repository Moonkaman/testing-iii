import React from 'react';
import { render } from 'react-testing-library'
import renderer from 'react-test-renderer';

import Display from './Display';

describe('<Display />', () => {
  it('Checks display against snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Displays correct gate lock value', () => {
    const {getByText} = render(<Display />);
    getByText(/unlocked/i);
  });

  it('Displays correct gate position value', () => {
    const {getByText} = render(<Display />);
    getByText(/open/i);
  });
});

