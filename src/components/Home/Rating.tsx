import { FaStar, FaStarHalfAlt as FaHalfStar } from "react-icons/fa";
import { fadeIn } from "react-animations";
import { graphql, useStaticQuery } from "gatsby";
import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";
import useDelayAnimation from "../../hooks/useDelayAnimation";

export const Rating = ({ stars = 4.5 }: Props) => {
  const data = useStaticQuery(graphql`
    query TripAdvisorUrl {
      taLink: graphCmsSocialLink(name: { eq: "TripAdvisor" }) {
        url
      }
    }
  `);
  const {
    taLink: { url: tripAdvisorUrl },
  } = data;

  return (
    <Container>
      <StyledA href={tripAdvisorUrl}>
        <div>
          <Stars stars={stars} />
          <Text>{String(stars)} on Trip Advisor</Text>
        </div>
      </StyledA>
    </Container>
  );
};

export const Container = styled.div`
  flex: 1 1 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 3.5rem;
  // max-width: 20rem;
  margin-bottom: 1rem;
  min-width: 16rem;
`;

const StyledA = styled.a`
  text-decoration: none;
  color: inherit;
`;

const StarContainer = styled.div`
  margin-bottom: 0.25rem;
  display: flex;
  justify-content: center;
  &.no-animation svg {
    animation-play-state: paused;
  }
`;

const Stars = ({ stars }: StarsProps) => {
  const hasHalfStar = !Number.isInteger(stars);
  const wholeStars = Math.floor(stars);
  const iconStyles = {
    margin: "0 0.15em",
    fontSize: "1.25rem",
  };
  const arr = Array(wholeStars).fill("star");
  if (hasHalfStar) arr.push("half");
  const Ref = useDelayAnimation();
  return (
    <StarContainer ref={Ref}>
      {arr.map((e: "star" | "half", i: number) => {
        if (e === "star")
          return <Star key={"star-" + i} style={iconStyles} index={i} />;
        if (e === "half")
          return <HalfStar key={"star-" + i} style={iconStyles} index={i} />;
      })}
    </StarContainer>
  );
};

// const fadeIn = keyframes`
// 0% {
//   opacity: 0.01;
// }
// 100% {
//   opacity: 1;
// }
// `;

const Star = styled(FaStar)<StarProps>`
  opacity: 0.01;
  animation-name: ${keyframes`${fadeIn}`};
  animation-duration: 0.35s;
  animation-timing-function: ease-in;
  animation-delay: ${(props) => props.index * 0.35 + 0.5}s;
  animation-fill-mode: forwards;
`;

const HalfStar = styled(FaHalfStar)<StarProps>`
  opacity: 0.01;
  animation-name: ${keyframes`${fadeIn}`};
  animation-timing-function: ease-in;
  animation-duration: 0.35s;
  animation-delay: ${(props) => props.index * 0.35 + 0.5}s;
  animation-fill-mode: forwards;
`;

const Text = styled.span`
  display: block;
  font-family: ${theme.fonts.sans};
  text-transform: uppercase;
`;

type NumberOfStars = 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

interface StarsProps {
  stars: NumberOfStars;
}

interface StarProps {
  index: number;
}

interface Props {
  stars?: NumberOfStars;
}
