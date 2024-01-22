import trashImg from "../assets/trash.svg";
import { useCallback, useContext } from "react";
import { api } from "../services/api";
import { ListDragonContext } from "../context/ListDragonContext";
import { ModalEditDragon } from "./ModalEditDragon";
import { formattedData } from "../utils/formattedData";

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
    <div className="max-w-[15rem]   relative flex flex-col justify-center items-center w-full min-h-[15rem] bg-purple600 rounded-lg">
      <div key={id} className="absolute top-2 right-2 ">
        <button
          className="bg-[#fff] rounded-s-lg p-2"
          onClick={() => handleDeleteDragon(id)}
        >
          <img src={trashImg} width={20} />
        </button>
        <ModalEditDragon dragonProps={dragonProps} />
      </div>

      <h4 className="text-xl font-bold my-4">{name}</h4>
      {type.length > 0 && (
        <div className="mb-2 flex items-center ">
          <span className="text-white font-semibold">Type:</span>

          <span className="text-black400 font-bold text-lg ml-2">{type}</span>
        </div>
      )}

      {histories.length > 0 && (
        <div className="flex items-center text-center  justify-center">
          <span className="text-white font-semibold">
            Histories:{" "}
            <span className="text-black400  font-bold">{histories}</span>
          </span>
        </div>
      )}

      <span className="mt-2 text-black400 font-semibold">
        {formattedData(new Date(createdAt))}
      </span>
    </div>
  );
}
