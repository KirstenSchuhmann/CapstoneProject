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
  height: 65px;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  background: white;
  box-shadow: 0px -5px 5px rgb(32 33 36 / 10%);
  margin-top: auto;

  a {
    font-size: 1.7rem;
  }
`;
