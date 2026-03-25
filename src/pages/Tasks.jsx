import TaskItem from "../components/TaskItem"; //Importa o componente TaskItem, que representa cada tarefa individual da lista.

export default function Tasks({ tasks, setTasks }) {
  function toggleTask(id) { //Função para marcar ou desmarcar uma tarefa como concluída
    setTasks( //atualiza a lista com a mudança
      tasks.map((t) => //percorre todas as tarefas
        t.id === id ? { ...t, done: !t.done } : t //se a tarefa tiver o id correspondente, inverte o valor de done
      )
    );
  }

  function deleteTask(id) { //Função para apagar uma tarefa
    setTasks(tasks.filter((t) => t.id !== id));
    //mantém apenas as tarefas que não têm o id passado
    //atualiza a lista sem a tarefa deletada
  }

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      {tasks.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          onToggle={toggleTask} //passa a função para marcar/desmarcar
          onDelete={deleteTask} //passa a função para apagar
        />
      ))}
    </div>
  );
}