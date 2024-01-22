import { useContext, useState } from 'react';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { api } from '../services/api';
import { ListDragonContext } from '../context/ListDragonContext';


export function ModalCreatedDragon() {
  const [modal, setModal] = useState(false);

  const {setListDragon, listDragon} = useContext(ListDragonContext)

   const [name, setName]= useState("")
   const [type, setType]= useState("")
   const [histories, setHistories]= useState("")

  const toggle = () => setModal(!modal);


  const handleEditDragon = async (data: { preventDefault: () => void; }) => {
     data.preventDefault()
    try {
     const response = await  api.post(`/`,{
          name,
          type,
          histories,
          createdAt: new Date()
      })
      setListDragon([...listDragon, response.data])

        setModal(!modal)
    }
   catch (error) {
      console.log(error)
    }
  }

  return (
    <>
       <button className="bg-white min-w-40  h-10 ml-2 rounded-lg p-2" onClick={toggle}>
            Criar um Dragão
        </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Criar seu Dragão</ModalHeader>
        <form onSubmit={handleEditDragon}>
        <ModalBody>
          <div className='flex flex-col gap-2'>
            <input value={name} onChange={e => setName(e.target.value)} placeholder='Name' className='bg-black800 h-10 rounded-lg p-2 text-white placeholder-[#fff]' />
            <input value={type} onChange={e => setType(e.target.value)}placeholder='Type' className='bg-black800 h-10 rounded-lg p-2  text-white placeholder-[#fff]' />
            <textarea value={histories}onChange={e => setHistories(e.target.value)} placeholder='Histories' className='bg-black800 h-20 rounded-lg p-2  text-white placeholder-[#fff]'/>
          </div>
        </ModalBody>
        <ModalFooter>
          <button type='reset' className='bg-[red] text-white p-2 rounded-md' onClick={toggle}>
            Fechar
          </button>
          <button className='bg-blue200 text-white p-2 rounded-md' type="submit">
            Criar
          </button>
        </ModalFooter>
        </form>
      </Modal>
    </>
  );
}

