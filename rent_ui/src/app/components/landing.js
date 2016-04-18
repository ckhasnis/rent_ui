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
		      <div className="jumbotron">
		        <h1>Hello, Punam!</h1>
		        <span className="glyphicon glyphicon-heart" /><p> Will you be my business partner ?</p>
		        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
		      </div>
        </div>
    );
  }
});

module.exports = Landing