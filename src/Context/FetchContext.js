import React,{useState,createContext} from 'react'
import {setData,getData,filter,data as Data} from '../utils/LocalStore';


export const FetchContext = createContext();

function FetchContextProvider(props) {
    
    const [data,setData]=useState(Data)
    

    return (
       <FetchContext.Provider value={{data,setData}}> >
           {props.children}
       </FetchContext.Provider>
    )
}

export default FetchContextProvider
