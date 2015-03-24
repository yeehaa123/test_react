import { React, TestUtils, fixtures, testdom } from './helpers/react-helpers';
import Cards from '../src/scripts/components/cards.jsx';

describe("Cards", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');

    let { model } = fixtures;

    let container = TestUtils.renderIntoDocument(
      <Cards collection={ model.collection } />
    );

    element = React.findDOMNode(container);
  })

  it("renders the cards", () => {
    let cards = element.querySelectorAll('.card');
    expect(cards.length).to.equal(5);
  });
});
