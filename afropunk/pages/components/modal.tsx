import styles from "@/styles/modal.module.css";

export default function InfoCard() {
  return (
    <>
      <main className={styles.main}>
        <button><div>
          <img src="../images/ticket.svg" />
          <p>Comprar</p>
        </div>
        </button>
        <button><div>
          <img src="../images/ticket.svg" />
          <p>Meus ingressos</p>
        </div>
        </button>
        <button><div>
          <img src="../images/ticket.svg" />
          <p>Sair</p>
        </div>
        </button>
      </main>
    </>
  );
}
