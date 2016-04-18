/**
 * @author chinmaykhasnis
 */
var React = require('react');
var ReactDom = require('react-dom');
var Bootstrap = require('react-bootstrap');
import {Button, ButtonToolbar} from 'react-bootstrap';

var Header = React.createClass({
  render: function() {
    return(      
    		<nav className="navbar navbar-default">
    		  <div className="container-fluid">
    		    <div className="navbar-header">
    		      <a className="navbar-brand" href="#">    		      
    		        <div className="container">
    		        	<span className="glyphicon glyphicon-home" />
    		        </div>
    		      </a>
    		    </div>
    		  </div>
    		</nav>
    );
  }
});

module.exports = Header
