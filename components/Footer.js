import styled from "styled-components";
import Link from "next/link";

export default function Footer() {
  return (
    <StyledFooter>
      <Link href="/"> 🏋️‍♀️ </Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  display: flex;
  background: lightgrey;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0px 0px;

  a {
    font-size: 2rem;
  }
`;
