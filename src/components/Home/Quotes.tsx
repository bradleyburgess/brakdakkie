import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";
import useDelayAnimation from "../../hooks/useDelayAnimation";

const { quoteLength } = theme.durations;

export const Quotes = ({ reviews }: Props) => {
  const [reviewIndex, setReviewIndex] = useState(0);

  const QCRef = useDelayAnimation();

  const updateReviews = () => {
    setReviewIndex((s) => (s < reviews.length - 1 ? s + 1 : s));
  };

  useEffect(() => {
    QCRef.current?.addEventListener("animationend", updateReviews, false);
    return () =>
      QCRef.current?.removeEventListener("animationend", updateReviews);
  }, [reviewIndex]);

  return (
    <Container>
      <StyledLink href={reviews[reviewIndex].url}>
        <QuoteContainer
          key={reviewIndex}
          ref={QCRef}
          last={reviewIndex === reviews.length - 1}
        >
          <Quote>{reviews[reviewIndex].quote}</Quote>
          <Author>{reviews[reviewIndex].author}</Author>
        </QuoteContainer>
      </StyledLink>
    </Container>
  );
};

const FadeAnimation = keyframes`
0% {
  opacity: 0.01;
}
15% {
  opacity: 1;
}
85% {
  opacity: 1;
}
100% {
  opacity: 0.01;
}
`;

const FadeAnimationLast = keyframes`
0% {
  opacity: 0.01;
}
15% {
  opacity: 1;
}
100% {
  opacity: 1;
}
`;

export const Container = styled.div`
  flex: 1 1 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 4.5rem;
  min-height: 4.5rem;
  min-width: 16rem;
`;

const QuoteContainer = styled.div<QCProps>`
  opacity: 0.01;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 20rem;
  animation-duration: ${quoteLength}ms;
  animation-name: ${(props) =>
    props.last ? FadeAnimationLast : FadeAnimation};
  animation-fill-mode: forwards;
  transition: transform 0.15s ease-out;
  &:hover {
    animation-play-state: paused;
    transform: scale(1.05);
  }
  &.no-animation {
    animation-play-state: paused;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Quote = styled.p`
  margin: 0;
  margin-bottom: 0.5rem;
  font-family: ${theme.fonts.serif};
  font-size: 1.1rem;
  line-height: 1.5rem;
  text-align: center;
  &::before {
    content: "“";
  }
  &::after {
    content: "”";
  }
`;

const Author = styled.p`
  margin: 0;
  font-family: ${theme.fonts.serif};
  font-size: 1rem;
  &::before {
    content: "— ";
  }
`;

export interface Review {
  author: string;
  quote: string;
  url: string;
}

interface QCProps {
  last: boolean;
}

interface Props {
  reviews: Review[];
}
