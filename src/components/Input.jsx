export default function Input({ value, onChange }) {
  return (
    <input //cria o campo de texto na tela
      value={value} //faz com que o campo mostre o texto
      onChange={(e) => onChange(e.target.value)}
    //   onChange={(e) => onChange(e.target.value)} → toda vez que o usuário digita algo, ele pega o valor digitado 
    //   (e.target.value) e chama a função passada pelo pai (onChange) para atualizar o estado.
    />
  );
}