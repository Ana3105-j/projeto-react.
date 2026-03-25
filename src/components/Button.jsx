export default function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
} 
// Este componente serve para criar botões reutilizáveis