import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import SRNav from "./SRNav";

const Navigation = ({ transparent, menuItems, mobileMenuActive }: Props) => {
  return (
    <>
      <MobileNav menuItems={menuItems} active={mobileMenuActive} />
      <DesktopNav transparent={transparent} menuItems={menuItems} />
      <SRNav menuItems={menuItems} />
    </>
  );
};

interface Props {
  menuItems: MenuItem[];
  mobileMenuActive?: boolean;
  transparent?: boolean;
}

export type MenuItem = string;

export default Navigation;
