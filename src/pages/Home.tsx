import { useContext, useEffect, useState } from "react";
import { DragonCard } from "../components/DragonCard";
import {  fetchDragons } from "../services/api";
import { ListDragonContext } from "../context/ListDragonContext";


export function Home() {
  const {setListDragon, listDragon} = useContext(ListDragonContext)

  useEffect(() => {
    async function getDragonList() {
      const response = await fetchDragons();
      setListDragon(response);
    }
    getDragonList();
  }, []);

  return (
    <main className="bg-black400  flex items-center p-5 md:p-10 justify-center">
      <section
        className="
        w-full
        max-w-[70rem]
        h-full
        rounded-2xl
        flex
        items
        flex-col
      "
      >
        <div className="w-full flex  items-center justify-center bg-blue800 p-5">
          <input
            placeholder="Pesquise pelo nome do dragão"
            className="px-2 h-10 w-full bg-blue200 rounded-lg"
            type="text"
          />
          <button className="bg-purple600 h-10 ml-2 rounded-lg p-2">
            Pesquisar
          </button>
        </div>

        <div className="mt-20 flex items-center bg-black400 flex-wrap gap-2 md:gap-4 justify-center w-full  py-2">

           {listDragon.map((dragon) => (
            <DragonCard
              key={dragon.id}
              name={dragon.name}
              createdAt={dragon.createdAt}
              histories={dragon.histories}
              type={dragon.type}
              id={dragon.id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
