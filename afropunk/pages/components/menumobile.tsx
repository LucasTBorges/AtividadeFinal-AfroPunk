import styles from '@/styles/menumobile.module.css'

export default function MenuMobile() {
    return (
        <>
            <footer className={styles.mainMobile}>
                <a href='/account'>
                    <div>
                        <img src="./images/accountmobile.svg" alt="ícone para acessar o minha conta"></img>
                        <p>Minha conta</p>
                    </div>
                </a>
                <a>
                <div>
                    <img src="./images/buymobile.svg" alt="ícone para acessar a página de compras"></img>
                    <p>Comprar</p>
                </div>
                </a>
                <a href='/myticket'>
                <div>
                    <img src="./images/ticketmobile.svg" alt="ícone para acessar o meus ingressos"></img>
                    <p>Ingresso</p>
                </div>
                </a>
            </footer>
        </>
    )
}