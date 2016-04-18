var React = require('react');
var ReactDom = require('react-dom');
var Bootstrap = require('react-bootstrap');
var Landing = require('./components/Landing');
var Header = require('./components/Header');

var App = React.createClass({
  render: function() {
    return(      
        <div>
        	<Header />
        	<Landing />
        </div>
    );
  }
});
ReactDom.render(<App/>, document.getElementById('app'));
