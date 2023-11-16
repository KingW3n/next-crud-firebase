import ColecaoCliente from "@/backFirebase/db/ColecaoCliente"
import Cliente from "@/core/Cliente/Cliente"
import ClienteRepositorio from "@/core/Cliente/ClienteRepositorio"
import { useEffect, useState } from "react"
import useTableForm from "./useTableForm"
import { DefaultDeserializer } from "v8"

export default function useClientes(){

    const repo: ClienteRepositorio = new ColecaoCliente()

    const {formularioVisivel,tabelaVisivel,exibirtabela, exibForm} = useTableForm()

    const [cliente, SetCliente] = useState<Cliente>(Cliente.clienteVazio())
    const [clientes, SetClientes] = useState<Cliente[]>([])

    useEffect(()=> {
        obtertodos()
      },[])
      
        function obtertodos(){
            repo.obterTodos().then(clientes =>{
                SetClientes(clientes)
                exibirtabela()
            }) 
        }
      
        function SelecionarClientes (cliente:Cliente){
            SetCliente(cliente)
            exibForm()
        }
      
      
        async function excluirCliente(cliente:Cliente){
            await repo.excluir(cliente)
            obtertodos()
            exibirtabela()
        }
      
        async function salvarCliente(cliente:Cliente){
            await repo.salvar(cliente)
            await obtertodos()
            exibirtabela()
        } 
      
        function novoCliente(cliente:Cliente){
            SetCliente(Cliente.clienteVazio())
            exibForm()
        } 
    
    
    return{
        tabelaVisivel,
        cliente,
        clientes,
        salvarCliente,
        novoCliente,
        excluirCliente,
        SelecionarClientes,
        obtertodos,
        exibirtabela


    }
      
}