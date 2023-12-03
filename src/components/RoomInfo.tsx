import styled from "styled-components";
import theme from "../theme";
import { Iroom } from "../types/type";
import AddPrayDialog from "./add-pray-dialog";

const Top = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Ppl = styled.div`
  color: ${theme.palette.color.gray4};
  font-size: 12px;
  padding: 5px 0px;
`;

export default function RoomInfo({ roomInfo }: { roomInfo: Iroom }) {
  return (
    <>
      <Top>
        <div>
          <Title> {roomInfo?.title} </Title>
          <Ppl> {roomInfo?.numberOfMembers}명 참여 </Ppl>
        </div>
        <AddPrayDialog currentRoom="AAA" />
      </Top>
    </>
  );
}
