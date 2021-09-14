import styled from "styled-components";
import React, { useContext } from "react";
import DeviceTypeContext from "../../hooks/DeviceTypeContext";
import theme from "../../styles/theme";
import { DeviceType } from "../../hooks/useDeviceType";
import ReactMarkdown from "react-markdown";

export const Description = ({ content }: Props) => {
  const deviceType = useContext(DeviceTypeContext);
  return (
    <Container deviceType={deviceType}>
      <ReactMarkdown children={content} />
    </Container>
  );
};

const Container = styled.div<DescriptionProps>`
  font-family: ${theme.fonts.serif};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h6 {
    font-family: ${theme.fonts.sans};
    text-transform: uppercase;
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
  }
  p {
    text-align: ${(props) =>
      props.deviceType === "mobile" ? "left" : "center"};
    max-width: 40rem;
    margin: 1rem auto;
  }
  ul {
    margin: 0;
    padding: 1rem;
    columns: ${(props) => (props.deviceType === "desktop" ? "2" : "1")};
  }
  li {
    margin-bottom: 0.5rem;
    ${(props) => (props.deviceType === "desktop" ? "max-width: 90%;" : null)}
    ${(props) =>
      props.deviceType === "desktop" ? "margin: 0 auto 0.5rem auto;" : null}
  }
`;

interface DescriptionProps {
  deviceType: DeviceType;
}

interface Props {
  content: string;
}
