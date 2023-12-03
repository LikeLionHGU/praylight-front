import styled from "styled-components";
import { useEffect, useState } from "react";
import theme from "../theme";
import { Iroom } from "../types/type";

const Container = styled.div`
  border: 1px solid white;
  border-radius: 8px;
  width: 100%;
  padding: 15px 10px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Name = styled.div`
  font-size: 16px;
  padding-bottom: 5px;
`;

const PplNum = styled.div`
  font-size: 12px;
  padding-top: 3px;
  color: ${theme.palette.color.gray4};
`;

const DateAgo = styled.div`
  font-size: 16px;
  color: ${theme.palette.color.gray4};
`;

export default function RoomCard({ room }: { room: Iroom }) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const createDate = new Date(room.lastActivityDate);
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
  }, [room.lastActivityDate]);

  return (
    <>
      <Container>
        <div>
          <Name>{room.title} </Name>
          <PplNum> {room.numberOfMembers}명 참여 </PplNum>
        </div>
        <DateAgo> {formattedDate} </DateAgo>
      </Container>
    </>
  );
}
