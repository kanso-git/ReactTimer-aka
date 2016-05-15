var React = require('react');
var ReactDOM = require('react-dom');

// ES6 object destruction syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


// load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');


ReactDOM.render(
  <Router  history={hashHistory}>
    <Route path="/" components={Main}>
    
    </Route>
  </Router>,
  document.getElementById('app')
);
