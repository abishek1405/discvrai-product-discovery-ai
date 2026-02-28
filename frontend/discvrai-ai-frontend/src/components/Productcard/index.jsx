import './index.css'

export default function ProductCard({ product }) {
  return (
    <div className="product-card col-12 col-md-4 com-xl-3">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>{product.price}</h4>
    </div>
  );
}