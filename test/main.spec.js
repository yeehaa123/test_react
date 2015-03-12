import { React, modelFixture } from './helpers/react-helpers';
import Main from '../src/scripts/components/main.jsx';

describe("Main", () => {
  let component;

  beforeEach(() => {
    component = React.renderToString(
      <Main model={ modelFixture }/>
    );
  })

  it("renders the cards area", () => {
    expect(component).to.match(/class="cards"/);
  });

  it("renders the timeline area", () => {
    expect(component).to.match(/class="timeline"/);
  });
});
