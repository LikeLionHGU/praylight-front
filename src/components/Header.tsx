import styled from "styled-components";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
import MenuDrawer from "./menu-drawer";

const Container = styled.div`
  width: 100vw;
  max-width: 400px;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 125px;
`;

export default function Header() {
  return (
    <Container>
      <Link to="/home">
        <Img src={logo} />
      </Link>
      <MenuDrawer />
    </Container>
  );
}
