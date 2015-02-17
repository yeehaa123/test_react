import rewire from 'rewire';
import { React, TestUtils, rewireModule, StubComponent } from './react-helpers';
let Cards  = rewire('../src/components/cards.js');

describe('Card', () => {
  let container;

  rewireModule(Cards, {
    Card: StubComponent
  });

  beforeEach(() => {
    container = TestUtils.renderIntoDocument(
      <Cards />
    );
  })

  it('has the right title', function() {
    var cards = React.findDOMNode(container).querySelectorAll('div');
    expect(cards.length).to.equal(2);
  });
});
