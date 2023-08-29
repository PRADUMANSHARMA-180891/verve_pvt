import "./Cart.css";

const Card = ({ post }) => {
  return (
    <div className="card">
      <p className="card__title">{post.Product_Name}</p>
      <p className="card__author">{post.Product_Name}</p>
      <p className="card__body">{post.Brand_Name}</p>
      <p className="card__body">{post.Product_image}</p>
      <p className="card__body">{post.Price}</p>
      <p className="card__body">{post.Unit_Name}</p>
      <p className="card__body">{post.Unit_quantity}</p>
      <p className="card__body">{post.Product_description}</p>
    </div>
  );
};

export default Card;
