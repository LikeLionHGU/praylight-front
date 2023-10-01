import styled from 'styled-components';
import RoomCard from './RoomCard';
import { Link } from 'react-router-dom';

const RoomInfo = [
  {
    rId: 1,
    roomName: '한동대학교 전체 기도방',
    roomPpl: 312,
    createDate: '2023-09-15',
  },
  {
    rId: 2,
    roomName: '프레이즈팀 기도방',
    roomPpl: 76,
    createDate: '2022-08-03',
  },
  {
    rId: 3,
    roomName: '포항 교회 기도방',
    roomPpl: 43,
    createDate: '2023-05-15',
  },
  {
    rId: 4,
    roomName: '한동오케스트라 기도방',
    roomPpl: 24,
    createDate: '2023-07-02',
  },
  {
    rId: 5,
    roomName: 'CSEE 기도방',
    roomPpl: 140,
    createDate: '2021-09-01',
  },
  {
    rId: 6,
    roomName: 'CCC 기도방',
    roomPpl: 43,
    createDate: '2022-08-03',
  },
];

interface Iroom {
  rId: number;
  roomName: string;
  roomPpl: number;
  createDate: string;
}

const Container = styled.div`
  background-color: white;
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Rooms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0px;
`;

export default function RoomList() {
  return (
    <>
      <Container>
        <Title> 나의 기도방 </Title>
        <Rooms>
          {RoomInfo.map((room: Iroom) => (
            <Link to={`/room/${room.rId}`}>
              <RoomCard key={room?.rId} room={room} />
            </Link>
          ))}
        </Rooms>
      </Container>
    </>
  );
}
