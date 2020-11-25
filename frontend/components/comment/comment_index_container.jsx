// import { connect } from 'react-redux';
// import CommentIndex from './comment_index';

// import { fetchComments, deleteComment } from "../../actions/comment_actions";
// import { fetchQuestion } from '../../actions/question_actions';
// import { likePost, unlikePost } from '../../actions/like_actions';


// const mapStateToProps = (state) => ({
//   // commentId: parseInt(match.params.commentId),
//   currentUser: state.session.currentUser,
//   comments: state.entities.comments,
//   // questionId: parseInt(match.params.id),
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
//   fetchComments: () => dispatch(fetchComments()),
//   fetchComment: (commentId) => dispatch(fetchComment(commentId)),
//   deleteComment: (commentId) => dispatch(deleteComment(commentId)),
//   likePost: (commentId, userId) => dispatch(likePost(commentId, userId)),
//   unlikePost: (commentId) => dispatch(unlikePost(commentId)),
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(CommentIndex);
