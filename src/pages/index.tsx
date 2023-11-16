import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente/Cliente'
import Botao from '@/components/Botao'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

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
console.log (cliente.nome)
  }


  function clienteExcluido(cliente:Cliente){
    console.log ('  excluir' +cliente.nome)
      }

  return (
    <div className='flex h-screen justify-center items-center 
        bg-gradient-to-r to-purple-500 from-blue-600 
        text-white'>
      <Layout titulo='Cadastro simples'>
        <div className='flex justify-end'>
          <Botao cor="blue" classname='mb-4'>Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes}
        clienteSelecionado ={clienteSelecionado}
        clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  )
}
