import styles from '@/styles/slogan.module.css'
import Image from 'next/image'
import Facebook from './../../public/images/facebook.svg'
import Instagram from './../../public/images/instagram.svg'
import Youtube from './../../public/images/youtube.svg'
import Twitter from './../../public/images/twitter.svg'

export default function Slogan() {
  return (
    <>
        <section className={styles.section}>
            <div className={styles.slogan}>
                <div className={styles.icones}>
                    <a><Image className={styles.bordericone} src={Facebook} alt='' width={95} height={95} /></a>
                    <a><Image className={styles.bordericone} src={Instagram} alt='' width={95} height={95} /></a>
                    <a><Image className={styles.bordericone} src={Youtube} alt='' width={95} height={95} /></a>
                    <a><Image className={styles.bordericone} src={Twitter} alt='' width={95} height={95} /></a>
                </div>
                <div className={styles.text}>
                    <div className={styles.divtext}>
                        <h2>Mais que um movimento</h2>
                        <h2 id={styles.texth2}>Um encontro <span>ancestral</span></h2>
                    </div>                    
                    <div>
                        <a>COMPRAR INGRESSO</a>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.local}>
                    <div id={styles.locallinha}></div>
                    <div className={styles.localtext}>
                        <h3>Salvador</h3>
                        <p>Parque de Exposições</p>
                    </div>                    
                </div>
                <div className={styles.informacoes}>
                    <div className={styles.infor}>
                        <div></div>
                        <h3>2</h3>
                        <p>dias</p>
                    </div>
                    <div className={styles.infor}>
                        <div></div>
                        <h3>20+</h3>
                        <p>Atrações</p>
                    </div>
                    <div className={styles.infor}>
                        <div></div>
                        <h3>30K</h3>
                        <p>Capacidade</p>
                    </div>                    
                </div>
            </div> 
            {/* <div className={styles.x}>
                <div className={styles.branco}>
                    <h3>Viver o AFROPUNK é único • Uma experiência • Viver o AFROPUNK é único •  </h3>
                </div>
                <div className={styles.verde}>
                    <h3>Viver o AFROPUNK é único • Uma experiência • Viver o AFROPUNK é único •  </h3>
                </div>
            </div>    */}
        </section>
    </>
  )
}
