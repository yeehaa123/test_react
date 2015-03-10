import { React, TestUtils } from './helpers/react-helpers';
import UnacademicContainer from '../src/scripts/components/unacademicContainer.jsx';

describe("UnacademicContainer", () => {
  let container;

  beforeEach(() => {
    container = React.renderToStaticMarkup(
      <UnacademicContainer />
    );
  })

  describe("Main Layout", () => {

    it("renders the container", () => {
      expect(container).to.match(/class="app"/);
    });

    it("renders the sidebar", () => {
      expect(container).to.match(/class="sidebar"/);
    });

    it("renders the main area", () => {
      expect(container).to.match(/class="sidebar"/);
    });

  });
});
