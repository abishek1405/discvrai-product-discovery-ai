export default function ProductCard({ product }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}