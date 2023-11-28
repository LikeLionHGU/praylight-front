import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import hamburgerIcon from "../imgs/hamburgerIcon.png";
import styled from "styled-components";
import theme from "../theme";
import { useHistory } from "react-router-dom";
import Logo from "../imgs/logo.svg";

const Icon = styled.img`
  width: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const Container = styled.div`
  width: 100%;
`;

const name = "김믿음";

const Welcome = styled.div`
  font-size: 16px;
  color: white;
  padding: 5px 0px;
`;

const Name = styled(Welcome)`
  font-weight: bold;
  display: inline;
`;

const Btn = styled.div`
  font-size: 20px;
  color: white;
  padding: 10px 0px;
`;

const Verse = styled.div`
  font-size: 12px;
  color: white;
  padding: 15px;
  margin: 15px;
  border: 1px solid white;
  border-radius: 10px;
  line-height: 1.5;
  word-wrap: break-word;
`;

const Img = styled.img`
  width: 120px;
  margin: 0px 20px 20px 0px;
`;

export default function MenuDrawer() {
  const history = useHistory();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setIsOpen(!isOpen);
  };

  const movetoRoomlist = () => {
    history.push(`/home`);
  };

  const movetoMypage = () => {
    history.push(`/mypage`);
  };

  const list = () => (
    <Box
      sx={{
        width: 300,
        backgroundColor: theme.palette.color.gray6,
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Content>
        <Container>
          <Container style={{ height: "60px" }} />
          <Divider sx={{ borderColor: "white", width: "100%" }} />
          <List
            style={{
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Container style={{ height: "20px" }} />
            <Welcome> 기도의 자리에 오신</Welcome>
            <Welcome>
              <Name>{name}</Name> 님을 환영하고 축복합니다.
            </Welcome>
            <Container style={{ height: "40px" }} />
            <Btn onClick={movetoRoomlist}>나의 기도방</Btn>
            <Btn onClick={movetoMypage}>나의 기도제목</Btn>
          </List>
        </Container>
        <Container>
          <Verse>
            너희는 내게 부르짖으며 내게 와서 기도하면 내가 너희들의 기도를 들을
            것이요 (예레미야 29장 12절)
          </Verse>
          <Container style={{ display: "flex", justifyContent: "end" }}>
            <Img src={Logo} />
          </Container>
        </Container>
      </Content>
    </Box>
  );

  return (
    <>
      <Icon src={hamburgerIcon} onClick={toggleDrawer} />
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </>
  );
}
