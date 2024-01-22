import { useContext, useEffect, useState } from "react";
import { DragonCard } from "../components/DragonCard";
import {  fetchDragons } from "../services/api";
import { ListDragonContext } from "../context/ListDragonContext";
import { ModalCreatedDragon } from "../components/ModalCreatedDragon";


export function Home() {
  const {setListDragon, listDragon} = useContext(ListDragonContext)

  useEffect(() => {
    async function getDragonList() {
      const response = await fetchDragons();
      setListDragon(response);
    }
    getDragonList();
  }, [setListDragon]);

  return (
    <main className="bg-black400 min-h-screen flex p-5 md:p-10 justify-center">
      <section
        className="
        w-full
        h-full
        rounded-2xl
        flex
        flex-col
      "
      >
        <div className="w-full flex  items-center justify-center rounded-xl bg-blue800 p-5">
          <input
            placeholder="Pesquise pelo nome do dragão"
            className="px-2 h-10 w-full bg-blue200 rounded-lg placeholder-[#fff]"
            type="text"
          />
          <button className="bg-purple600 h-10 ml-2 rounded-lg p-2">
            Pesquisar
          </button>

          <ModalCreatedDragon />

        </div>

        <div className="mt-20 flex items-center bg-black400 flex-wrap gap-2 md:gap-4 justify-center w-full  py-2">

           {listDragon.sort((a,b) => a.name.localeCompare(b.name)).map((dragon) => (
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
