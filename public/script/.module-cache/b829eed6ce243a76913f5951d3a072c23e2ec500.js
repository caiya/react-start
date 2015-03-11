var CommentList = React.createClass({displayName: "CommentList",
	render: function(){
		return(
			React.createElement("div", {className: "commentList"}, 
				React.createElement(Comment, {author: "Joy"}, "It is so Joyful~"), 
				React.createElement(Comment, {author: "Fun"}, "It is so Fun!")
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

var CommentBox = React.createClass({displayName: "CommentBox",
	render: function(){
		return(
			React.createElement("div", {className: "commentBox"}, 
				React.createElement("h2", null, "Comments"), 
				React.createElement(CommentForm, null), 
				React.createElement(CommentList, null)
			)
		);
	}
});

React.render(
	React.createElement(CommentBox, null),
	document.getElementById('content')
);