import React from 'react'
import { Button } from 'antd'
import { UserModel } from '@/models/user'
// import logo from '@/assets/img/logo-sm.png'

export interface Props {
  userName: string;
  age?: number;
  setUserInfor: (userInfor: UserModel) => void;
  resetUserInfor: () => void;
}

const ShowNameUi: React.FC<Props> = (props: Props) => {
  console.log(props)
  return (
    <Button type="primary">
      重置
    </Button>
  )
}
// const { userName, age, setUserInfor, resetUserInfor }: Props = props
// const userData: UserModel = {
//   id: 'token',
//   userName: '小闹钟',
//   avatar: '头像'
// }
// (
// <div className="showName">
//   <img style={{ width: '30px' }} src={logo} alt="" />
//   <div>
//     名字：
//     {userName}
//   </div>
//   <div>
//     岁数：
//     {age}
//   </div>
//   <Button
//     onClick={(): void => {
//       setUserInfor(userData)
//     }}
//     type="primary"
//     style={{ marginRight: '10px' }}
//   >
//     设置
//   </Button>

// <Button onClick={resetUserInfor} type="primary">
//   重置
// </Button>
// </div >
// )


export default ShowNameUi
