import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as ArweaveImage } from '../stories/ArweaveImage.stories';

describe('ArweaveImage', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ArweaveImage hash="o-z1Ea6xXyERnujaFyMZwHlsr2SLwnVyDqjP88V2zeE" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});