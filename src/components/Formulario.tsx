import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente/Cliente";
import Botao from "./Botao";

interface FormularioProps{
    cliente : Cliente

}

export default function Formulario(props: FormularioProps){
    
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id ? (
                <Entrada
                    somenteleitura
                    texto="Codigo"
                    valor={id}
                    classname="mb-4"
                    ></Entrada>

                ):false
            }
            <Entrada
                texto="Nome"
                valor={nome}
                onChange={setNome}
                classname="mb-4"
            ></Entrada>

            <Entrada
                texto="Idade"
                valor={idade}
                onChange={setIdade}
                tipo="number"
            ></Entrada>

            <div className=" flex justify-end mt-7">
                <Botao classname="from-blue-400  to-blue-700 mr-2">{id? 'Alterar': 'Salvar'}</Botao>
                <Botao classname="from-gray-400  to-gray-700">Cancelar</Botao>
            </div>
        </div>
    )
}