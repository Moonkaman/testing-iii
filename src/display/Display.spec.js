import React from 'react';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('<Display />', () => {
  it('Checks display against snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});