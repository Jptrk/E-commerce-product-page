import styled from "styled-components";
import productImage from "../Images/image-product-1-thumbnail.jpg";
import deleteIcon from "../Images/icon-delete.svg";
const Cart = () => {
  return (
    <Body>
      <Header>
        <h3>Cart</h3>
      </Header>
      <Content>
        <div className="thumbnail">
          <img src={productImage} alt="Autumn Limited Edition Sneakers" />
        </div>
        <div className="details">
          <p>
            Autumn Limited Edition...
            <br />
            $125.00 x 3 <strong>$375.00</strong>
          </p>
        </div>
        <div className="delete">
          <img src={deleteIcon} alt="delete" />
        </div>
      </Content>

      <button>Checkout</button>
    </Body>
  );
};

const Body = styled.div`
  width: 350px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 20%);
  background-color: white;

  position: absolute;
  top: calc(100% + 25px);

  right: 50%;
  transform: translateX(50%);
  z-index: 100;

  button {
    margin: 20px 20px 30px 20px;
    height: 55px;
    width: calc(100% - 40px);
    background-color: hsl(26, 100%, 55%);
    border: none;
    border-radius: 10px;

    color: white;
    font-weight: 700;
    cursor: pointer;
    transition: 100ms ease;
    &:hover {
      background-color: hsl(26, 100%, 55%, 50%);
    }
  }

  @media (max-width: 1340px) {
    right: 0;
    transform: translateX(30%);
  }

  @media (max-width: 769px) {
    left: 0;
    top: calc(100% + 10px);
    width: calc(100% - 20px);
    margin: auto;
    transform: translateX(0%);
    max-width: 350px;
  }
`;

const Header = styled.div`
  border-bottom: solid 1px hsl(223, 64%, 95%);
  padding: 20px;
`;

const Content = styled.div`
  padding: 20px;
  line-height: 1.6;
  display: flex;
  align-items: center;

  .thumbnail {
    display: flex;
    align-items: center;
    margin-right: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
      cursor: auto;
    }
  }
  .details {
    margin-right: 20px;
  }
`;

export default Cart;
