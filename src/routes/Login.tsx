import styled from "styled-components";
// import GoogleButton from "../auth/GoogleButton";
import Logo from "../imgs/logo.svg";
import { Link } from "react-router-dom";

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

const Button = styled.div`
  width: 300px;
  height: 50px;
  border: 1px solid #e5e5e5;
  border-radius: 25px;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 10px 10px rgba(255, 255, 255, 0.517);
`;

export default function Login() {
  return (
    <>
      <Container>
        <Img src={Logo} />

        {/* <GoogleButton /> */}
        <Link to="/home">
          <Button> 데모 로그인 하기 </Button>
        </Link>
      </Container>
    </>
  );
}
