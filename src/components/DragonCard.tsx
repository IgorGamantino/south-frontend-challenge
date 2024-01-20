import { Tooltip } from "@chakra-ui/react";
import trashImg from "../assets/trash.svg"
import pencilImg from "../assets/pencil.svg"

type DragonProps = {
  createdAt: Date,
    name: string,
    type: string,
    histories: string,
    id: number
}


export function DragonCard({
  createdAt,
  name,
  type,
  histories,
  id
}:DragonProps) {
  return (
    <div className="max-w-[15rem]  relative flex flex-col justify-center items-center w-full h-[15rem] bg-purple600 rounded-lg">
    <div key={id} className="absolute top-2 right-2 ">
      <Tooltip label="Deletar seu Dragão?" bg="#FFFF">
      <button className="bg-[#fff] rounded-s-lg p-2">
        <img src={trashImg} width={20} />

      </button>
      </Tooltip>

      <button className="ml-2 p-2 rounded-e-lg bg-[#fff]">
          <img src={pencilImg} width={20} />
      </button>
      </div>

       <h4>{name}</h4>



      <span>{type}</span>
      <span>{histories}</span>

      <span>{new Date(createdAt).toDateString()}</span>

    </div>
  )
}
