import styled from "styled-components";
import Logo from "../imgs/logo.svg";
import GoogleButton from "../auth/GoogleButton";

const Container = styled.div`
  display: flex;
  background-image: url(/imgs/login_background.png);
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: top center;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

const Img = styled.img`
  width: 120px;
`;

export default function Login() {
  return (
    <>
      <Container>
        <Img src={Logo} />
        <GoogleButton />
      </Container>
    </>
  );
}
