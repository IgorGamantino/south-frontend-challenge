import { useContext, useEffect } from "react";
import { DragonCard } from "../components/DragonCard";
import { api } from "../services/api";
import { ListDragonContext } from "../context/ListDragonContext";
import { ModalCreatedDragon } from "../components/ModalCreatedDragon";
import { InputSearch } from "../components/InputSearch";

export function Home() {
  const { setListDragon,filteredListDragon } = useContext(ListDragonContext);

  useEffect(() => {
    async function getDragonList() {
      const response = await api.get("/");
      setListDragon(response.data);
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
          <InputSearch />

          <ModalCreatedDragon />
        </div>

        <div className="mt-20 flex items-center bg-black400 flex-wrap gap-2 md:gap-4 justify-center w-full  py-2">
          {filteredListDragon()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((dragon) => (
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
