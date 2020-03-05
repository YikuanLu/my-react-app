import React from 'react'

import { Button } from 'antd'

export interface Props {
  myName: string;
  age?: number;
}

const ShowName: React.FC<Props> = ({ myName, age = 3 }: Props) => {
  return (
    <div className="showName">
      <div>名字：{myName}</div>
      <div>岁数：{age}</div>
      <Button type="primary">Button</Button>
    </div>
  )
}

export default ShowName
