import Reflux from 'reflux';

let Actions = Reflux.createActions([
  "authenticate",
  "revertHistory",
  "forwardHistory",
  "ready",
  "learn"
]);

export default Actions;
