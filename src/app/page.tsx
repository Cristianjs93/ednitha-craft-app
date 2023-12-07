import { type ReactElement } from 'react'
import styles from './page.module.scss'
import NavCarousel from '@/components/NavCarousel/NavCarousel'
import Navbar from '@/components/Navbar/Navbar'

const HomePage = (): ReactElement => {
  return (
    <main className={styles.main}>
      <Navbar />
      <NavCarousel />
    </main>
  )
}

export default HomePage
