import trashImg from "../assets/trash.svg";
import { useCallback, useContext } from "react";
import { api } from "../services/api";
import { ListDragonContext } from "../context/ListDragonContext";
import { ModalEditDragon } from "./ModalEditDragon";

type DragonProps = {
  createdAt: Date;
  name: string;
  type: string;
  histories: string;
  id: number;
};

export function DragonCard({
  createdAt,
  name,
  type,
  histories,
  id,
}: DragonProps) {
  const { setListDragon, listDragon } = useContext(ListDragonContext);

  const handleDeleteDragon = useCallback(
    async (id: number) => {
      await api.delete(`/${id}`);

      const filterDelete = listDragon.filter((dragon) => dragon.id !== id);

      setListDragon(filterDelete);
    },
    [listDragon, setListDragon],
  );

  const dragonProps = {
    name,
    type,
    histories,
    id,
  };

  return (
    <div className="max-w-[15rem]  relative flex flex-col justify-center items-center w-full h-[15rem] bg-purple600 rounded-lg">
      <div key={id} className="absolute top-2 right-2 ">
        <button
          className="bg-[#fff] rounded-s-lg p-2"
          onClick={() => handleDeleteDragon(id)}
        >
          <img src={trashImg} width={20} />
        </button>
        <ModalEditDragon dragonProps={dragonProps} />
      </div>



      <h4>{name}</h4>
      <span>{type}</span>
      <span className="text-center">{histories}</span>

      <span>{new Date(createdAt).toDateString()}</span>
    </div>
  );
}
