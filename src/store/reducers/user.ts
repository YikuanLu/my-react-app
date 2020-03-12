import { UserModel } from '@/models/user'
import { UserAction } from '@/store/types/user'
import { SET_USER_INFOR, RESET_USER_INFOR } from '@/store/types/user'

const initInfor: UserModel = {
  token: 'token',
  userName: '用户名',
  avatar: '头像',
  Authority: [],
}

const userReducer = (state: UserModel = initInfor, action: UserAction): UserModel => {
  if (action.type === RESET_USER_INFOR) {
    return {
      ...initInfor,
    }
  }
  if (action.type === SET_USER_INFOR && action.userInfor) {
    const userInfor: UserModel = action.userInfor
    return {
      ...userInfor,
    }
  }
  return state
}

export default userReducer
