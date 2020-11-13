import { connect } from 'react-redux';
import QuestionShow from './question_show';

import { deleteQuestion, fetchQuestion } from '../../actions/question_actions';
import { deleteComment } from '../../actions/comment_actions';
import { likePost, unlikePost } from '../../actions/like_actions';

const mapStateToProps = (state, { match }) => ({
  questionId: parseInt(match.params.id),
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
  deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
  deleteComment: (commentId) => dispatch(deleteComment(commentId)),
  likePost: (commentId, userId) => dispatch(likePost(commentId, userId)),
  unlikePost: (commentId) => dispatch(unlikePost(commentId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionShow);