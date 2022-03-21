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
import { IGatsbyImageData } from "gatsby-plugin-image";

const menuItems = ["about", "cottages", "rates", "contact"];

const Layout = ({
  backgroundImage,
  children,
  footerElements,
  transparent = false,
}: Props) => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const handleHamburgerClick = () => setMobileMenuActive((s) => !s);

  return (
    <PageContainer transparent={transparent}>
      <HeaderMainWrapper>
        <Header transparent={transparent}>
          <Branding transparent={transparent} />
          <Navigation
            menuItems={menuItems}
            transparent={transparent}
            mobileMenuActive={mobileMenuActive}
          />
          <Hamburger
            transparent={transparent}
            active={mobileMenuActive}
            handleClick={handleHamburgerClick}
          />
        </Header>
        <Main>{children}</Main>
      </HeaderMainWrapper>
      <WhatsApp />
      <Footer transparent={transparent} elements={footerElements} />
      {backgroundImage && <BackgroundImage image={backgroundImage} />}
    </PageContainer>
  );
};

interface Props {
  children: React.ReactNode | React.ReactNode[];
  transparent?: boolean;
  backgroundImage?: IGatsbyImageData;
  footerElements: FooterElement[];
}

export default Layout;
