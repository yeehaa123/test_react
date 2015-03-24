import { React, TestUtils, fixtures, testdom } from './helpers/react-helpers';
import Main from '../src/scripts/components/main.jsx';

describe("Main", () => {
  let element;

  beforeEach(() => {
    testdom('<html><body></body></html>');

    let { model } = fixtures;
    let container = TestUtils.renderIntoDocument(
      <Main model={ model } />
    );

    element = React.findDOMNode(container);
  })

  it("renders the cards area", () => {
    let cards = element.querySelectorAll('.cards');
    expect(cards.length).to.equal(1);
  });

  it("renders the timeline area", () => {
    let timeline = element.querySelectorAll('.timeline');
    expect(timeline.length).to.equal(1);
  });
});
