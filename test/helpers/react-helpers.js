if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }

    var aArgs   = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP    = function() {},
        fBound  = function() {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    // test this.prototype in case of native functions binding:
    if (this.prototype)
      fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
};

import rewireModule from './rewireModule.js';
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;
class StubComponent extends React.Component {
 render() { return (<div />); }
};

StubComponent.prototype.render = sinon.stub().returns(<div />);

export { React, TestUtils, rewireModule, StubComponent };
