import Product from "../../../models/product/product";
import productsService from "../../../services/product";
import "./Card.css";

interface CardProps {
  product: Product;
  removeProd(id: string): void;
}
export default function Card(props: CardProps): JSX.Element {
  const { id, productName, expirationTime, manufactureTime, price } =
    props.product;

  async function deleteMe() {
    try {
      await productsService.removeProduct(id);
      props.removeProd(id);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div className="Card">
      <h4>{productName}</h4>
      <p>{}</p>
      <p>manufacture at: {new Date(manufactureTime).toLocaleDateString()}</p>
      <p>expiration at: {new Date(expirationTime).toLocaleDateString()}</p>
      <h3>price is - {price}</h3>
      <button onClick={deleteMe}>delete me </button>
    </div>
  );
}
