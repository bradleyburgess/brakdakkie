import { useContext } from "react";
import DeviceTypeContext from "../hooks/DeviceTypeContext";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SRNav from "./SRNav";

const Navigation = ({ transparent, menuItems, mobileMenuActive }: Props) => {
  const deviceType = useContext(DeviceTypeContext);
  return deviceType === "mobile" ? (
    <MobileNav menuItems={menuItems} active={mobileMenuActive} />
  ) : deviceType === "desktop" ? (
    <DesktopNav transparent={transparent} menuItems={menuItems} />
  ) : (
    <SRNav menuItems={menuItems} />
  );
};

interface Props {
  menuItems: MenuItem[];
  mobileMenuActive?: boolean;
  transparent?: boolean;
}

export type MenuItem = string;

export default Navigation;
