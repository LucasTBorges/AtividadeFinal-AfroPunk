import '@/styles/globals.css'
/* import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { NextComponentType, NextPageContext } from 'next';

interface IProps{
  session: any;
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
}

export default function App({ session, Component, pageProps }: IProps) {
  return ( 
    //<SessionProvider session={session}>
      <Component {...pageProps} />
    //</SessionProvider>
  )
} */

import { SessionProvider } from "next-auth/react"
import type { NextComponentType, NextPageContext } from 'next';

interface IProps{
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
}

export default function App({ Component, pageProps: { session, ...pageProps } }: IProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}