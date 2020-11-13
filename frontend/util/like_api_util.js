export const likePost = (commentId, userId) => {
    return $.ajax({
        method: "POST",
        url: "/api/likes",
        data: { commentId, userId }
    })
}

export const unlikePost = (commentId) => {
    return $.ajax({
        method: "DELETE",
        url: `api/comments/${commentId}/like`
    })
}