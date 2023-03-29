import { BrowserRouter, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from "./components/Login/Login"
import NavigationBar from "./components/NavigationBar/NavigationBar"

// User
import FormUbahPassword from "./components/User/FormUbahPassword"

// RL 3.4
import RL34 from "./components/RL34/RL34.js"

// RL 3.5
import RL35 from "./components/RL35/RL35.js"

//RL 5.1
import RL51 from "./components/RL51/RL51.js"

//RL 5.2
import RL52 from "./components/RL52/RL52.js"

function App() {
  return (
    <BrowserRouter basename={''}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="admin/beranda" element={<><NavigationBar/></>} />
        <Route path="/user/ubahpassword" element={<><NavigationBar/><FormUbahPassword/></>}/>
        
        <Route path="admin/rl34" element={<><NavigationBar/><RL34/></>}/>
        <Route path="admin/rl35" element={<><NavigationBar/><RL35/></>}/>
        <Route path="admin/rl51" element={<><NavigationBar/><RL51/></>}/>
        <Route path="admin/rl52" element={<><NavigationBar/><RL52/></>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
