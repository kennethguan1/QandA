import React from "react";
import { withRouter } from 'react-router-dom';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        likers: [],
      }
      // console.log(this.props)
      // console.log(this.state.likers.includes(85))
      console.log(this.state)
      this.handleLike = this.handleLike.bind(this)
      this.handleUnlike = this.handleUnlike.bind(this)
    }

  handleLike(commentId, UserId){
      console.log('before liking',this.state.likers)
      this.props.likePost(commentId, UserId).then(() =>{
        // console.log('hitting here Like')
        this.setState({likers: this.state.likers.concat([this.props.currentUser.id])});
        // window.location.reload();
        console.log('after liking', this.state.likers)
      })
      
    }
    
  handleUnlike(commentId){
      console.log('before Unliking',this.state.likers)
      this.props.unlikePost(commentId).then(() =>{
        // console.log('hitting here Unlike')
          var index = this.state.likers.indexOf(this.props.currentUser.id);
          var newState = this.state.likers;
          var arr = newState.splice(index, 1);
          this.setState({likers: newState})
        // window.location.reload();
        console.log('after liking', this.state.likers)
      })
    }

  render() {
    return (
    <div>
      {
      !this.state.likers.includes(this.props.currentUser.id) ?
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