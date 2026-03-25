import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function AddTask({ tasks, setTasks }) {
  const [text, setText] = useState(""); //Cria uma variável de estado chamada text para guardar o que o usuário digita.
                                        //setText é a função que atualiza text
                                        
  function addTask() { //Função que adiciona uma nova tarefa na lista
    if (!text) return; //não faz nada se o campo estiver vazio

    setTasks([...tasks, { id: Date.now(), text, done: false }]); //cria uma nova tarefa
    setText(""); //limpa o campo após adicionar
  }

  return (
    <div>
      <h2>Adicionar Tarefa</h2>

      <Input value={text} onChange={setText} />
      <Button text="Adicionar" onClick={addTask} />
    </div>
  );
}