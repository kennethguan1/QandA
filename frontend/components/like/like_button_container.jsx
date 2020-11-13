// import { connect } from 'react-redux';
// import LikeButton from './like_button';
// import { likePost, unlikePost } from '../../actions/like_actions';
// import { fetchQuestion } from '../../actions/question_actions';


// const mapStateToProps = (state, { match }) => ({
//   currentQuestion: parseInt(match.params.id),
//   currentUser: state.session.currentUser,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
//   likePost: (commentId, userId) => dispatch(likePost(commentId, userId)),
//   unlikePost: (commentId) => dispatch(unlikePost(commentId)),
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(LikeButton);