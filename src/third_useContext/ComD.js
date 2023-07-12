import React, { useContext } from 'react'
import { FirstName, LastName } from './ComA'
const ComD = () => {
  const fName = useContext(FirstName);
  const lName = useContext(LastName);
  return (
    <h1>I AM USECONTEXT {fName} {lName}</h1>
  )
}

export default ComD