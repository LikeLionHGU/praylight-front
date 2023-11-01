import styled from "styled-components";
import theme from "../theme";
import { useState } from "react";

import prayOff from "../imgs/prayOff.png";
import prayOn from "../imgs/prayOn.png";
import editIcon from "../imgs/editIcon.png";
import deleteIcon from "../imgs/deleteIcon.png";

const mine = {
  isMine: true,
};
interface Pray {
  pid: number;
  name: string;
  praiseContent: string;
  Dday: number;
}

const Container = styled.div`
  background-color: ${theme.palette.color.gray7};
  padding: 20px;
  border-radius: 8px;
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

const Body = styled.div`
  padding: 10px 0px;
  line-height: 1.5;
`;

const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  font-size: 12px;
`;

const Icon = styled.img`
  width: 15px;
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
          <Top>{pray.name}</Top>
          <Top>D-{pray.Dday}</Top>
        </Rows>
        <Body>{pray.praiseContent}</Body>
        <Rows>
          {mine.isMine ? (
            <Btn>
              <Icon src={editIcon} />
              <Icon src={deleteIcon} />
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
