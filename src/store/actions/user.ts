import { SET_USER_INFOR, RESET_USER_INFOR } from '@/store/types/user'

export const setUserInfor = (): { type: SET_USER_INFOR } => {
  return {
    type: SET_USER_INFOR,
  }
}

export const resetUserInfor = (): { type: RESET_USER_INFOR } => {
  return {
    type: RESET_USER_INFOR,
  }
}
