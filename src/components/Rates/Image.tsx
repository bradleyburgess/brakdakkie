import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";

export const Image = ({ image }: Props) => {
  return (
    <Container>
      <GatsbyImage image={image} alt="" />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  grid-area: 1/1;
  height: 100%;
  z-index: 1;
  @media screen and (min-width: 515px) {
    grid-area: unset;
  }

  .gatsby-image-wrapper {
    height: 100%;
  }
  @media screen and (max-width: 514px) {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background-color: #333;
      opacity: 0.6;
    }
  }
`;

interface Props {
  image: IGatsbyImageData;
}
