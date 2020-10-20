export const fetchQuestions = (questions) =>
  $.ajax({
    url: "/api/questions",
    method: "GET",
    data: {
      questions,
    },
  });

export const fetchQuestion = (question) =>
  $.ajax({
    url: `api/questions/${question.id}`,
    method: "GET",
  });

export const createQuestion = (question) =>
  $.ajax({
    url: "/api/questions",
    method: "POST",
    data: {
      question,
    },
  });

export const updateQuestion = (question) =>
  $.ajax({
    url: `/api/questions/${question.id}`,
    method: "PATCH",
    data: {
      question,
    },
  });

export const deleteQuestion = (question) =>
  $.ajax({
    url: `/api/questions/${question.id}`,
    method: "DELETE",
  });