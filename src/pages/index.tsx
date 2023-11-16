import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Tabela from '@/components/Tabela'
import Cliente from '@/core/Cliente/Cliente'

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
  return (
    <div className='flex h-screen justify-center items-center 
        bg-gradient-to-r to-purple-500 from-blue-600 
        text-white'>
      <Layout titulo='Cadastro simples'>
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  )
}
