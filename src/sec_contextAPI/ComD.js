import React from 'react'
import { FirstName, LastName } from './ComA'
const ComD = () => {
  return (
    <FirstName.Consumer>
    {(fname)=>{
      return(
        <LastName.Consumer>
          {(lname)=>{
            return <h1>Hello my name is {fname} {lname}</h1>
          }}
        </LastName.Consumer>
      )
    }}
    </FirstName.Consumer>
  )
}

export default ComD