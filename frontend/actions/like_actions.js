import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";

export const receiveLike = (like) => ({
    type: RECEIVE_LIKE,
    like
});

export const removeLike = (like) => ({
    type: REMOVE_LIKE,
    like
});

export const receiveLikes = (likes) => ({
  type: RECEIVE_LIKES,
  likes,
});

export const likePost = (commentId, userId) => (dispatch) => 
    LikeApiUtil.likePost(commentId, userId).then(
        (like) => dispatch(receiveLike(like))
    );

export const unlikePost = (commentId) => (dispatch) =>
    LikeApiUtil.unlikePost(commentId).then(
        (like) => dispatch(removeLike(like))
    );

export const fetchLikes = () => (dispatch) =>
  LikeApiUtil.fetchLikes().then(
    (likes) => dispatch(receiveLikes(likes))
  );