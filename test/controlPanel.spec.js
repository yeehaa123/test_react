import { React, TestUtils, modelFixture } from './helpers/react-helpers';
import ControlPanel from '../src/scripts/components/controlPanel/controlPanel.jsx';

describe("Control Panel", () => {
  let component;
  let user = undefined;
  let mode = 'browse';
  let history = [];

  let createControlPanel = (user, mode, history) => {
    return React.renderToString(
      <ControlPanel user={ user } mode={ mode } history={ history }/>
    );
  };

  describe("without user", () => {
    beforeEach(() => {
      component = createControlPanel(user, mode, history) 
    })

    it("displays the signin button", () => {
      expect(component).not.to.match(/Browse/);
      expect(component).to.match(/Sign In/);
    });
  });

  describe("with user", () => {
    beforeEach(() => {
      user = 'yeehaa';
      component = createControlPanel(user, mode, history);
    })

    it("displays the mode buttons", () => {
      expect(component).to.match(/Browse/);
      expect(component).not.to.match(/Sign In/);
    });
  });
});
