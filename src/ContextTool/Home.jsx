import React, { useContext } from 'react'
import { BioContext } from './Context'
export const Home =() =>{
  let {myname , age} =  useContext(BioContext)
  return  <h1>Hello {age} </h1>
  
}

