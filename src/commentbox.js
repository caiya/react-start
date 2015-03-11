var CommentBox = React.createClass({
	render: function(){
		return(
			<div className="commentBox">
				This is a comment box.
			</div>
		);
	}
});

React.render(
	<CommentBox />,
	document.getElementById('content')
);