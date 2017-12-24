
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var ToDoApp = require('ToDoApp');


//load foundations
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App CSS
require('style!css!sass!applicationStyles')


ReactDOM.render(
  <ToDoApp/>,
  document.getElementById('app')
);
