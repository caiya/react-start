var CommentBox = React.createClass({displayName: "CommentBox",
	render: function(){
		return(
			React.createElement("div", {className: "commentBox"}, 
				"This is a comment box."
			)
		);
	}
});

var CommentList = React.createClass({displayName: "CommentList",
	render: function(){
		return(
			React.createElement("div", {className: "commentList"}, 
				React.createElement("h2", null, "Comments"), 
				React.createElement(CommentForm, null), 
				React.createElement(CommentList, null)
			)
		);
	}
});

var CommentForm = React.createClass({displayName: "CommentForm",
	render: function(){
		return(
			React.createElement("div", {className: "commentForm"}, 
				"This is a comment form."
			)
		);
	}
});

React.render(
	React.createElement(CommentBox, null),
	document.getElementById('content')
);