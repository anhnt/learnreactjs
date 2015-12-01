var React   = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./commentbox');
var data = [
  	{id: 1, author: "Pete Hunt", text: "This is one comment"},
  	{id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
	<CommentBox data={data} />,
  	document.getElementById('content')
);