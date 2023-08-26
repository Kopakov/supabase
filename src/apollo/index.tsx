'use client';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ReactNode } from "react";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from 'const';

// if (
//   typeof SUPABASE_URL === 'undefined' ||
//   typeof SUPABASE_ANON_KEY === 'undefined'
// ) {
//   throw new Error(SUPABASE_ERROR_NO_ENVIRONMENTS);
// };

const apolloClient = new ApolloClient({
  uri: SUPABASE_URL,
  cache: new InMemoryCache(),
  headers: {
    apikey: SUPABASE_ANON_KEY,
    authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  },
});

const GraphQlProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};

export default GraphQlProvider;
