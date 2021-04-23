export const createReply = reply =>
  $.ajax({
    url: `/api/replies`,
    method: "POST",
    data: {
      reply,
    },
  });

export const updateReply = reply =>
  $.ajax({
    url: `/api/replies/${reply.id}`,
    method: "PATCH",
    data: {
      reply,
    },
  });

export const deleteReply = reply =>
  $.ajax({
    url: `/api/replies/${reply.id}`,
    method: "DELETE",
  });
