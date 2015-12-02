var React   = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./commentbox');
ReactDOM.render(
	<CommentBox url="/data.json" />,
  	document.getElementById('content')
);