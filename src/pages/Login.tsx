import { useState } from "react";
import logoImg from "../assets/dragon2.png";


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../main";
export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const auth = getAuth(app)

  function handleSignIn() {
    try {
      createUserWithEmailAndPassword(auth, email, password).then((user)=> console.log(user))
    } catch (error) {
      console.log(error)
    }

  }



  return (
    <main className="h-screen flex items-stretch">
      <section className="bg-black400  max-w-screen-md md:min-w-[30rem] flex items-center justify-center flex-col">
        <div className="text-center  px-8 my-20 flex gap-5 flex-col">
          <h2 className="text-6xl mb-20">Dragons Realms</h2>

          <input value={email} onChange={email => setEmail(email.target.value)}
          placeholder="email"
          className="h-14  bg-black800 rounded-xl p-2 text-white" />

          <input value={password}
          placeholder="password"
          onChange={password => setPassword(password.target.value)} className="h-14 text-white bg-black800 rounded-xl p-2" />

          <button className="h-14 bg-purple600 rounded-xl" onClick={handleSignIn}>Entrar</button>
        </div>
      </section>
      <div className="h-full max-h-screen hidden md:block ">
        <img src={logoImg} className="w-full h-full object-cover" />
      </div>
    </main>
  );
}
