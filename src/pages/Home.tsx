import { useContext, useEffect } from "react";
import { DragonCard } from "../components/DragonCard";
import { api } from "../services/api";
import { ListDragonContext } from "../context/ListDragonContext";
import { ModalCreatedDragon } from "../components/ModalCreatedDragon";
import { InputSearch } from "../components/InputSearch";

export function Home() {
  const { setListDragon, filteredListDragon } = useContext(ListDragonContext);

  useEffect(() => {
    async function getDragonList() {
      const response = await api.get("/");
      setListDragon(response.data);
    }
    getDragonList();
  }, [setListDragon]);

  return (
    <main className="min-h-screen w-screen  flex  p-2 sm:p-10 justify-center">
      <section
        className="
        w-full
        h-full
        rounded-2xl
        flex
        flex-col
      "
      >
        <div className="w-full sm:flex items-center justify-center rounded-xl p-2 md:p-5">
          <InputSearch />

          <ModalCreatedDragon />
        </div>

        <div className="mt-20 flex items-center bg-black400 flex-wrap gap-2 md:gap-4 justify-center w-full  py-2">
          {filteredListDragon().length > 0 &&
            filteredListDragon()
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

          {filteredListDragon().length <= 0 && (
            <span className="text-white font-bold text-2xl">
              não temos nenhum dragão na lista
            </span>
          )}
        </div>
      </section>
    </main>
  );
}
