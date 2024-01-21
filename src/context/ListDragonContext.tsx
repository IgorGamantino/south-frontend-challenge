import { createContext, useState } from "react";


export const ListDragonContext = createContext({} as ListDragonContext)


type DragonListProp = {
  createdAt: Date,
    name: string,
    type: string,
    histories: string,
    id: number
}



type ListDragonContext = {
 listDragon: DragonListProp[]
 setListDragon:React.Dispatch<React.SetStateAction<DragonListProp[]>>
}


export const ListDragonProvider = ({children}: {children:React.ReactNode}) => {
 const [listDragon,setListDragon]= useState<DragonListProp[]>([])



  return (
    <ListDragonContext.Provider value={{listDragon,setListDragon}}>
        {children}
    </ListDragonContext.Provider>
  )
}
