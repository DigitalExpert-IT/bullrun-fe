import theme from "theme";
import "locales";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const CLIENT_ID = process.env.NEXT_PUBLIC_THIRDWEB || "0";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider clientId={CLIENT_ID}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}
