import { Home } from "./pages/Home"
  import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from "./pages/Login";

import { Route, Routes,  } from 'react-router-dom';
import { SignUp } from "./pages/SignUp";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signUp" element={<SignUp />} />

    </Routes>
  )
}

export default App
