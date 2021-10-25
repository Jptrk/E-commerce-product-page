//Products
import data from "../Util/Product";
//Images
import minus from "../Images/icon-minus.svg";
import plus from "../Images/icon-plus.svg";
import prev from "../Images/icon-previous.svg";
import next from "../Images/icon-next.svg";
import cart from "../Images/icon-cart-white.svg";

//Library
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
//Components
import Carousel from "./Carousel";
import Thumbnails from "./Thumbnails";

const Product = () => {
  const [quantity, setQuantity] = useState(0);
  const [preview, setPreview] = useState(0);
  const [carousel, setCarousel] = useState(false);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const imageWidth = ref.current.offsetWidth;
    setCarouselPosition(imageWidth * preview);
  }, [preview]);

  //Handlers
  const discountPrice = (price, percentage) => {
    return price * (percentage / 100);
  };

  const nextHandler = () => {
    setPreview((prev) => (prev === data[0].images.length - 1 ? 0 : prev + 1));
  };
  const prevHandler = () => {
    setPreview((prev) => (prev === 0 ? data[0].images.length - 1 : prev - 1));
  };

  const quantityHandler = (increment) => {
    if (increment) {
      setQuantity((prev) => (prev === 10 ? prev : prev + 1));
    } else {
      setQuantity((prev) => (prev === 0 ? prev : prev - 1));
    }
  };

  const activeImageHandler = (key) => {
    setPreview(key);
  };

  return (
    <>
      {carousel && (
        <Carousel
          images={data[0]?.images}
          page={preview}
          setCarousel={setCarousel}
        />
      )}

      <Body>
        <Images>
          <div className="displayed">
            <div className="desktop-carousel">
              <div className="overlay" onClick={() => setCarousel(true)}></div>
              <img
                src={data[0].images[preview]}
                alt={data[0].images[0]}
                className="current-image"
              />
            </div>
            <div className="mobile-carousel">
              <div
                className="slider"
                style={{ transform: `translateX(-${carouselPosition}px)` }}
              >
                {data[0].images.map((image, key) => (
                  <img
                    src={image}
                    alt={image}
                    key={key}
                    className="current-image"
                    ref={ref}
                  />
                ))}
              </div>

              <Controls>
                <div className="prev" onClick={prevHandler}>
                  <img src={prev} alt="Previous" />
                </div>
                <div className="next" onClick={nextHandler}>
                  <img src={next} alt="Next" />
                </div>
              </Controls>
            </div>
          </div>

          <div className="thumbnails">
            <Thumbnails
              data={data[0].images}
              activeImageHandler={activeImageHandler}
              preview={preview}
            />
          </div>
        </Images>
        <Details>
          <Name>
            <div className="brand">{data[0].brand}</div>
            <div className="name">{data[0].name}</div>
          </Name>
          <ProductDetails>
            <Description>{data[0].description}</Description>
            <Price>
              <div className="total-price">
                <div className="discouted-price">
                  <p>
                    ${discountPrice(data[0].price, data[0].discountPercentage)}
                    .00
                  </p>
                </div>
                <div className="percentage">
                  <p>{data[0].discountPercentage}%</p>
                </div>
              </div>
              <div className="original-price">${data[0].price}.00</div>
            </Price>
          </ProductDetails>
          <Buttons>
            <div className="quantity">
              <div
                className="dec"
                onClick={() => {
                  quantityHandler(false);
                }}
              >
                <img src={minus} alt={minus} />
              </div>
              <div className="current-quantity">{quantity}</div>
              <div
                className="inc"
                onClick={() => {
                  quantityHandler(true);
                }}
              >
                <img src={plus} alt={plus} />
              </div>
            </div>
            <div className="add-to-cart">
              <button>
                <img src={cart} alt={cart} /> Add to cart
              </button>
            </div>
          </Buttons>
        </Details>
      </Body>
    </>
  );
};

