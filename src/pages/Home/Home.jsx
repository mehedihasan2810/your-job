import React from 'react'
import { useGlobalContext } from '../../contexts/context'

const Home = () => {
  const data = useGlobalContext();
  console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home