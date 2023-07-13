import LoginHeader from "./components/loginheader"
import styles from "@/styles/myticket.module.css"
export default function MyTicket() {
    
    return (
        <>
        <main className={styles.main}>
            <LoginHeader/>
            <div>
                <div>
                    <h1>Meus ingressos</h1>
                </div>
                <div>
                    <p>Ativos</p>
                    <p>Encerrados</p>
                </div>
            </div>
        </main>
        </>
    )
}