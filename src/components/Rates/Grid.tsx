import styled from "styled-components";
import { useContext } from "react";
import DeviceTypeContext from "../../hooks/DeviceTypeContext";
import { DeviceType } from "../../hooks/useDeviceType";

export const Grid = ({ children }: Props) => {
  const deviceType = useContext(DeviceTypeContext);
  return <Root deviceType={deviceType}>{children}</Root>;
};

const Root = styled.div<RootProps>`
  display: grid;
  flex: 1;
  width: 100%;
  grid-template-columns: ${(props) =>
    props.deviceType === "desktop" ? "1fr 1fr" : "1fr"};
  gap: 1rem;
  ${(props) => props.deviceType === "desktop" && `margin-bottom: 1rem;`}
`;

interface RootProps {
  deviceType: DeviceType;
}

interface Props {
  children: React.ReactElement | React.ReactElement[];
}
