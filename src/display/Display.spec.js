import React from 'react';
import { render } from 'react-testing-library'
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
  it('Checks display against snapshot', () => {
    const tree = renderer.create(<Display />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('Closed Display', () => {
    it('Displays correct deflaut gate closed value', () => {
      const {getByText} = render(<Display />);
      getByText(/open/i);
    });

    it('Displays open text if open is true', () => {
      const {getByText} = render(<Display closed={true} />)
      getByText(/closed/i);
    });

    it('Has green-led class when open', () => {
      const{getByText} = render(<Display />);
      expect(getByText(/open/i)).toHaveClass('green-led')
    });

    it('Has red-led class when closed', () => {
      const{getByText} = render(<Display closed={true} />);
      expect(getByText(/closed/i)).toHaveClass('red-led')
    });
  });

  describe('Locked Display', () => {
    it('Displays correct default gate lock value', () => {
      const {getByText} = render(<Display />);
      getByText(/unlocked/i);
    });

    it('Displays locked text if locked is true', () => {
      const {getByText} = render(<Display closed={true} locked={true} />)
      getByText(/locked/i);
    });
  });
});

