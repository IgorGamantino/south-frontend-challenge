import { useContext, useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import pencilImg from "../assets/pencil.svg";
import { api } from "../services/api";
import { ListDragonContext } from "../context/ListDragonContext";
import { InputForm } from "./InputForm";

type DragonProps = {
  dragonProps: {
    id: number;
    name: string;
    type: string;
    histories: string;
  };
};
export function ModalEditDragon({ dragonProps }: DragonProps) {
  const [modal, setModal] = useState(false);

  const { setListDragon, listDragon } = useContext(ListDragonContext);

  const [name, setName] = useState(dragonProps.name);
  const [type, setType] = useState(dragonProps.type);
  const [histories, setHistories] = useState(dragonProps.histories);

  const toggle = () => setModal(!modal);

  const handleEditDragon = async (data: { preventDefault: () => void; }) => {
    data.preventDefault();
    try {
      await api.put(`/${dragonProps.id}`, {
        name,
        type,
        histories,
      });

      const updateListDragonIndex = listDragon.findIndex(
        (dragon) => dragon.id === dragonProps.id,
      );

      if (updateListDragonIndex !== -1) {
        const updatedDragon = {
          id: listDragon[updateListDragonIndex].id,
          name,
          type,
          histories,
          createdAt: listDragon[updateListDragonIndex].createdAt,
        };

        const updatedListDragon = [...listDragon];
        updatedListDragon[updateListDragonIndex] = updatedDragon;

        setListDragon(updatedListDragon);

        setModal(!modal);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button data-testid="editar" onClick={toggle} className="ml-2 p-2 rounded-e-lg bg-[#fff]">
        <img src={pencilImg} width={20} />
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Editar seu Dragão</ModalHeader>
        <form onSubmit={handleEditDragon}>
          <ModalBody>
            <div className="flex flex-col gap-2">
              <InputForm
              placeholder="Name"
              value={name}
              onChange={name => setName(name.target.value)} />

              <InputForm
              placeholder="Type"
              value={type}
              onChange={type => setType(type.target.value)} />

            <InputForm
              placeholder="Histories"
              value={histories}
              onChange={history => setHistories(history.target.value)} />

            </div>
          </ModalBody>
          <ModalFooter>
            <button
              type="reset"
              className="bg-[red] text-white p-2 rounded-md"
              onClick={toggle}
            >
              Fechar
            </button>
            <button
              className="bg-blue200 text-white p-2 rounded-md"
              type="submit"
            >
              Salvar
            </button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
}
