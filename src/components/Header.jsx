import { Link } from "react-router-dom"; //importa o Link, que serve para ir de uma página para outra sem recarregar o site

export default function Header() { //cria o componente Header, que é só o menu.
  return (
    <nav>  {/* barra do menu. */}

    {/* cria cada botão/link do menu que leva para uma rota específica: */}
      <Link to="/">Menu</Link> | 
      <Link to="/tasks">Tarefas</Link> | 
      <Link to="/add">Adicionar</Link> | 
      <Link to="/progress">Progresso</Link>
      
    </nav>
  );
}