import styles from '@/styles/headermodal.module.css'

export default function HeaderModal() {
  return (
    <>
      <section className={styles.section}>
        <a>Login</a>
        <a>Sobre Nós</a>
        <a>Line-up</a>
        <a>Ingressos</a>
        <a>Galeria</a>
      </section>
    </>
  )
}
