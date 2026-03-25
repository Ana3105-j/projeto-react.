export default function Progress({ tasks }) {
  const total = tasks.length; //Conta quantas tarefas existem no total.
  const done = tasks.filter((t) => t.done).length; //Filtra apenas as tarefas concluídas (t.done === true) e conta quantas são.

  return (
    <div>
      <h2>Progresso</h2>
      <p>Total: {total}</p>
      <p>Concluídas: {done}</p>
    </div>
  );
}