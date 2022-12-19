import styled from "styled-components";

export default function Header({ headline }) {
  return <StyledHeadline> {headline} </StyledHeadline>;
}

const StyledHeadline = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
