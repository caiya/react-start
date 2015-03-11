var Comment = React.createClass({
	render: function(){
		return(
			<div className="comment">
				<h3 className="commentAuthor">
					{this.props.author}
				</h3>
				{this.props.children}
			</div>
		);
	}
});

var CommentList = React.createClass({
  render: function(){
    return(
      <div className="commentList">
        <Comment author="Joy">It is so Joyful~</Comment>
        <Comment author="Fun">It is so Fun!</Comment>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return(
      <div className="commentForm">
        This is a comment form.
      </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function(){
    return(
      <div className="commentBox">
        <h2>Comments</h2>
        <CommentForm />
        <CommentList />
      </div>
    );
  }
});


React.render(
	<CommentBox />,
	document.getElementById('content')
);