import styled from "styled-components";
import GymPlan from "../components/GymPlan";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header headline="Gym-Plan" />
      <StyledMain>
        <GymPlan />
      </StyledMain>
      <Footer />
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
