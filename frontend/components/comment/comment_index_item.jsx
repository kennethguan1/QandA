// import React from 'react';
// import { withRouter } from 'react-router-dom';

// class CommentIndexItem extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         const comment = this.props.comment;
//         return (
//           <div className="question-header">
//             <p>
//                 <strong className="question-by">Question by </strong> <strong className="question-username">{comment.author.username}  </strong>
//                 <img className="profile-icon" src={window.defaultImage}/>
//             </p>
//             <button
//               className="question-button"
//               onClick={() => {
//                 this.props.history.push(`/questions/${question.id}`);
//               }}
//             >
//               <h3>{comment.body}</h3>
//             </button>
//             {/* <p>{question.body}</p> */}
//           </div>
//         );
//     }
// }


// export default withRouter(CommentIndexItem);
