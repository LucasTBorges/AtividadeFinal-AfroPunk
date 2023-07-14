import LoginHeader from "./components/loginheader";
import styles from "@/styles/myticket.module.css";
import { useState, useEffect } from "react";
import { IngressoObj } from "@/services/services";
import UserTicket from "./components/userticket";
export default function MyTicket() {
    const [active, setActive] = useState<boolean>(false);
    const [closed, setClosed] = useState<boolean>(false);
    const [tickets, setTickets] = useState<IngressoObj[] | null>(null);
  
    const handleActive = () => {
      setActive(true);
      setClosed(false);
    };
  
    const handleClosed = () => {
      setClosed(true);
      setActive(false);
    };
  
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("/api/usuario/ingressos");
        if (response.ok) {
          const data = await response.json();
          setTickets(data);
        } else {
          console.log("Erro ao obter os ingressos:", response.status);
        }
      } catch (error) {
        console.log("Erro ao obter os ingressos:", error);
      }
    };
    fetchTickets();
  }, []);

  return (
    <>
      <main className={styles.main}>
        <LoginHeader />
        <section>
          <div className={styles.title}>
            <h1>Meus ingressos</h1>
          </div>
          <div className={styles.menu}>
            <button onClick={handleActive}>Ativos</button>
            <button onClick={handleClosed}>Encerrados</button>
          </div>
          <div className={styles.myticket}>
            
            {active && (
              <>
                {tickets && tickets.length > 0 ? (
                  tickets.map((ticket) => <div className={styles.divTickets}><p key={ticket.id}><UserTicket/></p></div>)
                ) : (
                  <>
                    <p>Não localizamos nenhum ingresso</p>
                    <button>COMPRAR INGRESSO</button>
                  </>
                )}
              </>
            )}
            {closed && <p>Não localizamos nenhum ingresso</p>}
          </div>
        </section>
      </main>
    </>
  );
}
