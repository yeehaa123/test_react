import chai from 'chai';
import R from 'ramda';
import chaiString from 'chai-string';
import React from 'react/addons';

chai.use(chaiString);
let expect = chai.expect;

class Item {
  constructor(id){
    this.id = id;
    this.description = ['ho'];
    this.checkpoints = ['hi'];
  }
}

let createItem = (id) => new Item(id);
let range = R.times(R.identity, 5);
let collection = R.map(createItem, range);
let modelFixture = { collection };

let user = undefined;
let mode = 'browse';
let history = [];
let appStateFixture = { user, mode, history };

global.expect = expect;

export { React, modelFixture, appStateFixture };
