import "./App.css";
import Input from "./Components/Input";
import Box from "./Components/Box";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  // const removeToDo=(id)=>{
  //      console.log(id);
  // }

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <div className="bg-black h-screen w-screen p-3">
      <div className="mx-auto max-w-[750px] min-h-[550px] shadow-4xl bg-white rounded-3xl px-4 py-3 mt-4 ">
        
        <Input todos={todos} setTodos={setTodos} />
        <Box todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
