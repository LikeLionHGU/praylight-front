import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
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

// const Logo = styled.img`
//   width: 60px;
//   height: 100%;
//   object-fit: cover;
// `;

const Icon = styled.img`
  width: 20px;
`;

export default function Header() {
  return (
    <>
      <Container>
        {/* <Logo src="https://cdn.logo.com/hotlink-ok/logo-social.png" /> */}
        <Link to="/">
          <FaPrayingHands size={"30px"} />
        </Link>
        {/* <Icon /> */}
        {/* <GoHomeFill size={"30px"} /> */}
        <MenuDrawer />
      </Container>
    </>
  );
}
