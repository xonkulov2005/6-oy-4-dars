import React from "react";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data, ispending, error } = useFetch("https://dummyjson.com/products");
  return
  <section>
    
  </section>
}

export default Home;
