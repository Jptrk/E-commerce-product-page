import styled from "styled-components";

function Thumbnails({ data, activeImageHandler, preview }) {
  return (
    <Body>
      {data.map((image, key) => (
        <div
          key={key}
          className={key === preview ? "thumb-item active" : "thumb-item"}
          onClick={() => activeImageHandler(key)}
        >
          <img src={image} alt={image} />
        </div>
      ))}
    </Body>
  );
}

const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  grid-column-gap: 30px;
  margin-top: 30px;

  img {
    max-width: 90px;
    height: initial !important;
    border-radius: 10px !important;
  }

  .thumb-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    height: 90px;
    max-width: 90px;
    cursor: pointer;

    &:hover {
      &:after {
        content: "";
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: white;
        opacity: 40%;
      }
    }
  }

  .active {
    outline: 2px hsl(26, 100%, 55%) solid;

    &:after {
      content: "";
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: white;
      opacity: 60%;
    }
  }
`;

export default Thumbnails;
