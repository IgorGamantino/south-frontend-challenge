import { useEffect, useState } from "react";
import { DragonCard } from "../components/DragonCard";
import { api, fetchDragons } from "../services/api";

type DragonProps = {
  createdAt: Date;
  name: string;
  type: string;
  histories: string;
  id: number;
};
export function Home() {
  const [listDragon, setListDragon] = useState<DragonProps[]>([]);

  console.log(listDragon);

  useEffect(() => {
    async function getDragonList() {
      const response = await fetchDragons();
      //  const test = await  fetch("https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon", {
      //     method: "GET"
      //    })

      //    console.log(test)
      setListDragon(response);
    }
    getDragonList();
  }, []);

  return (
    <main className="bg-black400 h-screen flex items-center p-5 md:p-10 justify-center">
      <section
        className="bg-[#fff]
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

        <div className="mt-20 flex items-center gap-2 justify-center w-full  py-2">
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
