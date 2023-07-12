import React, { createContext } from 'react'
import ComB from './ComB'
const FirstName = createContext();
const LastName = createContext();
const ComA = () => {
  return (
    <>

    <FirstName.Provider value={"Shuaib"}>
    <LastName.Provider value={"Kahn"}>
    <ComB/></LastName.Provider>
    </FirstName.Provider>
    </>
  )
}

export default ComA;
export {FirstName, LastName}