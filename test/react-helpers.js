import './bind-polyfill.js';
import rewireModule from './rewireModule.js';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;

class StubComponent extends React.Component {
 render() { return (<div />); }
};

StubComponent.prototype.render = sinon.stub().returns(<div />);

export { React, TestUtils, rewireModule, StubComponent };
