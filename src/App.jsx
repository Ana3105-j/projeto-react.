import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import Progress from "./pages/Progress";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
        <Route path="/add" element={<AddTask tasks={tasks} setTasks={setTasks} />} />
        <Route path="/progress" element={<Progress tasks={tasks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;