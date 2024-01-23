import { useContext } from "react";
import { ListDragonContext } from "../context/ListDragonContext";

export function InputSearch() {
  const {setSearchDragon,searchDragon } = useContext(ListDragonContext);


  return (
      <input
        onChange={name => setSearchDragon(name.target.value)}
        value={searchDragon}
        placeholder="Pesquise pelo nome do dragão"
        className="px-2 mb-4 h-10 w-full bg-blue200 rounded-lg placeholder-[#fff]"
        type="text"
      />

  );
}
