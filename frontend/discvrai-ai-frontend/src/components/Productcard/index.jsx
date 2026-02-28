import './index.css'

export default function ProductCard({ product }) {
  return (
      <div className="col-12 col-md-4 mt-2">
        <div className="product-card card h-100">
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <h6>₹{product.price}</h6>
          </div>
        </div>
      </div>
  );
}