import { useState } from "react";

export default function useTableForm (){
    const [visivel, setVisivel] = useState<'tabela'|'form'>('tabela')

    const exibirtabela = () =>{
        setVisivel('tabela')
    } 
    const exibForm = () =>{
       console.log('aqui')
        setVisivel('form')
    }

    console.log(visivel)
    return { 
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirtabela,
        exibForm,
    }
}