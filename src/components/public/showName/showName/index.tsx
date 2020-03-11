import { connect } from 'react-redux'
import ShowNameUi from './ui'

import { UserModel } from '@/models/user'

const mapStateToProps = (state: { userReducer: UserModel }): UserModel => {
  return state.userReducer
}

export default connect(mapStateToProps)(ShowNameUi)
