import { createContext, useState } from "react";

export const ListDragonContext = createContext({} as ListDragonContext);

type DragonListProp = {
  createdAt: Date;
  name: string;
  type: string;
  histories: string;
  id: number;
};

type ListDragonContext = {
  listDragon: DragonListProp[];
  setListDragon: React.Dispatch<React.SetStateAction<DragonListProp[]>>;
  filteredListDragon: () => DragonListProp[];
  setSearchDragon: React.Dispatch<React.SetStateAction<string>>;
  searchDragon: string;
};

export const ListDragonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [listDragon, setListDragon] = useState<DragonListProp[]>([]);
  const [searchDragon, setSearchDragon] = useState("");

  const filteredListDragon = () => {
    if (searchDragon.length <= 0) return listDragon;

    return listDragon.filter((dragon) =>
      dragon.name.toLowerCase().includes(searchDragon.toLowerCase()),
    );
  };

  return (
    <ListDragonContext.Provider
      value={{
        listDragon,
        setListDragon,
        filteredListDragon,
        setSearchDragon,
        searchDragon,
      }}
    >
      {children}
    </ListDragonContext.Provider>
  );
};
