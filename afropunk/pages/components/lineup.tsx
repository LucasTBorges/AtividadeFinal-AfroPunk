import styles from '@/styles/lineup.module.css'
import Image from 'next/image'

export default function Lineup() {
  return (
    <>
        <section className={styles.section}>
            {/* <div className={styles.div}> */}
                <div className={styles.titulo}>
                    <h2>L<span>i</span>ne-<span>u</span>p</h2>
                </div>
                <div className={styles.images}>
                    <Image src="" alt="" />
                    <Image src="" alt="" />
                </div>
                <div className={styles.text1}>
                    <h3>LINIKER</h3>
                    <h5>•</h5>
                    <h3>EMICIDA</h3>
                    <h5>•</h5>
                    <h3>LUDMILLA</h3>
                </div>
                <div className={styles.text2p}>
                    <div className={styles.text2}>
                        <h4>DJ  BELLE</h4>
                        <h5>•</h5>
                        <h4>A Dama</h4>
                        <h5>•</h5>
                        <h4>N.I.N.A</h4>
                        <h5>•</h5>
                        <h4>ÀTOOXXÁ</h4>
                    </div>
                    <div className={styles.text2}>
                        <div className={styles.nomegrande}>
                            <h4>Rayssa</h4>
                            <h4>Dias</h4>
                        </div>                        
                        <h5>•</h5>
                        <h4>Baco</h4>
                        <h5>•</h5>
                        <h4>Psirico</h4>
                        <h5>•</h5>
                        <h4>Nic Dias</h4>
                    </div>
                    <div className={styles.text2}>
                        <div className={styles.nomegrande}>
                            <h4>Margareth</h4>
                            <h4>Menezes</h4>
                        </div>
                        <h5>•</h5>
                        <h4>Masego</h4>
                        <h5>•</h5>
                        <h4>DAWER</h4>
                        <h5>•</h5>
                        <h4>DAMPER</h4>
                    </div>                 
                </div>
                <div className={styles.text3}>
                    <h3>Djonga</h3>
                    <h5>•</h5>
                    <h3>Alcione</h3>
                </div>
                <div className={styles.bottom}>
                    <a>+</a>
                </div>
            {/* </div>             */}
        </section>
    </>
  )
}
