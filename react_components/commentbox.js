var React = require('react');
var CommentList = require('./commentlist');
var CommentForm = require('./commentform');
module.exports = React.createClass({
	displayName: 'CommentBox',
  	render: function() {
	    return (
	      	<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.props.data} />
				<CommentForm />
	      	</div>
	    );
  }
});