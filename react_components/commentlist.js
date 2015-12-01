var React = require('react');
var Comment = require('./comment');
module.exports = React.createClass({
	displayName: 'CommentList',
	render: function() {
		return (
		  	<div className="commentList">
		    	<Comment author="Pete Hunt">This is one comment</Comment>
		    	<Comment author="Jordan Walke">This is *another* comment</Comment>
		  	</div>
		);
	}
});