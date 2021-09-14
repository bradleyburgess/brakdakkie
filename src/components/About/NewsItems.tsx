import styled from "styled-components";
import theme from "../../styles/theme";

export const NewsItems = ({ items }: Props) => (
  <UL>
    {items.map((e) => (
      <LI key={e.url}>
        <A href={e.url}>
          <Title>{e.title}</Title>
          <Source>{e.source}</Source>
        </A>
      </LI>
    ))}
  </UL>
);

const UL = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LI = styled.li`
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  transition: all 0.15s ease-out;
  color: ${theme.colors.gray1};
  &:hover {
    color: ${theme.colors.red};
    transform: scale(1.025);
  }
`;

const A = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Title = styled.span`
  display: block;
  font-family: ${theme.fonts.serif};
  font-weight: 600;
`;

const Source = styled.span`
  display: block;
  margin-top: 0.25rem;
  font-family: ${theme.fonts.sans};
  text-transform: uppercase;
`;

export interface NewsItem {
  title: string;
  source: string;
  url: string;
}

export interface GraphQlNewsItem {
  title: string;
  source: string;
  url?: string;
  file?: {
    url: string;
  };
}

interface Props {
  items: NewsItem[];
}
