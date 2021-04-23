export const fetchLikes = () =>
  $.ajax({
    url: "/api/likes",
    method: "GET",
  });

export const likePost = (commentId, userId) => 
  $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { commentId, userId }
  })


export const unlikePost = commentId =>
  $.ajax({
      method: "DELETE",
      url: `api/comments/${commentId}/like`
  })

//   export const fetchLike = (like) =>
//   $.ajax({
//     url: `api/likes/${like.id}`,
//     method: "GET",
//   });