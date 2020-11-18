import * as APIUtil from '../util/reply_api_util';

export const RECEIVE_REPLY_ERRORS = 'RECEIVE_REPLY_ERRORS';
export const REMOVE_REPLY_ERRORS = 'REMOVE_REPLY_ERRORS';

export const receiveReplyErrors = errors => ({
    type: RECEIVE_REPLY_ERRORS,
    errors
});

export const removeReplyErrors = () => ({
    type: REMOVE_REPLY_ERRORS,
})

export const createReply = (reply) => (dispatch) => (
    APIUtil.createReply(reply)
        .then(() => { }, (err) => (
            dispatch(receiveReplyErrors(err.responseJSON))
        ))
)

export const updateReply = reply => dispatch => (
    APIUtil.updateReply(reply)
        .then(() => { }, (err) => (
            dispatch(receiveReplyErrors(err.responseJSON))
        ))
)

export const deleteReply = reply => dispatch => (
    APIUtil.deleteReply(reply)
        .then(() => { }, (err) => (
            dispatch(receiveReplyErrors(err.responseJSON))
        ))
)