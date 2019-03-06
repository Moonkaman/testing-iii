import React from 'react';
import {render} from 'react-testing-library';
import renderer from 'react-test-renderer';

import Controls from './Controls';

describe('<Controls />', () => {
  it('Checks snapshot for controls', () => {
    const tree = renderer.create(<Controls />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Checks to make sure lock button is rendered', () => {
    const {getByText} = render(<Controls />);
    getByText(/lock gate/i);
  });

  it('Checks to make sure close button is rendered', () => {
    const {getByText} = render(<Controls />);
    getByText(/close gate/i);
  });
});


