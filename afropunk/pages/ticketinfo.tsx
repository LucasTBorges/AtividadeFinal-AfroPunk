import styles from "@/styles/ticketinfo.module.css";
import LoginHeaderWhite from "./components/loginheaderwhite";
export default function TicketInfo() {
  return (
    <>
      <main className={styles.mainTicketInfo}>
        <LoginHeaderWhite />
        <section>
          <div className={styles.detailsTickets}>
            <h1>Resumo da compra</h1>
            <div className={styles.detailsTicketsTitle}>
              <h2>Festival AFROPUNK Bahia 2023</h2>
            </div>
            <div className={styles.ticketDescription}>
              <p>Sábado, 18 de novembro de 2023 às 16h00</p>

              <p>Arena</p>
              <p>Descrição do ingresso</p>
            </div>
            <div className={styles.ticketValue}>
              <p>R$ 0.00</p>
            </div>
          </div>
          <div className={styles.ticketForms}>
            <div className={styles.ticketInfor}>
              <span>1</span>
              <div>
                <h2>Informações dos ingressos</h2>
                <p>Descrição do ingresso</p>
                <div>
                  <label>Você tem alguma deficiência?</label>
                  <input type="text"></input>
                </div>
                <div className={styles.ticketInfoBtn}>
                  <button>Avançar</button>
                </div>
              </div>
            </div>
            <div className={styles.paymentsInfor}>
              <span>2</span>
              <h2>Informações de pagamento</h2>
            </div>
          </div>
        </section>
        <footer>
          <p>Métodos de pagamento</p>
          <img src="./images/paymentsmethod.svg" />
        </footer>
      </main>
    </>
  );
}
