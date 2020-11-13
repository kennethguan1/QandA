import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = (like) => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = (like) => {
    return {
        type: REMOVE_LIKE,
        like
    }
}

export const likePost = (commentId, userId) => (dispatch) => {
    return LikeApiUtil.likePost(commentId, userId).then((like) => {
        return dispatch(receiveLike(like));
    })
}

export const unlikePost = (commentId) => (dispatch) => {
    return LikeApiUtil.unlikePost(commentId).then((like) => {
        return dispatch(removeLike(like));
    })
}