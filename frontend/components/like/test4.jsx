import React from "react";
import { withRouter } from 'react-router-dom';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isLiked: false,
      }
      // console.log(this.props)
      // console.log(this.state.likers.includes(85))
      // console.log(this.state)
      this.props.getLikes()
      this.handleLike = this.handleLike.bind(this)
      this.handleUnlike = this.handleUnlike.bind(this)
    }

  handleLike(commentId, UserId){
      console.log('before liking',this.state.isLiked)
      this.props.likePost(commentId, UserId).then(() =>{
        // console.log('hitting here Like')
        this.setState({isLiked: true});
        // window.location.reload();
        console.log('after liking', this.state.isLiked)
      })
      
    }
    
  handleUnlike(commentId){
      console.log('before Unliking',this.state.isLiked)
      this.props.unlikePost(commentId).then(() =>{
        // console.log('hitting here Unlike')
        this.setState({isLiked: false});
        // window.location.reload();
        console.log('after Unliking',this.state.isLiked)
      })
    }

  render() {
          // console.log(this.props.likes)
          // console.log(Object.values(this.props.likes))
          // console.log(this.props.comment)
    let result = []
    Object.values(this.props.likes).forEach( like => {
      if (like.comment_id === this.props.comment.id){
          result.push(like.author_id)
      }})
    console.log(result)
    return (
    <div>
      {
      !result.includes(this.props.currentUser.id) ?
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