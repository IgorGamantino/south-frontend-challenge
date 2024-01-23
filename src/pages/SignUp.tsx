import { useState } from "react";
import logoImg from "../assets/dragonSignUp.jpeg";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../main";
import { useNavigate } from "react-router-dom";
export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();

  async function handleSignIn(data: { preventDefault: () => void }) {
    data.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password).then((user) =>
        console.log(user),
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  function handleGoBack() {
    navigate("/");
  }
  return (
    <main className="h-screen flex items-stretch">
      <div className="h-full max-h-screen hidden md:block ">
        <img src={logoImg} className="w-full h-full object-cover" />
      </div>
      <section className="bg-black400   max-w-screen-md md:min-w-[30rem] flex items-center justify-center flex-col">
        <form
          onSubmit={handleSignIn}
          className="text-center  px-8 my-20 flex gap-5 flex-col"
        >
          <h2 className="text-6xl text-white font-bold mb-20">
            Dragons Realms
          </h2>

          <h5 className="text-2xl text-white font-bold">Cria sua conta</h5>

          <input
            type="email"
            value={email}
            onChange={(email) => setEmail(email.target.value)}
            placeholder="E-mail"
            required
            className="h-14  bg-black800 rounded-xl p-2 text-white"
          />

          <input
            type="password"
            value={password}
            placeholder="Password"
            required
            onChange={(password) => setPassword(password.target.value)}
            className="h-14 text-white bg-black800 rounded-xl p-2"
          />

          <button
            className="h-14 bg-purple600 rounded-xl font-semibold text-lg"
            type="submit"
          >
            Criar
          </button>

          <button
            className="text-purple600 font-semibold text-lg"
            onClick={handleGoBack}
          >
            Voltar
          </button>
        </form>
      </section>
    </main>
  );
}
