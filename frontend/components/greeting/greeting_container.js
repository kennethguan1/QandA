import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mSTP = (state) => ({
  currentUser: state.session.currentUser,
});

const mDTP = (dispatch) => ({
  logoutCurrentUser: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(Greeting);