import styles from "@/styles/loginheaderwhite.module.css";
import InfoCardWhite from "./modalwhite";
import { useState } from "react";

export default function LoginHeaderWhite() {
  const [infoCardVisible, setInfoCardVisible] = useState<boolean>(false);

  const handleVisible = () => {
    setInfoCardVisible(!infoCardVisible);
  };
  return (
    <>
    <main className={styles.main}>
      {infoCardVisible && <InfoCardWhite />}
      <header>
        <p>.</p>
        <a href="/">
          <img
            className={styles.logo}
            src="./images/afropunkblack.svg"
            alt="Logotipo do Afropunk"
          />
        </a>
        <button onClick={handleVisible}>
          <img
            className={styles.profile}
            src="./images/myaccountblack.svg"
            alt="ícone para informações da conta"
          />
        </button>
      </header>
      </main>
    </>
  );
}
