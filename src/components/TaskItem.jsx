export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div>
      <span style={{ textDecoration: task.done ? "line-through" : "" }}> {/* Mostra o texto da tarefa */}
        {task.text} {/*Se task.done for true, risca o texto (mostrando que foi concluída) */}
      </span>
      <button onClick={() => onToggle(task.id)}>✔</button> {/*Botão para marcar ou desmarcar a tarefa como feita */}
      <button onClick={() => onDelete(task.id)}>X</button>  {/*Botão para apagar a tarefa da lista */}
    </div> //Tudo está dentro de <div> apenas para organizar visualmente cada tarefa
  );
}