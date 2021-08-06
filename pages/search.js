import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Response from "../Response";
import SearchResults from "../components/SearchResults";

function Search({ results }) {

  const { query } = useRouter();

  return (
    <div>
      <Head>
        <title>{query.val} - Search Results</title>
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.val}&start=${startIndex}`
  ).then((res) => res.json());

  // After the server has rendered. Pass the results to the client
  return {
    props: {
      results: data,
    },
  };
}
