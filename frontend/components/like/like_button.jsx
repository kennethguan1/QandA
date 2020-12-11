import React from "react";
import { withRouter } from 'react-router-dom';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        isLiked: false
      }
        this.props.getLikes().then(() => {
        let allLikes = []
    Object.values(this.props.likes).forEach( like => {
      if (like.comment_id === this.props.comment.id){
          allLikes.push(like.author_id)
      }})
        
      if (allLikes.includes(this.props.currentUser.id)){
      this.setState({isLiked: true})
      }

});
      this.handleLike = this.handleLike.bind(this)
      this.handleUnlike = this.handleUnlike.bind(this)
    }


  handleLike(commentId, UserId){
      this.props.likePost(commentId, UserId).then(() =>{
                      let allLikes = []
    Object.values(this.props.likes).forEach( like => {
      if (like.comment_id === this.props.comment.id){
          allLikes.push(like.author_id)
      }})
                this.setState({isLiked: true});
      })
      
    }
    
  handleUnlike(commentId){
      this.props.unlikePost(commentId).then(() =>{
            let allLikes = []

            Object.values(this.props.likes).forEach( like => {
      if (like.comment_id === this.props.comment.id){
          allLikes.push(like.author_id)
      }})
                this.setState({isLiked: false});

      })
    }

  render() {
    
    let allLikes = []
    Object.values(this.props.likes).forEach( like => {
      if (like.comment_id === this.props.comment.id){
          allLikes.push(like.author_id)
      }})


    return (
    <div>
      {
      !this.state.isLiked ?
            (<button className="like-btn" onClick={() => this.handleLike(this.props.comment.id, this.props.currentUser.id)}>
                <i className="far fa-heart"> Upvote</i>
            </button>)
            :
            (<button className="like-btn" onClick={() => this.handleUnlike(this.props.comment.id)}>
                <i className="fas fa-heart"> Downvote</i>
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