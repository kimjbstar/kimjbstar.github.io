import type { AppProps } from "next/app"
import "../styles/globals.css"
import "../styles/markdown.css"
import { Noto_Sans_KR } from "@next/font/google"
import { prefix } from "@/config/config"
import { AppProvider } from "@/context/context"
import Head from "next/head"

const defaultfont = Noto_Sans_KR({ subsets: ["latin"], weight: "100" })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <AppProvider value={{ prefix }}>
        <main className={defaultfont.className}>
          <Component {...pageProps} />
        </main>
      </AppProvider>
    </>
  )
}
