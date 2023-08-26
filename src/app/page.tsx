'use client';
import Image from 'next/image';

// GraphQL
import { gql, useQuery } from '@apollo/client';

// SQL
import supabase from "supabase";
import { useEffect } from "react";

const GET_TEST_USER = gql`
  query {
    graphql_client_testCollection {
      edges {
        node {
          exist
        }
      }
    }
  }
`;

export default async function Home() {
  // const { loading, data, error } = useQuery(GET_TEST_USER);
  // const userExist = data?.graphql_client_testCollection.edges[0];

  const { data: graphql_client_test, error } = await supabase.from('graphql_client_test').select('exist');
  const userExist = graphql_client_test[0].exist;

  return (
    <main className="p-24">

      <div className="text-center mb-4">
        <Image
          className="inline-block mb-5"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <br />
        <h1 className="text-3xl font-medium">
          Supabase
        </h1>
      </div>

      <div className="py-10">
        <h2 className="text-3xl font-medium">
          App Router Page
        </h2>
        <div className="py-3">
          {/* {loading && 'Loading...'} */}
          {userExist && 'User Exist'}
          {error && 'Error'}
        </div>
      </div>

    </main>
  );
};
