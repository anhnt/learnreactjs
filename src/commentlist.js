var React = require('react');
var Comment = require('./comment');
module.exports = React.createClass({
	displayName: 'CommentList',
	render: function() {
		var commentNodes = this.props.data.map(function(comment) {
	      return (
	        <Comment author={comment.author} key={comment.id}>
	          {comment.text}
	        </Comment>
	      );
	    });
		return (
		  	<div className="commentList">
		        {commentNodes}
	      	</div>
		);
	}
});