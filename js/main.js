// tutorial8.js
var data = [
  	{id: 1, author: "Pete Hunt", text: "This is one comment"},
  	{id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

// tutorial2.js
var CommentList = React.createClass({
  render: function() {
    return (
      	<div className="commentList">
        	<Comment author="Pete Hunt">This is one comment</Comment>
        	<Comment author="Jordan Walke">This is *another* comment</Comment>
      	</div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      	<div className="commentForm">
        	Hello, world! I am a CommentForm.
      	</div>
    );
  }
});

// tutorial3.js
var CommentBox = React.createClass({
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

// tutorial4.js
var Comment = React.createClass({
	rawMarkup: function() {
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return { __html: rawMarkup };
	},
	render: function() {
	return (
		<div className="comment">
			<h2 className="commentAuthor">
			  {this.props.author}
			</h2>
			<span dangerouslySetInnerHTML={this.rawMarkup()} />
		</div>
	);
	}
});

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);