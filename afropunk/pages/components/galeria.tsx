import styles from '@/styles/galeria.module.css'
import Image from 'next/image'
import Foto1 from './../../public/images/Rectangle 132.svg'
import Foto2 from './../../public/images/Rectangle 133.svg'
import Foto3 from './../../public/images/Rectangle 134.svg'
import Foto4 from './../../public/images/Rectangle 135.svg'
import Foto5 from './../../public/images/Rectangle 136.svg'
import Foto6 from './../../public/images/Rectangle 137.svg'
import Foto7 from './../../public/images/Rectangle 138.svg'
import Foto8 from './../../public/images/Rectangle 139.svg'
import Foto9 from './../../public/images/Rectangle 140.svg'

export default function Galeria() {
  return (
    <>
        <section id='galeria' className={styles.section}>
            <div className={styles.div1}>
                <h2>Galeria</h2>
                <div className={styles.divaleatoria}></div>
            </div>
            <div className={styles.div2}>
                <Image src={Foto1} alt="" />
                <Image src={Foto2} alt="" />
                <Image src={Foto3} alt="" />
                <Image src={Foto4} alt="" />
                <Image src={Foto5} alt="" />
                <Image src={Foto6} alt="" />
                <Image src={Foto7} alt="" />
                <Image src={Foto8} alt="" />
                <Image src={Foto9} alt="" />
            </div>
        </section>
    </>
  )
}
