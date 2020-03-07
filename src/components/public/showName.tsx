import React from 'react'

import { Button } from 'antd'
import logo from '@/assets/img/logo-sm.png'

export interface Props {
  myName: string;
  age?: number;
}

const ShowName: React.FC<Props> = ({ myName, age = 3 }: Props) => {
  return (
    <div className="showName">
      <img style={{ width: '30px' }} src={logo} alt="" />
      <div>名字：{myName}</div>
      <div>岁数：{age}</div>
      <Button type="primary">Button</Button>
    </div>
  )
}

export default ShowName
