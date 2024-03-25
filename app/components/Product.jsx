async function fetchProduct(_id) {
  const response = await fetch(`http://localhost:8000/api/products/${_id}`);
  const data = await response.json();
  return data;
}

export default async function Product({ _id }) {
  const product = await fetchProduct(_id);

  return (
    <div>
    </div>
  )
}
