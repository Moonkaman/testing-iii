import React from 'react';
import {render} from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

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

  it('Disables lock button when door is open', () => {
    const {getByText} = render(<Controls />);
    expect(getByText(/lock gate/i)).toBeDisabled();
  });

  it('Disables close button when door is closed and locked', () => {
    const {getByText} = render(<Controls closed={true} locked={true}/>);
    expect(getByText(/open gate/i)).toBeDisabled();
  });
});


