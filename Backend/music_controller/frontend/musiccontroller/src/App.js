import "./App.css";
import Homepage from "./cmpts/Home/Homepage";
import CreateRoom from "./cmpts/Create/CreateRoom";
import JoinRoom from "./cmpts/Join/JoinRoom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <>fff</>
        {/* <Route exact path="/" element={navigate('/room')}/> */}
        <Route exact path="/room" element={<Homepage/>}/>
        <Route exact path="/create" element={<CreateRoom/>}/>
        <Route exact path="/join" element={<JoinRoom/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
