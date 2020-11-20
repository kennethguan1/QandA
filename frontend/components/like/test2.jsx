import React from "react";
import { withRouter } from 'react-router-dom';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        likes: 0
      }
      this.handleLike = this.handleLike.bind(this)
      this.handleUnlike = this.handleUnlike.bind(this)
// ​      console.log(this.props);
    }

  handleLike(commentId, UserId){
      // console.log('before liking',this.state.likes)
      this.props.likePost(commentId, UserId).then(() =>{
        // console.log('hitting here Like')
        this.setState({likes: this.state.likes + 1});
        window.location.reload();
        // console.log('after liking', this.state.likes)
      })
      
    }
    
  handleUnlike(commentId){
      // console.log('before Unliking',this.state.likes)
      this.props.unlikePost(commentId).then(() =>{
        // console.log('hitting here Unlike')
        this.setState({likes: this.state.likes - 1});
        window.location.reload();
        // console.log('after Unliking',this.state.likes)
      })
    }

  render() {
    return (
    <div>
      {
      !this.props.comment.likers.includes(this.props.currentUser.id) ?
            (<button className="like-btn" onClick={() => this.handleLike(this.props.comment.id, this.props.currentUser.id)}>
                <i className="fas fa-heart unclicked post-index-like">Like</i>
            </button>)
            :
            (<button onClick={() => this.handleUnlike(this.props.comment.id)}>
                <i className="fas fa-heart clicked post-index-like">Unlike</i>
            </button>)
      }
    </div>
    )
  }







  // render() {

  //   return (
  //   <div>
  //     {
  //     !this.props.comment.likers.includes(this.props.currentUser.id) ?
  //           (<button className="like-btn" onClick={() => this.props.likePost(this.props.comment.id, this.props.currentUser.id)}>
  //               <i className="fas fa-heart unclicked post-index-like">Like</i>
  //           </button>)
  //           :
  //           (<button onClick={() => this.props.unlikePost(this.props.comment.id)}>
  //               <i className="fas fa-heart clicked post-index-like">Unlike</i>
  //           </button>)
  //     }
  //   </div>
  //   )
  // }
}

export default withRouter(LikeButton);

// pass isLiked prop to question_show.jsx