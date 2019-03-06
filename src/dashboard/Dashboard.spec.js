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
    it('Toggles locked state on click', () => {
      const {getByText} = render(<Dashboard closed={true} locked={false}/>);
      const lockBtn = getByText(/lock gate/i);

      getByText(/unlocked/i);
      fireEvent.click(lockBtn);
      getByText(/locked/i);
      fireEvent.click(lockBtn);
      getByText(/unlocked/i);
    });
  });
});

describe('toggleLocked()', () => {
  it('Toggles locked state on click', () => {
    const {getByText} = render(<Dashboard/>);
    const closeBtn = getByText(/close gate/i);

    getByText(/open/i);
    fireEvent.click(closeBtn);
    getByText(/closed/i);
    fireEvent.click(closeBtn);
    getByText(/pen/i);
  });
});