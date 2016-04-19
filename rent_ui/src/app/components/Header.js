/**
 * @author chinmaykhasnis
 */
var React = require('react');
var ReactDom = require('react-dom');
var Bootstrap = require('react-bootstrap');
import {Button, ButtonToolbar} from 'react-bootstrap';

var Header = React.createClass({
  render: function() {
	  var renterStyle = {marginTop: '9px'};
    return(      
    		<nav className="navbar navbar-default">
    		  <div className="container-fluid">    		    
    		    <div className="navbar-header">    		      
    		      <a className="navbar-brand" href="#">Brand</a>
    		    </div>    		    
    		    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">    		         		      
    		      <ul className="nav navbar-nav navbar-right">
    		      	<li><Button style={renterStyle} className="btn-warning outline" bsSize="small">Become a Renter</Button></li>    		      	
    		        <li><a href="#">Help</a></li>
    		        <li><a href="#">Sign Up</a></li>
    		        <li><a href="#">Log In</a></li>
    		      </ul>
    		    </div>
    		  </div>
    		</nav>
    );
  }
});

module.exports = Header
