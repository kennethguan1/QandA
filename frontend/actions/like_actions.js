import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const RECEIVE_LIKES = "RECEIVE_LIKES";
// export const RECEIVE_LIKE_ERRORS = "RECEIVE_LIKE_ERRORS";


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

// export const receiveLikeErrors = (errors) => ({
//   type: RECEIVE_LIKE_ERRORS,
//   errors,
// });

export const receiveLikes = (likes) => ({
  type: RECEIVE_LIKES,
  likes,
});

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

export const fetchLikes = () => (dispatch) =>
  LikeApiUtil.fetchLikes().then(
    (likes) => dispatch(receiveLikes(likes))
  );

//   export const fetchLike = (id) => (dispatch) =>
//   LikeApiUtil.fetchLike(id).then(
//     (like) => dispatch(receiveLike(like)),
//     (err) => dispatch(receiveLikeErrors(err.responseJSON))
//   );