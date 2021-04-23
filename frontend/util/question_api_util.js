export const fetchQuestions = () => 
  $.ajax({
    url: "/api/questions",
    method: "GET",
  });

export const fetchQuestion = questionId => {
  // debugger;
  return $.ajax({
    url: `api/questions/${questionId.id}`,
    method: "GET",
  });
}

export const createQuestion = question =>
  $.ajax({
    url: "/api/questions",
    method: "POST",
    data: {
      question,                                     //data passed in for POST call question: question
    },                                              //implicit return of success, failure
  });

export const updateQuestion = question =>
  $.ajax({
    url: `/api/questions/${question.id}`,
    method: "PATCH",
    data: {
      question,
    },
  });

export const deleteQuestion = question =>
  $.ajax({
    url: `/api/questions/${question.id}`,
    method: "DELETE",
  });