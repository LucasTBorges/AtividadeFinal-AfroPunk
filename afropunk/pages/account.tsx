import styles from "@/styles/account.module.css";

export default function Account() {
    return (
        <>
            <main className={styles.main}>
                <header>
                    <p>.</p>
                    <img className={styles.logo} src="./images/afropunk.svg"/>
                    <button><img className={styles.profile} src="./images/myaccount.svg"/></button>
                </header>
                <section>
                    <div className={styles.menu}>
                        <h1>Minha conta</h1>
                        <button>Editar</button>
                    </div>
                    <div>
                        <form className={styles.forms}>
                            <div>
                                <input type="text" placeholder="Nome completo"/>
                            </div>
                            <div>
                                <input type="email" placeholder="email@email.com"/>
                            </div>
                            <div className={styles.size}>
                                <input type="text" placeholder="000.000.000-00"/>
                                <input type="number" placeholder="Idade" min="0"/>
                            </div>
                            <div className={styles.size}>
                                <input type="text" placeholder="(00) 00000-0000"/>
                            </div>
                            <div>
                                <input type="text" placeholder="Endereço"/>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}