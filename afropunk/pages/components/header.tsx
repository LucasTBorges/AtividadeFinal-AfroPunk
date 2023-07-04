import styles from '@/styles/header.module.css'
import Image from 'next/image'
import Logo from "./../../public/images/afropunk.svg"
import Login from "./../../public/images/login.svg"
import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div>
            <Image src={Logo} alt="" width={176} height={26} />
        </div>
        <nav className={styles.nav1}>
            <a>Inicio</a>
            <a>Sobre</a>
            <a>Line-up</a>
            <a>Ingressos</a>
            <a href='#galeria'>Galeria</a>
        </nav>
        <nav className={styles.nav2}>
            <a id={styles.comprar}>COMPRAR</a>
            <a id={styles.casa} href="/login"><Image src={Login} alt="" /></a>
        </nav>
      </header>
    </>
  )
}
