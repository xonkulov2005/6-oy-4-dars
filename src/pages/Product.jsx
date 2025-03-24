import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const {
    data: product,
    ispending,
    error,
  } = useFetch(`https://dummyjson.com/products/${id}`);

  return (
    <section>
      {ispending && <h2>Loading...</h2>}
      {error && <h2>Error: {error}</h2>}
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.thumbnail} alt={product.title} width="200" />
        </div>
      )}
    </section>
  );
}

export default Product;
