import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";

const BackgroundImage = ({ image }: Props) => (
  <>
    <GatsbyImage
      alt=""
      aria-hidden
      image={image}
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        zIndex: -1000,
      }}
    />
    <Overlay />
  </>
);

const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #333;
  opacity: 0.6;
  z-index: -999;
  overflow: hidden;
`;

interface Props {
  image: IGatsbyImageData;
}

export default BackgroundImage;
