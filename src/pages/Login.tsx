import { useState } from "react";
import logoImg from "../assets/dragon2.png";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../main";
import { useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);

  async function handleSignIn(data: { preventDefault: () => void }) {
    data.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then((user) =>
        console.log(user),
      );

      navigate("/home");
    } catch (error) {
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
      }, 2000);
    }
  }

  function handleNavigationSignUp() {
    navigate("signUp");
  }

  return (
    <main className="h-screen flex items-stretch">
      {isError && (
        <Alert
          color="danger"
          className=" text-center absolute left-10 top-10 w-[25rem] h-[5rem]"
        >
          Usuario ou senha incorreto
        </Alert>
      )}
      <section className="bg-black400   max-w-screen-md md:min-w-[30rem] flex items-center justify-center flex-col">
        <form
          onSubmit={handleSignIn}
          className="text-center  px-8 my-20 flex gap-5 flex-col"
        >
          <h2 className="text-6xl text-white font-bold mb-20">
            Dragons Realms
          </h2>

          <input
            value={email}
            type="email"
            required
            onChange={(email) => setEmail(email.target.value)}
            placeholder="E-mail"
            className="h-14  bg-black800 rounded-xl p-2 text-white"
          />

          <input
            value={password}
            type="password"
            required
            placeholder="Password"
            onChange={(password) => setPassword(password.target.value)}
            className="h-14 text-white bg-black800 rounded-xl p-2"
          />

          <button type="submit" className="h-14 bg-purple600 rounded-xl">
            Entrar
          </button>

          <button
            className="text-purple600 font-semibold text-lg"
            onClick={handleNavigationSignUp}
          >
            Criar conta
          </button>
        </form>
      </section>
      <div className="h-full max-h-screen hidden md:block ">
        <img src={logoImg} className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
