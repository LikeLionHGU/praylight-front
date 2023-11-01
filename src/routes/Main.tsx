import styled from "styled-components";
import Header from "../components/Header";
import RoomList from "../components/RoomList";
import { Link } from "react-router-dom";
import JoinRoomDialog from "../components/join-room-dialog";

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Btns = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px 0px;
`;

const Container = styled.div`
  background-color: black;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 10px 10px;
  border: 1px solid white;
  border-radius: 18px;
`;

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <Title> 나의 기도방 </Title>
        <Btns>
          <Btn>
            <Link to="/addroom">새 기도방 짓기</Link>
          </Btn>
          <JoinRoomDialog />
        </Btns>
        <RoomList />
      </Container>
    </>
  );
}
