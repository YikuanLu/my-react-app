import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import ShowNameUi from './ui'

import { UserModel } from '@/models/user'
import { setUserInfor, resetUserInfor } from '@/store/actions/user'

export interface MapDispatchToProps {
  setUserInfor: (userInfor: UserModel) => void;
  resetUserInfor: () => void;
}

const mapStateToProps = (state: { userReducer: UserModel }): UserModel => state.userReducer

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({
  setUserInfor(userInfor: UserModel): void {
    dispatch(setUserInfor(userInfor))
  },
  resetUserInfor: (): void => {
    dispatch(resetUserInfor())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowNameUi)
