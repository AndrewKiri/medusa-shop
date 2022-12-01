import * as React from "react";
import { QueryClient } from "react-query";
import { MedusaProvider } from "medusa-react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl="/api"
    >
      <Component {...pageProps} />
    </MedusaProvider>
  );
}
