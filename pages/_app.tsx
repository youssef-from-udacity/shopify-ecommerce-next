
import "@assets/main.css"
import 'keen-slider/keen-slider.min.css'
import { AppProps } from "next/app"
import { FC } from "react"
import { UIProvider } from "@components/ui/context"
import { Layout } from '@components/common'


function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC}}) {
  const LayoutComponent = pageProps.layout ? pageProps.layout : Layout

  return (
    <UIProvider>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </UIProvider>
  )
}

export default MyApp
