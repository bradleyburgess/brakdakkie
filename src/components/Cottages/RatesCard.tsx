import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import DeviceTypeContext from "../../hooks/DeviceTypeContext";
import theme from "../../styles/theme";

export const RatesCard = ({ number, rate, featuredImage }: Props) => {
  const deviceType = useContext(DeviceTypeContext);
  return deviceType === "mobile" ? (
    <MobileTextContainer background={featuredImage.background}>
      <Heading>Cottage {number} rates</Heading>
      <Content content={rate} />
    </MobileTextContainer>
  ) : deviceType === "desktop" ? (
    <DesktopContainer>
      <DesktopImageConatainer>
        <GatsbyImage
          image={featuredImage.full}
          alt={featuredImage.description}
          title={featuredImage.description}
        />
      </DesktopImageConatainer>
      <DesktopTextContainer>
        <Heading>Cottage {number} rates</Heading>
        <Content content={rate} />
      </DesktopTextContainer>
    </DesktopContainer>
  ) : (
    <div></div>
  );
};

const MobileTextContainer = styled.div<MobileTextContainerProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  z-index: 1;
  color: ${theme.colors.gray6};
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &::before {
    z-index: -2;
    background-image: url(${(props) => props.background});
    background-size: cover;
  }
  &::after {
    z-index: -1;
    background-color: #333;
    opacity: 0.6;
  }
}
`;

const Heading = styled.h2`
  font-family: ${theme.fonts.sans};
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: normal;
`;

const SubHeading = styled.h2`
  margin: 0.5rem;
  padding: 0;
  font-size: 1.2rem;
  font-weight: normal;
  text-transform: uppercase;
  font-family: ${theme.fonts.sans};
  &:nth-of-type(2) {
    margin-top: 3rem;
  }
`;

const Detail = styled.p`
  line-height: 1.25rem;
  font-family: ${theme.fonts.serif};
  white-space: nowrap;
`;

const DesktopContainer = styled.section`
  display: flex;
  padding: 1rem;
  color: ${theme.colors.gray1};
  background-color: ${theme.colors.gray6};
`;

const DesktopTextContainer = styled.div`
  width: 50%;
  text-align: center;
`;

const DesktopImageConatainer = styled.div`
  width: 50%;
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }
`;

const Content = ({ content }) => (
  <ReactMarkdown
    children={content}
    components={{
      p: ({ children }) => <Detail>{children}</Detail>,
      h1: ({ children }) => <SubHeading>{children}</SubHeading>,
      h2: ({ children }) => <SubHeading>{children}</SubHeading>,
      h3: ({ children }) => <SubHeading>{children}</SubHeading>,
      h4: ({ children }) => <SubHeading>{children}</SubHeading>,
      h5: ({ children }) => <SubHeading>{children}</SubHeading>,
      h6: ({ children }) => <SubHeading>{children}</SubHeading>,
    }}
  />
);

interface MobileTextContainerProps {
  background: string;
}

interface Props {
  rate: string;
  featuredImage: {
    background: string;
    full: IGatsbyImageData;
    description: string;
  };
  number: number;
}
