"use client"
import styles from '@/styles/Forms.module.css'
import { signIn } from 'next-auth/react'
import { useRef } from 'react'

export default function Login(){
    const email = useRef("")
    const senha = useRef("")

    const onSubmit = async () => {
        const result = await signIn("credentials", {
            email: email.current,
            password: senha.current,
            redirect:true,
            callbackUrl:"/",
        })
    }
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
                        <form className={styles.forms}>
                            <h1>Login</h1>
                            <div>
                                <input onChange={(e) => (email.current = e.target.value)} type='email' placeholder='E-mail'/>
                                <input onChange={(e) => (senha.current = e.target.value)} type='password' placeholder='Senha'/>
                            </div>
                            <div className={styles.send}>
                                <button onClick={onSubmit} className={styles.btnEntrar}>Entrar</button>
                                <p>Não tem conta? <a href='#'>Crie agora</a>!</p>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}