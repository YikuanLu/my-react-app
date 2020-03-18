import React from 'react'
// import ShowName from '@/components/public/showName'

export interface Props {
  myName: string;
  age?: number;
}

const Home: React.FC = () => (
  <div className="home">
    {/* <ShowName age={20} /> */}
  </div>
)

export default Home
