import React, { createContext, useState } from 'react'

export const MainContext = createContext();
function MainContextProvider(props) {

    const service = "tools"
    // const [change, setChange] = useState(false);
    // const handleChange = () => {
     
    // }
  return (
    <MainContext.Provider value={{service}}>
        {props.children}
    </MainContext.Provider>
  )
}

export default MainContextProvider