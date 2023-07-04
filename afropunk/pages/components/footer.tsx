import styles from '@/styles/footer.module.css'
import Image from 'next/image'
import Logo from "./../../public/images/afropunk.svg"
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.div1}>
            <Image src={Logo} alt="" width={252} height={46} />
            <div className={styles.div2}>
                <nav className={styles.nav1}>
                    <a>Inicio</a>
                    <a>Sobre Nós</a>
                    <a>Line-up</a>
                    <a>Ingressos</a>
                    <Link href='#galeria'>Galeria</Link>
                </nav>
                <nav className={styles.nav2}>
                    <a>Facebook</a>
                    <a>Instagram</a>
                    <a>Twitter</a>
                    <a>Youtube</a>
                </nav>
                <nav className={styles.nav3}>
                    <a>Termos de serviço</a>
                    <a>Política de privacidade</a>
                </nav>
            </div>            
        </div>
        
        <div className={styles.div3}>
            <h2 id={styles.h2}>ALL RIGHTS RESERVERD @AFROPUNK 2023</h2>
        </div>
      </footer>
    </>
  )
}
