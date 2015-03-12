import Unacademic from '../src/scripts/components/unacademic.jsx';
import { React, TestUtils, modelFixture } from './helpers/react-helpers';

describe("Layout", () => {
  let container;

  beforeEach(() => {

    let model = modelFixture;
    let appState = {
      history: {},
      user: undefined,
      mode: 'browse'
    }

    container = React.renderToString(
      <Unacademic model={ model } appState={ appState } />
      );
  })


  it("renders the container", () => {
    expect(container).to.match(/class="app"/);
  });

  it("renders the sidebar", () => {
    expect(container).to.match(/class="sidebar"/);
  });

  it("renders the main area", () => {
    expect(container).to.match(/class="main"/);
  });

});
