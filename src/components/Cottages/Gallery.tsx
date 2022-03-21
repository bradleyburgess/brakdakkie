import { useContext } from "react";
import theme from "../../styles/theme";
import styled from "styled-components";
import LightBoxGallery from "@browniebroke/gatsby-image-gallery";
import { IGatsbyImageData } from "gatsby-plugin-image";

export const Gallery = ({ gallery }: Props) => {
  return (
    <Container>
      <LightBoxGallery images={gallery} rowMargin={0} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0;
  background-color: ${theme.colors.gray6};
  .gatsby-image-wrapper {
    transition: all 0.1s ease-in;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
  }
  @media screen and (min-width: 515px) {
    padding: 1rem;
  }
`;

interface Props {
  gallery: CottageImage[];
}

interface CottageImage {
  description: string;
  thumb: IGatsbyImageData;
  full: IGatsbyImageData;
}
