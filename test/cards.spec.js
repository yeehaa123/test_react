import { React, TestUtils, modelFixture } from './helpers/react-helpers';
import Cards from '../src/scripts/components/cards.jsx';

describe("Cards", () => {
  let component;

  beforeEach(() => {
    component = React.renderToString(
      <Cards collection={ modelFixture.collection }/>
    );
  })

  it("renders the cards", () => {
    expect(component).to.have.entriesCount('class="card"', 5);
  });
});
