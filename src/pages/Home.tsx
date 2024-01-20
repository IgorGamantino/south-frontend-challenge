
import trashImg from "../assets/trash.svg"
import pencilImg from "../assets/pencil.svg"
export function Home () {
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
        <input placeholder="Pesquise pelo nome do dragão" className="px-2 h-10 w-full bg-blue200 rounded-lg" type="text" />
        <button className="bg-purple600 h-10 ml-2 rounded-lg p-2">Pesquisar</button>
        </div>


        <div className="mt-20 flex items-center gap-2 justify-center w-full  py-2">

          <div className="max-w-[15rem]  relative flex flex-col justify-center items-center w-full h-[15rem] bg-purple600 rounded-lg">
          <div className="absolute top-2 right-2 ">
            <button className="bg-[#fff] rounded-s-lg p-2">
              <img src={trashImg} width={20} />

            </button>

            <button className="ml-2 p-2 rounded-e-lg bg-[#fff]">
                <img src={pencilImg} width={20} />
            </button>
          </div>

            <h4>Dragon Lor</h4>

            <span>dragao criado com vo</span>

            <span>ice</span>
          </div>

          <div className="max-w-[15rem]  flex flex-col justify-center items-center w-full h-[15rem] bg-purple600 rounded-lg">
            <h4>Dragon Lor</h4>

            <span>dragao criado com vo</span>

            <span>ice</span>
          </div>
        </div>
      </section>
    </main>
  )
}
