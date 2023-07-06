import styles from "@/styles/forms.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [fullName, setFullName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [age, setAge] = useState<number>(0);

  const handleRegister = () => {
    try {
      fetch("/api/registrar", {
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: fullName,
          email: email,
          senha: password,
          cpf: cpf,
          idade: age,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };
  const handleCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpf(event.target.value);
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const ageValue = parseInt(event.target.value);
    setAge(ageValue);
  };
  return (
    <>
      <main className={styles.main}>
        <section className={styles.section}>
          <header className={styles.header}>
            <img src="./images/afropunk.svg" className={styles.logo} />
          </header>
          <div className={styles.divBtn}>
            <a href="/">
              <button>Voltar</button>
            </a>
          </div>
          <div>
            <form className={styles.register}>
              <h1>Cadastro</h1>
              <div className={styles.registerForm}>
                <div>
                  <input type="text" placeholder="Nome Completo" onChange={handleFullName} />
                  <input type="text" placeholder="CPF" onChange={handleCpf}/>
                </div>
                <div>
                  <input type="email" placeholder="E-mail" onChange={handleEmail}/>
                  <input type="password" placeholder="Senha" onChange={handlePassword}/>
                </div>
                <div className={styles.age}>
                  <input type="number" min={0} placeholder="Idade" onChange={handleAge}/>
                </div>
              </div>
              <div className={styles.send}>
                <button onClick={handleRegister}>Cadastrar</button>
                <p>
                  Já tem conta? <a href="/login">Faça o login</a>!
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}