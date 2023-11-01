import { FaPrayingHands } from "react-icons/fa";
import styled from "styled-components";
import GoogleButton from "../auth/GoogleButton";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

export default function Login() {
  return (
    <>
      <Container>
        <FaPrayingHands size={"30px"} />
        <GoogleButton />
      </Container>
    </>
  );
}
