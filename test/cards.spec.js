import rewire from 'rewire';
import { React, TestUtils, rewireModule, StubComponent } from './helpers/react-helpers';
let Cards  = rewire('../src/components/cards.js');

rewireModule(Cards, {
  Card: StubComponent
});

describe("Card", () => {
  let container;

  beforeEach(() => {
    container = TestUtils.renderIntoDocument(
      <Cards />
    );
  })

  it("renders the cards", function() {
    var cards = React.findDOMNode(container).querySelectorAll('div');
    expect(StubComponent.prototype.render).calledOnce;
  });
});
