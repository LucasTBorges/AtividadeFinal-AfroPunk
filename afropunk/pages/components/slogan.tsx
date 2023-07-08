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
                    <Image src={Facebook} alt='' />
                    <Image src={Instagram} alt='' />
                    <Image src={Youtube} alt='' />
                    <Image src={Twitter} alt='' />
                </div>
                <div>
                    <h2>Mais que um movimento</h2>
                    <h2>Um encontro <span>ancestral</span></h2>
                    <div>
                        <a>COMPRAR INGRESSO</a>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <div>

                </div>
                <div>
                    
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
