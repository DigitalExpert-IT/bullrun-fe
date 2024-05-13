import "locales";
import theme from "theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { getActiveChain } from "lib/chain";
import { ChakraProvider } from "@chakra-ui/react";
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, walletConnect, trustWallet } from "@thirdweb-dev/react";

const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB || "0";
const targetChain = getActiveChain();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider clientId={CLIENT_ID} supportedWallets={[ metamaskWallet(), coinbaseWallet(),walletConnect(),trustWallet() ]} activeChain={targetChain}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

const Main = ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
      </Head>
    </>
  )
}
