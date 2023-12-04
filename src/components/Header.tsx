import styled from "styled-components";
import logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
import MenuDrawer from "./menu-drawer";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  left: 0; /* 추가 */
  right: 0; /* 추가 */
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
