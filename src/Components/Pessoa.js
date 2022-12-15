import './Pessoa.module.css'
function Pessoa(props){
  return(
    <div>
      <h1>sou {props.nome}</h1>
      <h2>e tenho {props.idade} anos</h2>
    </div>
  );
}
export default Pessoa;