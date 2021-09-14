import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import theme from "../../styles/theme";

export const Accordion = ({ items }: Props) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index: number) => {
    if (index === activeIndex) setActiveIndex(-1);
    else setActiveIndex(index);
  };

  return (
    <Container>
      {items.map((e, i) => (
        <React.Fragment key={e.heading}>
          <Button
            className={activeIndex === i ? "active" : null}
            onClick={() => handleClick(i)}
          >{`${i + 1}. ${e.heading}`}</Button>
          <Content className={activeIndex === i ? "active" : null}>
            <ReactMarkdown children={e.content} />
          </Content>
        </React.Fragment>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1rem;
`;

const Button = styled.button`
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 1em;
  font-family: ${theme.fonts.sans};
  font-size: 1rem;
  text-align: left;
  text-transform: uppercase;
  color: ${theme.colors.gray1};
  background-color: ${theme.colors.gray5};
  border: none;
  transition: background-color 0.15s ease-out, color 0.15s ease-out;
  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.gray4};
  }
  &::after {
    content: "\\25B6 \\FE0E";
    float: right;
    transition: transform 0.2s;
  }
  &:focus,
  &:active {
    outline: 0;
    box-shadow: inset 0 0 3px ${theme.colors.red}, 0 0 2px ${theme.colors.red};
  }
  &.active {
    color: ${theme.colors.gray6};
    background-color: ${theme.colors.gray2};
    &::after {
      transform: rotate(90deg) translateX(0.1em);
    }
    &:hover {
      background-color: ${theme.colors.gray2};
    }
  }
`;

const Content = ({ className, children }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setHeight(ref.current?.scrollHeight);
  }, []);

  return (
    <StyledContent className={className} height={height} ref={ref}>
      {children}
    </StyledContent>
  );
};

const StyledContent = styled.div<ContentProps>`
  box-sizing: border-box;
  max-height: 0;
  overflow: hidden;
  background-color: ${theme.colors.gray6};
  transition: max-height 0.25s ease-in-out, border-width 0s linear 0.25s;
  &.active {
    max-height: ${(props) => props.height}px;
    transition: max-height 0.15s ease-out;
    // border: 1px solid ${theme.colors.gray3};
  }
  & * {
    font-size: 0.85rem;
    line-height: 1.75em;
  }
  & > * {
    margin: 1rem;
  }
  & ul,
  & ol {
    margin-left: 0;
    padding-left: 1.75rem;
  }
`;

interface ContentProps {
  height: number;
}

interface Props {
  items: Policy[];
}

interface Policy {
  heading: string;
  content: string;
}
