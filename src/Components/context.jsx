import { createContext,useState } from 'react';

export  const PopUpContext = createContext();
export const PopUpProvider=({children})=>{
    const [isOpen,setIsOpen]= useState(false)
  const [elements, setElements] = useState()

    const val={isOpen,setIsOpen,elements,setElements}
    return(
        <PopUpContext.Provider value={val}>
        {children}
        </PopUpContext.Provider> 
    )
}
export default PopUpContext;


