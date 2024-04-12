import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Bai1 from './pages/Bai1/Bai1';
import Bai2 from './pages/Bai2/Bai2';
import Bai3 from './pages/Bai3/Bai3';
import Bai4 from './pages/Bai4/Bai4';
import Bai5 from './pages/Bai5/Bai5';
import Bai6 from './pages/Bai6/Bai6';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home/>} />
            <Route path="/Bai1" element={<Bai1/>} />
            <Route path="/Bai2" element={<Bai2/>} />
            <Route path="/Bai3" element={<Bai3/>} />
            <Route path="/Bai4" element={<Bai4/>} />
            <Route path="/Bai5" element={<Bai5/>} />
            <Route path="/Bai6" element={<Bai6/>} />
          </Route>
        </Routes>            
      </BrowserRouter>
    </div>
  );
}

export default App;
