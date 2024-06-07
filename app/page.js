"use client"

import Link from "next/link";
import { useState } from "react";

export default function Home() {

  const [ nome, alteraNome ] = useState("");

  function enviaFormulario(e){
    e.preventDefault();

    if( nome == "Conrado" ){
      alert("Parabéns, você digitou o nome mais lindo do mundo!")
    }else{
      alert("Você digitou algo errado, tente de novo...")
    }

  }

  return (
    <div>
      <h1>Aula de publicação</h1>
      <p> Publicar um site na Vercel usando NextJS e no Github Pages com arquivos estáticos </p>

      <hr/>
      <p style={{backgroundColor: "yellow"}} >Este é uma nova versão do meu site</p>
      <hr/>

      <Link href="teste">Ir para página de testes</Link>

      <form onSubmit={ (e)=> enviaFormulario(e) } >

        <label> 
          Digite seu nome 
          <input onChange={ (e)=> alteraNome(e.target.value) } /> 
        </label>

        <button>Enviar</button>

      </form>

    </div>
  );
}
