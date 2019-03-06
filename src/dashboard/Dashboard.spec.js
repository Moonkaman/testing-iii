import React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('checks snapshot to make sure nothing changed', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('toggleLocked()', () => {
    it('Toggles locked state and updates display on click', () => {
      const {getByText} = render(<Dashboard closed={true} locked={false}/>);
      const lockBtn = getByText(/lock gate/i);

      getByText(/unlocked/i);
      fireEvent.click(lockBtn);
      getByText(/locked/i);
      fireEvent.click(lockBtn);
      getByText(/unlocked/i);
    });

    it('Toggles locked state and updates button text on click', () => {
      const {getByText} = render(<Dashboard />);
      const lockBtn = getByText(/lock gate/i);
      const closeBtn = getByText(/close gate/i);

      fireEvent.click(closeBtn);
      getByText(/lock gate/i);
      fireEvent.click(lockBtn);
      getByText(/unlock gate/i);
      fireEvent.click(lockBtn);
      getByText(/lock gate/i);
    });
  });

  describe('toggleLocked()', () => {
    it('Toggles closed state and updates display on click', () => {
      const {getByText} = render(<Dashboard/>);
      const closeBtn = getByText(/close gate/i);


      getByText(/open/i);
      fireEvent.click(closeBtn);
      getByText(/closed/i);
      fireEvent.click(closeBtn);
      getByText(/pen/i);
    });

    it('Toggles closed state and updates button text on click', () => {
      const {getByText} = render(<Dashboard/>);
      const closeBtn = getByText(/close gate/i);

      getByText(/close gate/i);
      fireEvent.click(closeBtn);
      getByText(/open gate/i);
      fireEvent.click(closeBtn);
      getByText(/close gate/i);
    });
  });
});