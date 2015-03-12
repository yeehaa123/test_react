import { React, TestUtils, appStateFixture } from './helpers/react-helpers';
import Sidebar from '../src/scripts/components/sidebar.jsx';

describe("Sidebar", () => {
  let container;
  let appState;

  beforeEach(() => {
    appState = appStateFixture; 

    container = React.renderToString(
      <Sidebar appState={ appState }/>
    );
  })

  it("renders the content panel", () => {
    expect(container).to.match(/class="contentPanel"/);
  });

  it("renders the control panel", () => {
    expect(container).to.match(/class="controlPanel"/);
  });
});
