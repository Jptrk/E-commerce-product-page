//Images
import Logo from "../Images/logo.svg";
import Cart from "../Images/icon-cart.svg";
import Avatar from "../Images/image-avatar.png";
import Burger from "../Images/icon-menu.svg";
import Close from "../Images/icon-close.svg";
//Library
import styled from "styled-components";
import { useState } from "react";
//Components
import CartComp from "./Cart";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showCart, setshowCart] = useState(false);
  return (
    <Nav>
      <Links>
        <img
          src={Burger}
          alt={Burger}
          className="burger"
          onClick={() => setShow((prev) => !prev)}
        />
        <img src={Logo} alt="logo" className="logo" />

        <ul className={show ? "show" : ""}>
          <li>
            <img
              src={Close}
              alt={Close}
              className="close"
              onClick={() => setShow((prev) => !prev)}
            />
          </li>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div
          className={show ? "overlay showOverlay" : "overlay"}
          onClick={() => setShow((prev) => !prev)}
        ></div>
      </Links>
      <Profile>
        <div className="cart">
          <div className="item-count">1</div>
          <img
            src={Cart}
            alt={Cart}
            onClick={() => setshowCart((prev) => !prev)}
          />
          {showCart && <CartComp />}
        </div>
        <div className="avatar">
          <img src={Avatar} alt={Avatar} />
        </div>
      </Profile>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1152px;
  height: 110px;
  margin: auto;
  border-bottom: solid 1px hsl(223, 64%, 95%);
  z-index: 1000;

  @media (max-width: 1212px) {
    margin: 0 30px;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    width: 100%;
    height: 70px;
    padding: 30px 20px;
    margin: 0;
    border-bottom: none;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  .burger {
    margin-right: 20px;

    cursor: pointer;
    display: none;
  }

  .logo {
    margin-right: 40px;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;

    .close {
      display: none;
    }

    li {
      display: flex;
      align-items: center;
      margin: 0 15px;
      color: hsl(219, 9%, 45%);
      cursor: pointer;
      height: 100%;
      position: relative;

      &::after {
        content: "";
        height: 4px;
        width: 0%;
        background-color: hsl(26, 100%, 55%);

        position: absolute;
        bottom: 0;
        left: 0;
        transition: 500ms ease;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }

    li:nth-of-type(1) {
      &:hover {
        &::after {
          width: 0%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .burger {
      display: block;
    }
    ul {
      position: fixed;
      top: 0;
      left: -100%;
      background-color: white;
      width: 70%;
      overflow: hidden;
      flex-direction: column;
      align-items: flex-start;
      padding: 30px 20px;
      z-index: 200;
      transition: 500ms ease;

      .close {
        display: block;
        margin-bottom: 40px;
      }

      li {
        padding: 0;
        margin: 0;
        height: 50px;
        font-weight: 700;
        color: black;
      }
    }

    .show {
      left: 0;
    }

    .overlay {
      height: 100vh;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      pointer-events: none;
      opacity: 0;
      background-color: hsl(0, 0%, 0%, 75%);
      transition: 500ms ease;
    }

    .showOverlay {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;

  .cart {
    position: relative;
    margin-right: 50px;

    img {
      cursor: pointer;
      transition: 200ms ease;
      z-index: 1;
    }

    .item-count {
      background-color: hsl(26, 100%, 55%);
      font-size: 9px;
      width: 18px;
      font-weight: bold;
      border-radius: 9px;
      color: white;
      text-align: center;
      transform: translate(10px, 8px);
      z-index: 2;
    }
  }

  .avatar {
    img {
      width: 50px;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    .cart {
      margin-right: 20px;
      position: initial;
    }

    .avatar {
      img {
        width: 25px;
      }
    }
  }
`;

export default Navbar;
