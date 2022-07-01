import type { AppProps } from "next/app";
import { Hydrate, QueryClientProvider } from "react-query";
import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";
import { getSdk } from "../src/generated/graphql";

const gqlClient = new GraphQLClient("http://localhost:3000/api/graphql");
export const api = getSdk(gqlClient);

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
