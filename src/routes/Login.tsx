import styled from "styled-components";
// import GoogleButton from "../auth/GoogleButton";
import LogoBig from "../imgs/side.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

const Img = styled.img`
  width: 300px;
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
        <Img src={LogoBig} />
        {/* <GoogleButton /> */}
        <Link to="/home">
          <Button> 데모 로그인 하기 </Button>
        </Link>
      </Container>
    </>
  );
}
