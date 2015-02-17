import { React, TestUtils } from './react-helpers';
import Card from '../src/components/card.js';

describe('Card', () => {
  let card;
  beforeEach(() => {

    var waypoint = {
      title: "Structure Documents",
      curator: "Yeehaa",
      description: "test description",
      checkpoints: []
    }

    card = TestUtils.renderIntoDocument(
      <Card model={waypoint} />
    );
  })

  it('has the right title', function() {
    var title = React.findDOMNode(card).querySelector('hgroup h1').textContent;
    expect(title).to.equal('Structure Documents');
  });
});
