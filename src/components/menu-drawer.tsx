import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import hamburgerIcon from "../imgs/hamburgerIcon.png";
import styled from "styled-components";
import theme from "../theme";
import { useHistory } from "react-router-dom";

const Icon = styled.img`
  width: 20px;
`;

const name = "김믿음";

const Name = styled.div`
  font-size: 16px;
  color: white;
  padding: 5px 0px;
`;

const Btn = styled.div`
  font-size: 20px;
  color: white;
  padding: 10px 0px;
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
    history.push(`/`);
  };

  const movetoMypage = () => {
    history.push(`/mypage`);
  };

  const list = () => (
    <Box
      sx={{
        width: 250,
        backgroundColor: theme.palette.color.gray6,
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div style={{ height: "40px" }} />
      <Divider sx={{ borderColor: "white", width: "100%" }} />

      <List style={{ padding: "20px" }}>
        <div style={{ height: "20px" }} />
        <Name> 기도의 자리에 오신</Name>
        <Name> {name}님을 환영하고 축복합니다.</Name>
        <div style={{ height: "40px" }} />
        <Btn onClick={movetoRoomlist}>나의 기도방</Btn>
        <Btn onClick={movetoMypage}>나의 기도제목</Btn>
      </List>
    </Box>
  );

  return (
    <div>
      {/* <Button>Open Right Drawer</Button>/ */}
      <Icon src={hamburgerIcon} onClick={toggleDrawer} />
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </div>
  );
}
