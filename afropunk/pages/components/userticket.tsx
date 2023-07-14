import styles from '@/styles/userticket.module.css'
import TicketOrder from './ticketorder'
import { useState, useEffect } from 'react'
import type { Perfil } from "@/services/services";

interface UserTicketProps {
    id: number,
    tipo: string
}

export default function UserTicket({id, tipo}: UserTicketProps) {
    const [detailsVisible, setDetailsVisible] = useState<boolean>(false);
    const [perfil, setPerfil] = useState<Perfil | null>(null);

    useEffect(() => {
      const fetchPerfil = async () => {
        try {
          const response = await fetch("/api/usuario/perfil");
          if (response.ok) {
            const data = await response.json();
            setPerfil(data);
          } else {
            console.log("Erro ao obter perfil:", response.status);
          }
        } catch (error) {
          console.log("Erro ao obter perfil:", error);
        }
      };
      fetchPerfil();
    }, []);

    const handleDetails = () => {
        setDetailsVisible(!detailsVisible);
    }
    const handleCloseModal = () => {
        setDetailsVisible(false);
    }
    return(
        <>
            <main className={styles.main}>
                {detailsVisible && (<div onClick={handleCloseModal}><TicketOrder pedido={id} nome = {perfil?.nome} email = {perfil?.email} tipo = {tipo}/></div>)}
                <img src="./images/ticketimg.svg" alt="" />
                <div className={styles.info}>
                    <div className={styles.titlediv}>
                        <h1>Festival Afropunk 2023</h1>
                    </div>
                    <div className={styles.content}>
                        <img src="./images/clockicon.svg" alt="" />
                        <p>Dom, 27 Nov • 23:00</p>
                    </div>
                    <div className={styles.content}>
                    <img src="./images/locationicon.svg" alt="" />
                        <p>Parque de Exposições.<br/>
                            Salvador - Bahia
                        </p>
                    </div>
                    <div className={styles.content}>
                        <button onClick={handleDetails} className={styles.modalbtn}>
                            <img src="./images/papericon.svg" alt="" />
                            <p>Ver mais informações</p>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}