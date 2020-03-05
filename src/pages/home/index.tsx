import React from 'react'
import ShowName from '@/components/public/showName'
export interface Props {
  myName: string;
  age?: number;
}

const Home: React.FC = () => {
  return (
    <div className="home">
      <ShowName myName="Bob" />
    </div>
  )
}

export default Home
