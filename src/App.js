import { Home } from "./components/Pages/Home/Home";
import { Route, Routes } from "react-router-dom"
import { ListNames } from "./components/Pages/ListNames/ListNames";
import { PrintText } from "./components/Pages/PrintText/PrintText";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home style0="style0" style1="style1"/>}/>
        <Route path="/listName" element={<ListNames />}/>
        <Route path="/printTxt" element={<PrintText />}/>
      </Routes>
    </div>
  );
}

export default App;
