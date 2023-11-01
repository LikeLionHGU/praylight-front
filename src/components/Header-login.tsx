import styled from "styled-components";
import { FaPrayingHands } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        {/* <Logo src="https://cdn.logo.com/hotlink-ok/logo-social.png" /> */}
        <Link to="/">
          <FaPrayingHands size={"30px"} />
        </Link>
        {/* <Icon /> */}
        {/* <GoHomeFill size={"30px"} /> */}
        <Btn>Login</Btn>
      </Container>
    </>
  );
}
