
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Botao from '@/components/Botao'
import Formulario from '@/components/Formulario'
import useClientes from '@/hooks/useClientes'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const {
    cliente,
    clientes, 
    excluirCliente, 
    novoCliente,
    SelecionarClientes, 
    salvarCliente,
    tabelaVisivel,
    exibirtabela
    
  } = useClientes()
  return (
    <div className='flex h-screen justify-center items-center 
        bg-gradient-to-r to-purple-500 from-blue-600 
        text-white'>
      <Layout titulo='Cadastro simples'>
        {console.log(tabelaVisivel)}
        {tabelaVisivel ? (
          <>
            <div className='flex justify-end'>
              <Botao onClick={novoCliente} classname='mb-4'>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado ={SelecionarClientes}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ):(
          <Formulario cliente={cliente} cancelado={exibirtabela} clienteMudou={salvarCliente}></Formulario>
        )}
        
       
      </Layout>
    </div>
  )
}
