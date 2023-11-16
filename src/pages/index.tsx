import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente/Cliente'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import { useEffect, useState } from 'react'
import ClienteRepositorio from '@/core/Cliente/ClienteRepositorio'
import ColecaoCliente from '@/backFirebase/db/ColecaoCliente'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [visivel, setVisivel] =useState<'tabela' | 'formulario'>('tabela')
  const [cliente, SetCliente] = useState<Cliente>(Cliente.clienteVazio())
  const [clientes, SetClientes] = useState<Cliente[]>([])

useEffect(()=> {
  obtertodos()
},[])

function obtertodos(){
  repo.obterTodos().then(clientes =>{
    SetClientes(clientes)
    setVisivel('tabela')
  }) 
}

  function clienteSelecionado (cliente:Cliente){
    SetCliente(cliente)
    setVisivel('formulario')
  }


  async function clienteExcluido(cliente:Cliente){
     await repo.excluir(cliente)
     obtertodos()
  }

  async function salvarCliente(cliente:Cliente){
    await repo.salvar(cliente)
    obtertodos()
  } 

  function novoCliente(cliente:Cliente){
    setVisivel('formulario')
    SetCliente(Cliente.clienteVazio())
  } 


  return (
    <div className='flex h-screen justify-center items-center 
        bg-gradient-to-r to-purple-500 from-blue-600 
        text-white'>
      <Layout titulo='Cadastro simples'>
        {visivel ==='tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao onClick={novoCliente} classname='mb-4'>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado ={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ):(
          <Formulario cliente={cliente} cancelado={()=>setVisivel('tabela')} clienteMudou={salvarCliente}></Formulario>
        )}
        
       
      </Layout>
    </div>
  )
}
