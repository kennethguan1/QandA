import { connect } from 'react-redux'
import Search from './search'
import {fetchQuestions} from '../../actions/question_actions'
import {withRouter} from 'react-router-dom'


const mSTP = (state) => ({
    questions: Object.values(state.entities.questions)
})

const mDTP = (dispatch) => ({
    getQuestions: () => dispatch(fetchQuestions()) 
})

export default withRouter(connect(mSTP, mDTP)(Search))