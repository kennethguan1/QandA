import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_COMMENT_ERRORS = 'REMOVE_COMMENT_ERRORS';

export const receiveCommentErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const removeCommentErrors = () => ({
    type: REMOVE_COMMENT_ERRORS,
})

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