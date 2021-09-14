import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import styled from "styled-components";
import { useContext } from "react";
import DeviceTypeContext from "../../hooks/DeviceTypeContext";
import { DeviceType } from "../../hooks/useDeviceType";

export const Image = ({ image }: Props) => {
  const deviceType = useContext(DeviceTypeContext);
  return (
    <Container deviceType={deviceType}>
      <GatsbyImage image={image} alt="" />
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  position: relative;
  grid-area: ${(props) => (props.deviceType === "mobile" ? "1/1" : "unset")};
  height: 100%;
  z-index: 1;
  .gatsby-image-wrapper {
    height: 100%;
  }
  ${(props) =>
    props.deviceType === "mobile" &&
    `&::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: #333;
  opacity: 0.6
}`}
`;

interface ContainerProps {
  deviceType: DeviceType;
}
interface Props {
  image: IGatsbyImageData;
}
