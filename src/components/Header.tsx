import styled from "styled-components";
import { FaPrayingHands } from "react-icons/fa";
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
`;

export default function Header() {
  return (
    <>
      <Container>
        <Link to="/">
          <FaPrayingHands size={"30px"} />
        </Link>
        <MenuDrawer />
      </Container>
    </>
  );
}
