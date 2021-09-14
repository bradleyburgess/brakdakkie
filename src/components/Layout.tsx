import DeviceTypeContext from "../hooks/DeviceTypeContext";
import { useState } from "react";
import { FooterElement } from "./Footer";
import BackgroundImage from "./BackgroundImage";
import Branding from "./Branding";
import Footer from "./Footer";
import Hamburger from "./Hamburger";
import Header from "./Header";
import HeaderMainWrapper from "../components/HeaderMainWrapper";
import Main from "./Main";
import Navigation from "./Navigation";
import PageContainer from "./PageContainer";
import WhatsApp from "./WhatsApp";
import useDeviceType from "../hooks/useDeviceType";
import { IGatsbyImageData } from "gatsby-plugin-image";

const menuItems = ["about", "cottages", "rates", "contact"];

const Layout = ({
  backgroundImage,
  children,
  footerElements,
  transparent = false,
}: Props) => {
  const deviceType = useDeviceType();
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const handleHamburgerClick = () => setMobileMenuActive((s) => !s);

  return (
    <DeviceTypeContext.Provider value={deviceType}>
      <PageContainer transparent={transparent}>
        {backgroundImage && <BackgroundImage image={backgroundImage} />}
        <HeaderMainWrapper>
          <Header transparent={transparent}>
            <Branding transparent={transparent} />
            <Navigation
              menuItems={menuItems}
              transparent={transparent}
              mobileMenuActive={mobileMenuActive}
            />
            {deviceType === "mobile" && (
              <Hamburger
                transparent={transparent}
                active={mobileMenuActive}
                handleClick={handleHamburgerClick}
              />
            )}
          </Header>
          <Main>{children}</Main>
        </HeaderMainWrapper>
        <WhatsApp />
        <Footer transparent={transparent} elements={footerElements} />
      </PageContainer>
    </DeviceTypeContext.Provider>
  );
};

interface Props {
  children: React.ReactNode | React.ReactNode[];
  transparent?: boolean;
  backgroundImage?: IGatsbyImageData;
  footerElements: FooterElement[];
}

export default Layout;
