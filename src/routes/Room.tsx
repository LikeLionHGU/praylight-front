import styled from "styled-components";
import Header from "../components/Header";
import { useLocation, useParams } from "react-router-dom";
import theme from "../theme";
import PraiseCard from "../components/PraiseCard";
import Light from "../components/Light";
import MemberListDialog from "../components/member-list-dialog";
import CalendarDialog from "../components/calendar-dialog";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserIdState, isPrayUpdatedState } from "../store/atom";
import { Iprayer, Iroom } from "../types/type";
import RoomInfo from "../components/RoomInfo";
import { getRoomPray } from "../apis/roomApis";
import { useQuery } from "react-query";
import { useEffect } from "react";

const Container = styled.div`
  width: 100%;
  background-color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const HeaderBlank = styled.div`
  height: 60px;
`;

const Counts = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5px;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const PrayNum = styled.div`
  font-size: 16px;
`;

const ColorText = styled.span`
  color: ${theme.palette.color.yellow};
`;

const Pray = styled.div``;

const DateDivider = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  position: relative;
  padding-left: 10%;
  color: ${theme.palette.color.gray3};
  font-size: 12px;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 40%;
    height: 1px;
    background-color: ${theme.palette.color.gray3};
  }

  &:before {
    left: 0;
    right: calc(90% + 5px);
  }

  &:after {
    left: calc(25% + 10px);
    right: 0;
  }
`;

const Day = styled.div`
  padding: 5px 0px;
`;

interface RouteParams {
  roomId: string;
}
interface LocationState {
  roomInfo: Iroom;
}

export default function Room() {
  const { roomId } = useParams<RouteParams>();
  const userId = useRecoilValue(UserIdState);
  const [isPrayUpdated, setIsPrayUpdated] = useRecoilState(isPrayUpdatedState);
  const location = useLocation<LocationState>();
  const { roomInfo } = location.state;

  console.log("roomInfo", roomInfo);

  const { data: roomPray, refetch } = useQuery(
    ["getRoomPray"],
    () => getRoomPray(roomId, userId).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log("getRoomPray", data);
      },
    }
  );

  useEffect(() => {
    if (isPrayUpdated) {
      refetch().then(() => {
        // refetch가 완료되면 상태를 업데이트합니다.
        setIsPrayUpdated(false);
      });
    }
  }, [isPrayUpdated, refetch, setIsPrayUpdated]);

  return (
    <>
      <Header />
      <HeaderBlank />
      <Container>
        <RoomInfo roomInfo={roomInfo} />
        <Counts>
          <Rows>
            <PrayNum>
              <ColorText> {roomPray?.totalPrayers}</ColorText>개의 기도제목이
              올라왔어요
            </PrayNum>
            <Rows>
              <MemberListDialog
                roomId={roomId}
                title={roomInfo?.title}
                code={roomInfo?.code}
              />
              <CalendarDialog roomId={roomId} roomInfo={roomInfo} />
            </Rows>
          </Rows>
          <Light isOn={roomInfo?.lastClickedToday} />
        </Counts>
        <Pray>
          {Object.entries(roomPray?.prayers || {}).map(([date, dayPrayers]) => (
            <Day key={date}>
              <DateDivider> {date} </DateDivider>
              {Array.isArray(dayPrayers) &&
                dayPrayers.map((pray: Iprayer) => (
                  <PraiseCard key={pray.pid} pray={pray} />
                ))}
            </Day>
          ))}
        </Pray>
      </Container>
    </>
  );
}
