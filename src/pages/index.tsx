import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex h-screen justify-center items-center 
        bg-gradient-to-r to-purple-500 from-blue-600 
        text-white'>
      <Layout titulo='Cadastro simples'>
        <span>conteudo</span>
      </Layout>
    </div>
  )
}
