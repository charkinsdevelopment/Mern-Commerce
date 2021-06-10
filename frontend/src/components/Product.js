import react from "react";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;

  return (
    <div key={"prod-" + product.id} className="card">
      <a href={`/product/${product.id}`}>
        <img className="medium" src={product.image} alt={product.name} />
        <div className="card-body">
          <h2>{product.name}</h2>
          <Rating rating={product.rating} reviews={product.reviews}></Rating>
          <div className="price">${product.price}</div>
        </div>
      </a>
    </div>
  );
}
