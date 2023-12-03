import styled from "styled-components";
import theme from "../theme";
import { useEffect, useState } from "react";

import prayOff from "../imgs/prayOff.png";
import prayOn from "../imgs/prayOn.png";
import EditPrayDialog from "./edit-pray-dialog";
import DeletePrayDialog from "./delete-pray-dialog";
import { Iprayer } from "../types/type";
import axiosInstance from "../axios";
import { useRecoilValue } from "recoil";
import { UserIdState } from "../store/atom";

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
  width: 100px;
`;

export default function PraiseCard({ pray }: { pray: Iprayer }) {
  const [prayed, setPrayed] = useState(false);
  const userId = useRecoilValue(UserIdState);

  const togglePrayed = () => {
    setPrayed(!prayed);

    const response = axiosInstance.post(
      `/prayers/${pray?.pid}/user/${userId}/pray-together`
    );

    return response;
  };

  useEffect(() => {
    setPrayed(pray.likes);
  }, [pray.likes]);
  return (
    <>
      <Container>
        <Rows>
          <Name>{pray.name}</Name>
          <Top>D-{pray.dday}</Top>
        </Rows>
        <Body>{pray.praiseContent}</Body>
        <Rows>
          {pray.mine ? (
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
