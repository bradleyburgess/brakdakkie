import styled from "styled-components";
import { Rating } from "./Rating";
import { Quotes, Review } from "./Quotes";
import { graphql, useStaticQuery } from "gatsby";
import { sanitize, shuffleArray } from "../../util/functions";
import { useState, useEffect } from "react";
import { Container as QuotesContainer } from "./Quotes";

export const Reviews = () => {
  const data = useStaticQuery(graphql`
    query Reviews {
      allGraphCmsReview {
        nodes {
          quote
          author
          url
        }
      }
    }
  `);

  const {
    allGraphCmsReview: { nodes: _reviews },
  } = data;

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setReviews(
      shuffleArray(
        _reviews.map((e: Review) => ({
          author: e.author,
          url: e.url,
          quote: sanitize(e.quote, {
            doubleQuotes: true,
            trim: true,
            doubleSpaces: true,
          }),
        }))
      )
    );
  }, []);

  return (
    <Container>
      <Rating />
      {reviews.length > 0 ? <Quotes reviews={reviews} /> : <QuotesContainer />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
