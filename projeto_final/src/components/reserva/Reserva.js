import styles from "./Reserva.module.css";
import React from "react"
import { useState } from "react";

/*
  Falta função para calcular preço por pessoa(Preço por pessoa altera conforme o metodo do pagamento. 1,2 normal, 3 e 4 com preço*1.2)
  O numero de pessoas deve de vir dos componentes passados, mas possivel alterar aqui
  Inputs sem formatação CSS
  O name é preciso para os inputs não deixarem ser todos marcados ao mesmo tempo
*/
export default function Reserva() {
  const [metodo, setMetodo] = useState(1);
  return (
    <div className={styles.content}>
    <input type="text" placeholder="Nome na reserva"></input> 
    <span>Numero de pessoas: </span> 
    <span>Metodo de pagamento</span> 

    {metodo == 1 && <span><input type="radio" name="fnc"  onClick={() => setMetodo(2) }/>Visa</span>}
    {metodo == 1 && <span><input type="radio" name="fnc"  onClick={() => setMetodo(3)}/>MasterCard </span>}
	  {metodo == 1 && <span><input type="radio" name="fnc"  onClick={() => setMetodo(4)}/>MBway </span>}
	  {metodo == 1 && <span><input type="radio" name="fnc"  onClick={() => setMetodo(5)}/>Crypto</span>}

        {metodo == 2 && <span className={styles.botaoVoltar} onClick={()=> setMetodo(1)}>Visa </span>}
          {metodo == 2 && <input type="text" placeholder="1234 5678 1234 5678"></input>}
        {metodo == 3 && <span className={styles.botaoVoltar} onClick={()=> setMetodo(1)}>MasterCard</span> }
          {metodo == 3 && <input type="text" placeholder="1234 5678 1234 5678"></input>}
        {metodo == 4 && <span className={styles.botaoVoltar} onClick={()=> setMetodo(1)}>MBway </span> }
          {metodo == 4 && <input type="text" placeholder="1234 5678 1234 5678"></input>}
        {metodo == 5 && <span className={styles.botaoVoltar} onClick={()=> setMetodo(1)}>Crypto </span> }
        {metodo == 5 &&   <input type="text" placeholder="1234 5678 1234 5678"></input>}
    <span>Preço/pessoa:</span> 
    </div>
  );
}