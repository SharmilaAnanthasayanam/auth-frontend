import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Home from "./pages/Home"
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<SignUp/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/Home" element = {<Home/>}/>
    </Routes>
    </>
  )
}

export default App
