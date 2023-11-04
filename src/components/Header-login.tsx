import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../imgs/logo.png";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e5e5e5;
`;

const Img = styled.img`
  width: 125px;
`;

const Btn = styled.div`
  font-size: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 18px;
  padding: 5px 10px;
`;

export default function HeaderLogin() {
  return (
    <>
      <Container>
        <Link to="/">
          <Img src={logo} />
        </Link>
        <Btn>Login</Btn>
      </Container>
    </>
  );
}
