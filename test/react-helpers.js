import './bind-polyfill.js';
require('es6-promise').polyfill();
import React from 'react/addons';
let TestUtils = React.addons.TestUtils;


export { React, TestUtils };
