# [**QandA**](http://qanda9.herokuapp.com/)

 ## Background

 QandA is a fullstack web application inspired by Quora with a Ruby on Rails backend and React frontend that allows users to ask questions, answer questions, and comment on answers.

 ## Features

  ### User Authentication
  Users are able to sign up and login. Front end error messages are displayed for improper login credentials. Users are also able to login using a demo account for quick demo use   of the application. Access to pages other than the splash page are restricted if users are not logged in. In addition, the splash page changes depending on user login status.

  ### Dynamic User Options
  Questions, comments, and responses provided by the logged in user are given options to edit and delete. These options for every other posts by other users are hidden.
  
  ### Question Search
  Users are able to search the entire database for questions pertaining to their interests. There is also a dropdown on the search bar for suggested questions.

 ## Technologies Used

* PostgresSQL: Used for the database and model associations.
* Ruby on Rails: Used for application backend structuring.
* React/Redux: Used for application frontend including state management.
* HTML/CSS: For front end styling and visualization.
* Heroku: Heroku is used for online hosting of the live application.

## Future Implementations

* Topic feature that allowing users to tag a question to a topic and links that shows questions tagged with a specific topic.
* Improve styling and certain features to streamline ask, comment, and reply.
