import Cliente from "@/core/Cliente/Cliente"
import { iconeEdicao, iconeLixo } from "./icon/icones"

interface TabelaProps{
    clientes: Cliente[]
    clienteSelecionado?: (cliente:Cliente)=>void
    clienteExcluido?: (cliente:Cliente)=>void
}

export default function Tabela(props:TabelaProps){

     const exibirAcoes = props.clienteExcluido || props.clienteSelecionado 

    function renderizarCabecalho(){
        return(
            <tr>
                <th className=" text-left p-4">Código</th>
                <th className=" text-left p-4">Nome</th>
                <th className=" text-left p-4">Idade</th>
                {exibirAcoes ?(<th className=" p-4">Ações</th>):false}
            </tr>
        )
    }

    function renderizaracoes(cliente:Cliente){
        return(
            <td className="flex justify-center">
                {props.clienteSelecionado ? (
                     <button onClick={()=> props.clienteSelecionado?.(cliente)} className="flex justify-center items-center 
                     text-green-600 rounded-full p-2 m-1 
                     hover:bg-purple-50">   
                     {iconeEdicao}
                 </button>
                ):false}
                {props.clienteExcluido ? (
                    <button onClick={()=> props.clienteExcluido?.(cliente)} className={`
                        flex justify-center items-center 
                        text-red-500 rounded-full p-2 m-1 
                        hover:bg-purple-50
                    `}>
                        {iconeLixo}
                    </button>
                ):false}
                
            </td>
        )
    }

    function renderizarBody(){
        return props.clientes?.map((cliente,i)=>{
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200':'bg-purple-100'}`}>
                    <td className=" text-left p-4">{cliente.id}</td>
                    <td className=" text-left p-4">{cliente.nome}</td>
                    <td className=" text-left p-4">{cliente.idade}</td>
                    {renderizaracoes(cliente)}
                </tr>
            )
        })
    }

    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            bg-gradient-to-r from-purple-500 to bg-purple-800 w-full text-gray-100
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarBody()}
            </tbody>
        </table>
    )
    
}