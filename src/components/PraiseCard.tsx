import styled from "styled-components";
import theme from "../theme";
import { useState } from "react";

import prayOff from "../imgs/prayOff.png";
import prayOn from "../imgs/prayOn.png";
import EditPrayDialog from "./edit-pray-dialog";
import DeletePrayDialog from "./delete-pray-dialog";

interface Pray {
  pid: number;
  name: string;
  praiseContent: string;
  Dday: number;
  isMine: boolean;
}

const Container = styled.div`
  background-color: ${theme.palette.color.gray7};
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 10px;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Top = styled.div`
  font-size: 12px;
`;

const Name = styled(Top)`
  font-weight: bold;
`;

const Body = styled.div`
  padding: 10px 0px;
  line-height: 1.5;
  font-size: 16px;
`;

const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  font-size: 12px;
`;

const Praied = styled.img`
  width: 120px;
`;

export default function PraiseCard({ pray }: { pray: Pray }) {
  const [prayed, setPrayed] = useState(false);

  const togglePrayed = () => {
    setPrayed(!prayed);
  };
  return (
    <>
      <Container>
        <Rows>
          <Name>{pray.name}</Name>
          <Top>D-{pray.Dday}</Top>
        </Rows>
        <Body>{pray.praiseContent}</Body>
        <Rows>
          {pray.isMine ? (
            <Btn>
              <DeletePrayDialog prayId={pray.pid} />
              <EditPrayDialog pray={pray} />
            </Btn>
          ) : (
            <div />
          )}
          <Btn>
            {prayed ? (
              <Praied src={prayOn} onClick={togglePrayed} />
            ) : (
              <Praied src={prayOff} onClick={togglePrayed} />
            )}
          </Btn>
        </Rows>
      </Container>
    </>
  );
}
