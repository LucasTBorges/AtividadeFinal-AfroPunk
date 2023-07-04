import styles from '@/styles/ingressos.module.css'
import Ingresso from './ingresso'
import Image from 'next/image'

export default function Ingressos() {
  return (
    <>
        <section className={styles.section}>
            <h2>Ingressos</h2>
            <h3>Escolha entre as opções de ingressos disponíveis e viva o AFROPUNK, uma experiência única.</h3>
            <div className={styles.ingressos}>
                <Ingresso tipo="Meia" valor="R$85,00" />
                <Ingresso tipo="Meia social" valor="R$95,00" />
                <Ingresso tipo="Inteira" valor="R$130,00" />
            </div>
            <a>COMPRAR INGRESSO</a>
        </section>
    </>
  )
}
