/**
 * @author chinmaykhasnis
 */
var React = require('react');
var ReactDom = require('react-dom');
var Bootstrap = require('react-bootstrap');
import {Button} from 'react-bootstrap';

var Landing = React.createClass({
  render: function() {
    return(      
        <div className="container">
		      <div className="rentotron">
		        <h1>Hi, There!</h1>
		        <p> What would you like to rent today ?</p>
		        <p><a className="btn btn-default outline" href="#" role="button">HOW IT WORKS</a></p>
		      </div>
        </div>
    );
  }
});

module.exports = Landing