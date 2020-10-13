// import * as CommentAPIUtil from '../utils/comment_utils';

// export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
// export const REMOVE_COMMENT_ERRORS = 'REMOVE_COMMENT_ERRORS';

// export const receiveCommentErrors = errors => ({
//     type: RECEIVE_COMMENT_ERRORS,
//     errors
// });

// export const removeCommentErrors = () => ({
//     type: REMOVE_COMMENT_ERRORS,
// })

// export const createComment = (comment) => (dispatch) => (
//     CommentAPIUtil.createComment(comment)
//         .then(() => { }, (err) => (
//             dispatch(receiveCommentErrors(err.responseJSON))
//         ))
// )

// export const updateComment = comment => dispatch => (
//     CommentAPIUtil.updateComment(comment)
//         .then(() => { }, (err) => (
//             dispatch(receiveCommentErrors(err.responseJSON))
//         ))
// )

// export const deleteComment = comment => dispatch => (
//     CommentAPIUtil.deleteComment(comment)
//         .then(() => { }, (err) => (
//             dispatch(receiveCommentErrors(err.responseJSON))
//         ))
// )