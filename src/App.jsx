import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from "./components/satData";
function App() {
  const [sat, setSat] = useState(satData)
  return (
    <div>
      <Buttons />
      <Table />
      <Banner/>
    </div>
  );
}

export default App;