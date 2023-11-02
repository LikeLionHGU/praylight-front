import styled from "styled-components";
import Header from "../components/Header";
import RoomList from "../components/RoomList";
import JoinRoomDialog from "../components/join-room-dialog";
import AddNewRoomDialog from "../components/add-newroom-dialog";

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

export default function Main() {
  return (
    <>
      <Header />
      <Container>
        <Title> 나의 기도방 </Title>
        <Btns>
          <AddNewRoomDialog />
          <JoinRoomDialog />
        </Btns>
        <RoomList />
      </Container>
    </>
  );
}
