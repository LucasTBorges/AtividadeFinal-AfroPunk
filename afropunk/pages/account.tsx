import styles from "@/styles/account.module.css";
import InfoCard from "./components/modal";
import React, { useState, useEffect, ChangeEvent } from "react";
import type { Perfil } from "@/services/services";

export default function Account() {
  const [infoCardVisible, setInfoCardVisible] = useState<boolean>(false);
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
        const {nome, idade, telefone, endereco} = event.currentTarget.elements as any;
        const body = JSON.stringify({nome: nome.value, idade: parseInt(idade.value), telefone: telefone.value, endereco: endereco.value});

        const response = await fetch('/api/usuario/perfil', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        });
        if (response.ok) {
            const data = await response.json();
            setPerfil(data);
        } else {
            console.log('Erro ao atualizar o perfil: ', response.status);
        }
        alert('Usuário atualizado')
    } catch (error){
        console.log('Erro ao atualizar o perfil:', error)
    }
  };

  const handleVisible = () => {
    setInfoCardVisible(!infoCardVisible);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPerfil(prevPerfil => ({
      ...prevPerfil,
      [name]: value !== "" ? value : "",
    }) as Perfil);
  };
  
  
  return (
    <>
      <main className={styles.main}>
        {infoCardVisible && <InfoCard />}
        <header>
          <p>.</p>
          <a href="/"><img className={styles.logo} src="./images/afropunk.svg" alt="Logotipo do Afropunk"/></a>
          <button onClick={handleVisible}>
            <img className={styles.profile} src="./images/myaccount.svg" alt="ícone para informações da conta" />
          </button>
        </header>
        <section>
          <div>
            <form className={styles.forms} onSubmit={handleSubmit}>
              <div className={styles.menu}>
                <h1>Minha conta</h1>
                <button type="submit">Editar</button>
              </div>
              <div>
              <input
                  type="text"
                  placeholder="Nome completo"
                  value={perfil?.nome || ""}
                  onChange={handleInputChange}
                  name="nome"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={perfil?.email || ""}
                  onChange={handleInputChange}
                  name="email"
                  readOnly
                />
              </div>
              <div className={styles.size}>
                <input
                  type="text"
                  placeholder="000.000.000-00"
                  value={perfil?.cpf || ""}
                  onChange={handleInputChange}
                  name="cpf"
                  readOnly
                />
                <input
                  type="number"
                  placeholder="Idade"
                  min="0"
                  value={perfil?.idade || ""}
                  onChange={handleInputChange}
                  name="idade"
                />
              </div>
              <div className={styles.size}>
                <input
                  type="text"
                  placeholder="(00) 00000-0000"
                  value={perfil?.telefone || ""}
                  onChange={handleInputChange}
                  name="telefone"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Endereço"
                  value={perfil?.endereco || ""}
                  onChange={handleInputChange}
                  name="endereco"
                />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
