import React from 'react'

export interface Props {
  myName: string;
  age?: number;
}

const Home: React.FC<Props> = ({ myName, age = 3 }: Props) => {
  return (
    <div className="home">
      <div>名字：{myName}</div>
      <div>岁数：{age}</div>
    </div>
  )
}

export default Home
