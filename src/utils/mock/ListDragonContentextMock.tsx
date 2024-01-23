// ListDragonContextMock.tsx

import { createContext } from "react";

interface ListDragonContextProps {
  setListDragon: React.Dispatch<React.SetStateAction<DragonListProp[]>>;
  listDragon: DragonListProp[];
}

type DragonListProp = {
  createdAt: Date;
  name: string;
  type: string;
  histories: string;
  id: number;
};

const ListDragonContext = createContext<ListDragonContextProps | undefined>(undefined);

export const ListDragonContextProvider = ({ children }: {children:React.ReactNode}) => {
  const setListDragon = jest.fn();
  const listDragon: DragonListProp[] = [];

  return (
    <ListDragonContext.Provider value={{ setListDragon, listDragon }}>
      {children}
    </ListDragonContext.Provider>
  );
};



