import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

function Home() {
  const [limit, setLimit] = useState(30);
  const { data, ispending, error } = useFetch(
    "https://dummyjson.com/products?limit=" + limit
  );

  const changeLimit = () => {
    const maxLimit = 194;
    const minLimit = 30;

    if (limit < maxLimit) {
      if (limit === 180) {
        setLimit((prev) => prev + 14);
      } else {
        setLimit((prev) => prev + 30);
      }
    }
  };

  return (
    <section className="hero">
      {data && (
        <>
          <ul className="list card bg-base-100 w-96 shadow-sm">
            {data.products.map((product) => {
              return (
                <li key={product.id}>
                  {" "}
                  <Link to={`product/${product.id}`}>
                    <div className="card bg-base-100 w-96 shadow-sm">
                      <figure>
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          width="200"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{product.title}</h2>
                        <p>{product.description}</p>
                        <h4 className="badge badge-outline badge-warning align-bottom">
                          {product.price}$
                        </h4>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          <button onClick={changeLimit} className="btn btn-secondary">
            Load More
          </button>
        </>
      )}
    </section>
  );
}

export default Home;