const Body = styled.div`
  max-width: 1152px;
  margin: auto;
  padding: 90px 50px 90px 50px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));

  img {
    cursor: pointer;
    user-select: none;
  }

  @media (max-width: 1099px) {
    grid-column-gap: 40px;
  }

  @media (max-width: 1039px) {
    padding: 90px;
  }

  @media (max-width: 768px) {
    padding: 70px 0 0 0;
    grid-template-columns: 100%;
  }
`;

const Images = styled.div`
  width: 450px;

  .displayed {
    position: relative;
    .overlay {
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
    }

    .current-image {
      width: 100%;
      border-radius: 20px;
    }
  }

  .mobile-carousel {
    display: none;
    overflow: hidden;
  }

  @media (max-width: 1099px) {
    width: 100%;
  }

  @media (max-width: 1039px) {
    .desktop-carousel {
      display: none;
    }

    .mobile-carousel {
      /* overflow: hidden; */
      display: block;
      .slider {
        display: flex;
        transition: 500ms ease;
      }
    }

    .thumbnails {
      display: none;
    }

    .overlay {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .displayed {
      .current-image {
        border-radius: 0;
      }
    }
  }
`;

const Details = styled.div`
  padding: 40px;
  @media (max-width: 1099px) {
    padding: 40px 0;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Name = styled.div`
  .brand {
    text-transform: uppercase;
    color: hsl(26, 100%, 55%);
    font-weight: 700;
    font-size: 13px;
    letter-spacing: 1.5px;
    margin-bottom: 15px;
  }

  .name {
    font-size: 45px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    .name {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }
`;

const ProductDetails = styled.div``;

const Description = styled.div`
  color: hsl(219, 9%, 45%);
  margin-bottom: 30px;
  line-height: 1.6;
`;

const Price = styled.div`
  margin-bottom: 30px;
  .total-price {
    font-weight: 700;
    display: flex;
    align-items: center;
  }

  .discouted-price {
    font-size: 25px;
    margin-right: 15px;
  }

  .original-price {
    margin-top: 10px;
    font-weight: 700;
    text-decoration: line-through;
    color: hsl(220, 14%, 75%);
  }

  .percentage {
    padding: 3px 7px;
    font-weight: 600;
    border-radius: 6px;
    background-color: hsl(25, 100%, 94%);
    color: hsl(26, 100%, 55%);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .original-price {
      margin-top: 0px;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;

  .quantity {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: hsl(223, 64%, 98%);
    width: fit-content;
    height: 55px;
    width: 160px;
    border-radius: 10px;
    user-select: none;
    margin-right: 20px;

    .current-quantity {
      font-weight: 700;
      width: 50px;
      text-align: center;
    }

    .dec {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 25px;
      width: 25px;
      padding: 25px;
      cursor: pointer;

      &:hover {
        opacity: 50%;
        transition: 100ms ease;
      }
    }

    .inc {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 25px;
      width: 25px;
      padding: 25px;
      cursor: pointer;
      &:hover {
        opacity: 50%;
        transition: 100ms ease;
      }
    }
  }

  .add-to-cart {
    button {
      height: 55px;
      width: 250px;
      background-color: hsl(26, 100%, 55%);
      border: none;
      border-radius: 10px;

      align-items: center;
      display: flex;
      justify-content: center;

      img {
        margin-right: 10px;
      }

      color: white;
      font-weight: 700;
      cursor: pointer;
      transition: 100ms ease;

      &:hover {
        background-color: hsl(26, 100%, 55%, 50%);
      }
    }
  }

  @media (max-width: 499px) {
    .quantity {
      width: 100%;
      margin-bottom: 20px;
      margin-right: 0;
    }

    .add-to-cart {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
`;

const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-between;
  width: 90%;
  z-index: 100;
  user-select: none;

  .next,
  .prev {
    background-color: white;
    height: 40px;
    width: 40px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;
export default Product;
