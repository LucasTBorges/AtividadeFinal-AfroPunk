import styles from '@/styles/forms.module.css'

export default function Register() {
    return(
        <>
            <main className={styles.main}>
                <section className={styles.section}>
                    <header className={styles.header}>
                        <img src='./images/afropunk.svg' className={styles.logo}/>
                    </header>
                    <div className={styles.divBtn}>
                        <a href="/"><button>Voltar</button></a>
                    </div>
                    <div>
                        <form className={styles.register}>
                            <h1>Cadastro</h1>
                            <div className={styles.registerForm}>
                            <div>
                                <input type='text' placeholder='Nome Completo'/>
                                <input type='text' placeholder='CPF'/>
                            </div>
                            <div>
                                <input type='email' placeholder='E-mail'/>
                                <input type='password' placeholder='Senha'/>
                            </div>
                            <div className={styles.age}>
                                <input type='number' placeholder='Idade'/>
                            </div>
                            </div>
                            <div className={styles.send}>
                                <button >Cadastrar</button>
                                <p>Já tem conta? <a href='/login'>Faça o login</a>!</p>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}
