import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./Components/Home/Home";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
