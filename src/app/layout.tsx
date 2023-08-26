import type { Metadata } from 'next';

// Supabase GraphQL provider
import GraphQlProvider from 'apollo';

// Styles
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Supabase App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <GraphQlProvider> */}
        {children}
        {/* </GraphQlProvider> */}
      </body>
    </html>
  );
};
