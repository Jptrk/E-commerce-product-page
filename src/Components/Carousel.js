//Images
import prev from "../Images/icon-previous.svg";
import next from "../Images/icon-next.svg";
import close from "../Images/icon-close-orange.svg";
//Library
import styled from "styled-components";
import { useState } from "react";
import Thumbnails from "./Thumbnails";

function Carousel({ images, page, setCarousel }) {
  //States
  const [active, setActive] = useState(page);

  //Handlers
  const nextHandler = () => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevHandler = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const closeHandler = () => {
    setCarousel(false);
  };
  const activeImageHandler = (key) => {
    setActive(key);
  };

  return (
    <Body>
      <div className="overlay" onClick={closeHandler}></div>
      <Slide>
        <div className="exit">
          <img src={close} alt="Close" onClick={closeHandler} />
        </div>

        <div className="active-container">
          <Controls>
            <div className="prev" onClick={prevHandler}>
              <img src={prev} alt="Previous" />
            </div>
            <div className="next" onClick={nextHandler}>
              <img src={next} alt="Next" />
            </div>
          </Controls>
          <img
            src={images[active]}
            alt={images[active]}
            className="active-image"
          />
        </div>

        <div className="thumbnails">
          <Thumbnails
            data={images}
            activeImageHandler={activeImageHandler}
            preview={active}
          />
        </div>
      </Slide>
    </Body>
  );
}

const Body = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 100;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: hsl(0, 0%, 0%, 75%);

    z-index: -1;
  }
`;

const Slide = styled.div`
  margin: auto;
  width: fit-content;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  .exit {
    position: absolute;
    top: -35px;
    width: fit-content;
    margin: auto;
    width: 500px;
    display: flex;
    justify-content: right;

    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  .active-container {
    position: relative;
  }

  .active-image {
    width: 500px;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
  }

  .thumbnails {
    width: 450px;
    margin: auto;
  }

  @media (max-height: 720px) {
    .active-image {
      height: 500px;
    }

    .thumbnails {
      display: none;
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
  width: 550px;
  z-index: 100;
  user-select: none;

  .next,
  .prev {
    background-color: white;
    height: 50px;
    width: 50px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export default Carousel;
