import { React, TestUtils } from './helpers/react-helpers';
import UnacademicContainer from '../src/scripts/components/unacademicContainer.jsx';

describe("Sidebar", () => {
  let container;

  beforeEach(() => {
    container = React.renderToString(
      <UnacademicContainer />
    );
  })

  it("renders the content panel", () => {
    expect(container).to.match(/class="contentPanel"/);
  });

  it("renders the control panel", () => {
    expect(container).to.match(/class="controlPanel"/);
  });
});
