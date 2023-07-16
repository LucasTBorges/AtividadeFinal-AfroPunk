import styles from "@/styles/ticketinfo.module.css";
import LoginHeaderWhite from "./components/loginheaderwhite";
import { useRouter } from "next/router";
import Payments from "./components/payments";
import { useState } from "react";
import MenuMobileWhite from "./components/menumobilewhite";

export default function TicketInfo() {
    const router = useRouter();
    const {visor1, visor2, visor3, subtotal} = router.query;
    const inteiratext = '1º Lote [INTEIRA]'
    const meiatext = '1º Lote [MEIA] - EXCLUSIVE FOR STUDENT, ELDERLY, TRANS, PWD, TEACHER'
    const meiasocialtext = '1º Lote [MEIA SOCIAL] - SOCIAL TICKET'
    const valortotal = typeof subtotal === 'string' ? parseInt(subtotal) : 0
    const [paymentsInfoVisible, setPaymentsInfoVisible] = useState<boolean>(false);
    const inteira = typeof visor3 === 'string' ? parseInt(visor3) : 0
    const meia = typeof visor1 === 'string' ? parseInt(visor1) : 0
    const meiasocial = typeof visor2 === 'string' ? parseInt(visor2) : 0

    const handlePayments = () => {
      setPaymentsInfoVisible(!paymentsInfoVisible);
      handleTicket();
    }

    const handleTicket = () => {
      try{
        fetch("/api/compra", {
          method: "Post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            inteira: inteira,
            meia: meia, 
            meiasocial: meiasocial
          })
        })
      } catch(error){
        console.log(error);
      }
    }
  return (
    <>
      <main className={styles.mainTicketInfo}>
        <LoginHeaderWhite />
        <section>
          <div className={styles.sectionone}>
          <div className={styles.detailsTickets}>
            <h1>Resumo da compra</h1>
            <div className={styles.mobileborder}>
            <div className={styles.detailsTicketsTitle}>
              <h2>Festival AFROPUNK Bahia 2023</h2>
            </div>
            <div className={styles.ticketDescription}>
              <p>Sábado, 18 de novembro de 2023 às 16h00</p>
              <p>Arena</p>
              {visor1 && visor1 !== '0' && <p>{visor1}x {meiatext}</p>}
              {visor2 && visor2 !== '0'&& <p>{visor2}x {meiasocialtext}</p>}
              {visor3 && visor3 !== '0'&& <p>{visor3}x {inteiratext}</p>}
              
            </div>
            <div className={styles.ticketValue}>
              <p>R$ {valortotal.toFixed(2)}</p>
            </div>
              
          </div>
          </div>
          <div className={styles.paymentFooter}>
              <p>Métodos de pagamento</p>
              <img src="./images/paymentsmethod.svg" />
            </div>
          
          </div>
          <a href='#pagamento' className={styles.btnmobile}>Ir para pagamento</a>
          <div className={styles.ticketForms}>
            <div id="pagamento" className={styles.ticketInfor}>
              <span>1</span>
              <div>
                <h2>Informações dos ingressos</h2>
                {!paymentsInfoVisible &&(
                <>{visor1 && visor1 !== '0' && <p>{visor1}x {meiatext}</p>}
                {visor2 && visor2 !== '0'&& <p>{visor2}x {meiasocialtext}</p>}
                {visor3 && visor3 !== '0'&& <p>{visor3}x {inteiratext}</p>}
                <div>
                  <label>Você tem alguma deficiência?</label>
                  <input type="text"></input>
                </div>
                <div className={styles.ticketInfoBtn}>
                  <button onClick={handlePayments}>Avançar</button>
                </div></>)}
              </div>
            </div>
            <div className={styles.paymentsInfor}>
              <span>2</span>
              <div>
                <h2>Informações de pagamento</h2>
                <div>
                  {paymentsInfoVisible && <Payments/>}
                </div>
              </div>
            </div>
          </div>
        </section>
        <MenuMobileWhite/>
      </main>
    </>
  );
}
