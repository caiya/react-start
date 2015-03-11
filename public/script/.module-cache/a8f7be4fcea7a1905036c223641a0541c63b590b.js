var CommentBox = React.createClass({displayName: "CommentBox",
	render: function(){
		return(
			React.createElement("div", {className: "commentBox"}, 
				"This is a comment box."
			)
		);
	}
});

React.render(
	React.createElement(CommentBox, null),
	document.getElementById('content')
);