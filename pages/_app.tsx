import * as React from "react";
import { QueryClient } from "react-query";
import { MedusaProvider } from "medusa-react";

// Your react-query's query client config
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 30000,
      retry: 1,
    },
  },
});

import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl="http://localhost:9000"
    >
      <Component {...pageProps} />
    </MedusaProvider>
  );
}
