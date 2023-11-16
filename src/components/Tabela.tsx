import Cliente from "@/core/Cliente/Cliente"

interface TabelaProps{
clientes: Cliente[]
}

export default function Tabela(props:TabelaProps){

    function renderizarCabecalho(){
        return(
            <tr>
                <th className=" text-left p-4">Código</th>
                <th className=" text-left p-4">Nome</th>
                <th className=" text-left p-4">Idade</th>
            </tr>
        )
    }
    function renderizarBody(){
        return props.clientes?.map((cliente,i)=>{
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200':'bg-purple-100'}`}>
                    <td className=" text-left p-4">{cliente.id}</td>
                    <td className=" text-left p-4">{cliente.nome}</td>
                    <td className=" text-left p-4">{cliente.idade}</td>
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