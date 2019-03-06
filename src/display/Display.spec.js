import React from 'react';
import { render } from 'react-testing-library'
import renderer from 'react-test-renderer';

import Display from './Display';

describe('<Display />', () => {
  it('Checks display against snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Displays correct default gate lock value', () => {
    const {getByText} = render(<Display />);
    getByText(/unlocked/i);
  });

  it('Displays correct deflaut gate position value', () => {
    const {getByText} = render(<Display />);
    getByText(/open/i);
  });

  it('Displays open text if open is true', () => {
    const {getByText} = render(<Display closed={true} />)
    getByText(/closed/i);
  });

  it('Displays locked text if locked is true', () => {
    const {getByText} = render(<Display closed={true} locked={true} />)
    getByText(/locked/i);
  });
});

