import styled from "styled-components";
import { useEffect, useState } from "react";

interface Iroom {
  rId: number;
  roomName: string;
  roomPpl: number;
  createDate: string;
}

const Container = styled.div`
  border: 1px solid white;
  border-radius: 8px;
  width: 100%;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  font-size: 16px;
  padding-bottom: 5px;
`;

const PplNum = styled.div`
  font-size: 12px;
  color: gray;
`;

const DateAgo = styled.div`
  font-size: 16px;
  color: gray;
`;

export default function RoomCard({ room }: { room: Iroom }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const createDate = new Date(room.createDate);
    const currentDate = new Date();

    const timeDifference = currentDate.getTime() - createDate.getTime();
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const monthsAgo = Math.floor(daysAgo / 30);

    let formattedDateStr = "";

    if (daysAgo === 0) {
      formattedDateStr = "오늘";
    } else if (daysAgo <= 30) {
      formattedDateStr = `${daysAgo}일 전`;
    } else if (monthsAgo < 12) {
      formattedDateStr = `${monthsAgo}달 전`;
    } else {
      formattedDateStr = `${Math.floor(monthsAgo / 12)}년 전`;
    }

    setFormattedDate(formattedDateStr);
  }, [room.createDate]);

  return (
    <>
      <Container>
        <div>
          <Name>{room.roomName} </Name>
          <PplNum> {room.roomPpl}명 참여 </PplNum>
        </div>
        <DateAgo> {formattedDate} </DateAgo>
      </Container>
    </>
  );
}
