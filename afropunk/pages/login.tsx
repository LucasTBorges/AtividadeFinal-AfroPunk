import styles from '@/styles/Forms.module.css'

export default function Login(){
    
    return(
        <>
            <main className={styles.main}>
                <section className={styles.section}>
                    <header className={styles.header}>
                        <img src='./images/afropunk.svg' className={styles.logo}/>
                    </header>
                    <div className={styles.divBtn}>
                        <button className={styles.btnVoltar}>Voltar</button>
                    </div>
                    <div>
                        <form action="" className={styles.forms}>
                            <h1>Login</h1>
                            <div>
                                <input type='email' placeholder='E-mail'/>
                                <input type='password' placeholder='Senha'/>
                            </div>
                            <div className={styles.send}>
                                <button className={styles.btnEntrar}>Entrar</button>
                                <p>Não tem conta? <a href='#'>Crie agora</a>!</p>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}