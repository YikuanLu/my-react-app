import React from 'react'
import { Button } from 'antd'
import logo from '@/assets/img/logo-sm.png'

export interface Props {
  userName: string;
  age?: number;
}

const ShowNameUi: React.FC<Props> = ({ userName, age }: Props) => {
  return (
    <div className="showName">
      <img style={{ width: '30px' }} src={logo} alt="" />
      <div>名字：{userName}</div>
      <div>岁数：{age}</div>
      <Button type="primary">Button</Button>
    </div>
  )
}

export default ShowNameUi
