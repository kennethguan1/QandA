import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_COMMENT_ERRORS = 'REMOVE_COMMENT_ERRORS';
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
// export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
// export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const removeCommentErrors = () => ({
    type: REMOVE_COMMENT_ERRORS,
})

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment,
});

// export const receiveComments = (comments) => ({
//   type: RECEIVE_COMMENTS,
//   comments,
// });

// export const removeComment = (commentId) => ({
//   type: REMOVE_COMMENT,
//   commentId,
// });

// export const fetchComments = (comments) => (dispatch) =>
//   APIUtil.fetchComments(comments).then(
//     (comments) => dispatch(receiveComments(comments)),
//     (err) => dispatch(receiveCommentErrors(err.responseJSON))
//   );

export const fetchComment = (id) => (dispatch) =>
  APIUtil.fetchComment(id).then(
    (comment) => dispatch(receiveComment(comment)),
    (err) => dispatch(receiveCommentErrors(err.responseJSON))
)

export const createComment = (comment) => (dispatch) => (
    APIUtil.createComment(comment)
        .then(() => { }, (err) => (
            dispatch(receiveCommentErrors(err.responseJSON))
        ))
)

export const updateComment = comment => dispatch => (
    APIUtil.updateComment(comment)
        .then(() => { }, (err) => (
            dispatch(receiveCommentErrors(err.responseJSON))
        ))
)

export const deleteComment = comment => dispatch => (
    APIUtil.deleteComment(comment)
        .then(() => { }, (err) => (
            dispatch(receiveCommentErrors(err.responseJSON))
        ))
)