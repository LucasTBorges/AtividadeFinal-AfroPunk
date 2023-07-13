import styles from '@/styles/userticket.module.css'

export default function UserTicket() {
    return(
        <>
            <main className={styles.main}>
                <img src="./images/ticketimg.svg" alt="" />
                <div className={styles.info}>
                    <div className={styles.titlediv}>
                        <h1>Festival Afropunk 2023</h1>
                    </div>
                    <div className={styles.content}>
                        <img src="./images/clockicon.svg" alt="" />
                        <p>Dom, 27 Nov • 23:00</p>
                    </div>
                    <div className={styles.content}>
                    <img src="./images/locationicon.svg" alt="" />
                        <p>Parque de Exposições.<br/>
                            Salvador - Bahia
                        </p>
                    </div>
                    <div className={styles.content}>
                        <button>
                            <img src="./images/papericon.svg" alt="" />
                            <p>Ver mais informações</p>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}