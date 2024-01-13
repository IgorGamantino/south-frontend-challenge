
import logoImg from "../assets/dragon2.png"
export function Login() {


  return (
    <main className="h-screen flex items-stretch">
      <section className="bg-black400  max-w-screen-md md:min-w-[30rem] flex items-center justify-center flex-col">
        <form
        className="text-center  px-8 my-20 flex gap-5 flex-col"
        >
          <h2
          className="text-6xl mb-20"
          >Dragons Realms</h2>

          <input
            className="h-14  bg-black800 rounded-xl" />

          <input
            className="h-14 bg-black800 rounded-xl"/>

          <button

          className="h-14 bg-purple600 rounded-xl"
          >Entrar</button>
        </form>
      </section>
      <div
      className="h-full max-h-screen hidden md:block ">


        <img
        src={logoImg}
        className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
