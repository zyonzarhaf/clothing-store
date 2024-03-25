import Image from 'next/image';
import AddToCart from './AddToCart.jsx';

export default function Card({ product }) {
  const {
    brand,
    name,
    price,
    images
  } = product;

  return (
    <div className="card">
      <div>
        <Image
          className="card-image"
          src={images[0]}
          alt={name}
          height={600}
          width={400}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        /> 
      </div>
      <div className="card-footer">
        <p>{brand}</p>
        <p>{name}</p>
        <p>{price}</p>
        <AddToCart />
      </div>
    </div>
  )
}
