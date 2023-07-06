"use client";
import styles from "@/styles/forms.module.css";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken } from "next-auth/react";
import Link from 'next/link'

export default function Login({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.section}>
          <header className={styles.header}>
            <img src="./images/afropunk.svg" />
          </header>
          <div className={styles.divBtn}>
            <a href="/">
              <button>Voltar</button>
            </a>
          </div>
          <div>
            <form
              className={styles.forms}
              method="post"
              action="/api/auth/callback/credentials"
            >
              <h1>Login</h1>
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <label>
                <input name="email" type="text" placeholder="E-mail" />
              </label>
              <label>
                <input name="password" type="password" placeholder="Senha" />
              </label>
              <div className={styles.send}>
                <button type="submit">Entrar</button>
                <p>
                  Não tem conta? <a href="/register">Crie agora</a>!
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
