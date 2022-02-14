import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import InsereCliente from "../../data/Cliente.js"

function InfoCliente(props) {
  
  var clientes = props.clientes;

  function adiciona_cliente(cliente) {
    clientes.push(cliente);
/*      
      {
        nome: cliente.nome,
        endereco : cliente.endereco,
        cep : cliente.cep,
        cpf : cliente.cpf,
        email : cliente.email,
        tel : cliente.tel
      }
*/
  }

  return (
    <div className={styles.box}>
      <div className={styles.center}>
        <InsereCliente clientes={clientes}/>
      </div>
    </div>
  );
}
  
export default InfoCliente;
  