import styles from "@/styles/ticketinfo.module.css";
import LoginHeaderWhite from "./components/loginheaderwhite";
import { useRouter } from "next/router";

export default function TicketInfo() {
    const router = useRouter();
    const {visor1, visor2, visor3, subtotal} = router.query;
    const inteira = '1º Lote [INTEIRA]'
    const meia = '1º Lote [MEIA] - EXCLUSIVE FOR STUDENT, ELDERLY, TRANS, PWD, TEACHER'
    const meiasocial = '1º Lote [MEIA SOCIAL] - SOCIAL TICKET'
    const valortotal = typeof subtotal === 'string' ? parseInt(subtotal) : 0
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
              {visor1 && visor1 !== '0' && <p>{visor1}x {meia}</p>}
              {visor2 && visor2 !== '0'&& <p>{visor2}x {meiasocial}</p>}
              {visor3 && visor3 !== '0'&& <p>{visor3}x {inteira}</p>}
              
            </div>
            <div className={styles.ticketValue}>
              <p>R$ {valortotal.toFixed(2)}</p>
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
