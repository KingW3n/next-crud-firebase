import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente/Cliente'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [visivel, setVisivel] =useState<'tabela' | 'formulario'>('tabela')
  const [cliente, SetCliente] = useState<Cliente>(Cliente.clienteVazio())
  const clientes = [
    new Cliente('Thainá Alves', 27,'1'),
    new Cliente('Marizene Oliveira', 50,'2'),
    new Cliente('Wendel Junior', 25,'3'),
    new Cliente('Wendel Barbosa', 60,'4'),
    new Cliente('Beatriz', 18,'5'),
    new Cliente('Victor', 23,'6'),
    new Cliente('Maria', 73,'7')
  ]

  function clienteSelecionado (cliente:Cliente){
    SetCliente(cliente)
    setVisivel('formulario')
  }


  function clienteExcluido(cliente:Cliente){
    console.log ('  excluir' +cliente.nome)
  }

  function salvarCliente(cliente:Cliente){
    console.log(cliente)
    setVisivel('tabela')
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
