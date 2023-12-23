import { useState } from "react";
import BackGround from "./components/BackGround";
import ForeGround from "./components/ForeGround";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative w-full h-screen bg-zinc-800">
    <BackGround/>
    <ForeGround/>
    </div> 
    
  );
}

export default App;
