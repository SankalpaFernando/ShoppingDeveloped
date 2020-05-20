import React,{createContext,useState} from 'react'


//Exports the Context
export const TotalContext=createContext();

function TotalContextProvider(props) {
    //Make a State for Total
    const [total,setTotal] = useState(0);

    return (
        //Sends the State objects to the Provider
       <TotalContext.Provider value={{total,setTotal}}>
            {props.children}
       </TotalContext.Provider>
    )
}

//Exports the Provider
export default TotalContextProvider
