jest.dontMock('../src/components/card.js');

describe('CheckboxWithLabel', function() {
  var React;
  var card;

  beforeEach(() => {
    React = require('react/addons');
    var Card = require('../src/components/card.js');
    var TestUtils = React.addons.TestUtils;

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
    expect(title).toEqual('Structure Documents');
  });
});
