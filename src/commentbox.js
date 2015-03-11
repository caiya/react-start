var data = [
  {
    author: "Joy",
    text: "It was so joyful~"
  },
  {
    author: "Fun",
    text: "It was so fun!"
  }
];

var CommentBox = React.createClass({
  render: function(){
    return(
      <div className="commentBox">
        <h2>Comments</h2>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    var commentNodes = this.props.data.map(function(comment){
      return(
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return(
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var converter = new Showdown.converter();
var Comment = React.createClass({
  render: function(){
    var rawMarkUp = converter.makeHtml(this.props.children.toString())
    return(
      <div className="comment">
        <h3 className="commentAuthor">
          {this.props.author}
        </h3>
        <span dangerouslySetInnerHTML={{__html: rawMarkUp}} />
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

React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
