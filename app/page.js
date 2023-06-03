import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { getAllPosts } from '@/services/getAllPosts'

const inter = Inter({ subsets: ['latin'] })


// async function getData() {
//   const res = await fetch("/api/posts")

//   const data = await res.json();

//   return data;
// }

export default async function Home() {
  
  let data = await getAllPosts();

  return (
    <main className={styles.main}>
      {
        data.message 
      }
    </main>
  )
}
