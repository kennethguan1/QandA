import React from "react";
import { withRouter } from 'react-router-dom';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //   likers: this.props.comment.likers.length,
        // };
      console.log(this.props);
    }


  render() {

    return (
    <div>
      {
      !this.props.comment.likers.includes(this.props.currentUser.id) ?
            (<button className="like-btn" onClick={() => this.props.likePost(this.props.comment.id, this.props.currentUser.id)}>
                <i className="fas fa-heart unclicked post-index-like">Like</i>
            </button>)
            :
            (<button onClick={() => this.props.unlikePost(this.props.comment.id)}>
                <i className="fas fa-heart clicked post-index-like">Unlike</i>
            </button>)
      }
    </div>
    )
  }
}

export default withRouter(LikeButton);