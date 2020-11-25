// import React from 'react';
// import CommentIndexItem from './comment_index_item';

// class CommentIndex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.props.fetchComments().then((c) => {
//       this.state = c;
//     });
//   }

//   handleDelete(comment) {
//     this.props.deleteComment(comment).then(() => {
//       this.setState(this.props.fetchComments());
//     });
//   }

//   handleEdit(comment) {
//     this.props.history.push(`/questions/${question.id}/edit`);
//   }

//   crudOptions(comment) {
//     if (comment.author_id == this.props.currentUser.id) {
//       return (
//         <div className="crud-buttons">
//           <button
//             className="edit-crud-button"
//             onClick={() => this.handleEdit(comment)}
//           >
//             Edit
//           </button>
//           <button
//             className="del-crud-button"
//             onClick={() => this.handleDelete(comment)}
//           >
//             Delete
//           </button>
//         </div>
//       );
//     }
//   }

//   render() {
//     console.log(this.props);
//     console.log(this.state)
//     const comments = Object.values(this.props.comments);
//     return (
//       <div className="feed">
//         {comments.reverse().map((comment, i) => (
//           <li key={i} className="question-list-item">
//             {this.crudOptions(comment)}
//             <CommentIndexItem comment={comment} key={comment.id} />
//             <br />
//           </li>
//         ))}
//       </div>
//     );
//   }
// }

// export default CommentIndex;