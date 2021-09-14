import styled from "styled-components";
import theme from "../../styles/theme";
import { useContext } from "react";
import DeviceTypeContext from "../../hooks/DeviceTypeContext";
import { DeviceType } from "../../hooks/useDeviceType";

export const Text = ({ children }: TextProps) => {
  const deviceType = useContext(DeviceTypeContext);
  return <Container deviceType={deviceType}>{children}</Container>;
};

const Container = styled.div<ContainerProps>`
  grid-area: ${(props) => (props.deviceType === "mobile" ? "1/1" : "1/2")};
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  text-align: center;
  color: ${(props) =>
    props.deviceType === "mobile" ? theme.colors.gray6 : theme.colors.gray1};
  z-index: 1;
  & > * {
    margin: 0;
    padding: 2rem;
    background-color: ${(props) =>
      props.deviceType === "desktop" ? theme.colors.gray6 : "inherit"};
  }
  & > h1 {
    font-family: ${theme.fonts.script};
    font-size: 2.75rem;
    text-align: center;
    ${(props) =>
      props.deviceType === "desktop" &&
      `background-color: ${theme.colors.gray1};
      color: ${theme.colors.gray6};`}
  }
  div > h1 {
    font-family: ${theme.fonts.sans};
    font-size: 1.75rem;
    text-transform: uppercase;
    margin-top: 0;
  }
  div > h2 {
    padding: 0;
    margin: 0;
    font-size: 1.25rem;
    font-family: ${theme.fonts.sans};
    text-transform: uppercase;
    &:nth-of-type(2) {
      margin-top: 2rem;
    }
  }
`;

export const Heading = styled.h1`
  font-family: ${theme.fonts.script};
`;

export const Detail = styled.div`
  text-align: center;
`;

interface TextProps {
  children: React.ReactElement | React.ReactElement[];
}

interface ContainerProps {
  deviceType: DeviceType;
}
