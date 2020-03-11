import React from 'react'
import ShowName from '@/components/public/showName/showName'
export interface Props {
  myName: string;
  age?: number;
}

const Home: React.FC = () => {
  return (
    <div className="home">
      <ShowName age={20} />
    </div>
  )
}

export default Home
