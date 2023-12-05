import styled from "styled-components";
import Header from "../components/Header";
import { Link, useLocation, useParams } from "react-router-dom";
import theme from "../theme";
import MemberListDialog from "../components/member-list-dialog";
import CalendarDialog from "../components/calendar-dialog";
import homeIcon from "../imgs/homeIcon.png";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import RoomInfo from "../components/RoomInfo";
import { Iprayer, Iroom } from "../types/type";
import { useQuery } from "react-query";
import { getDatePrayList } from "../apis/roomApis";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserIdState, isPrayUpdatedState } from "../store/atom";
import PraiseCard from "../components/PraiseCard";
import moment from "moment";
interface RouteParams {
  roomId: string;
  date: string;
}

const HeaderBlank = styled.div`
  height: 60px;
`;

const Container = styled.div`
  width: 100%;
  background-color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Counts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
`;

const PrayNum = styled.div`
  font-size: 16px;
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

const Icon = styled.img`
  width: 22px;
`;

interface LocationState {
  roomInfo: Iroom;
}

export default function DayPray() {
  const { roomId, date } = useParams<RouteParams>();
  const [currentDate, setCurrentDate] = useState(new Date(date));
  const [isPrayUpdated, setIsPrayUpdated] = useRecoilState(isPrayUpdatedState);
  const location = useLocation<LocationState>();
  const { roomInfo } = location.state;
  const userId = useRecoilValue(UserIdState);

  const prevDay = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const nextDay = () => {
    setCurrentDate((nextDate) => {
      const newDate = new Date(nextDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  const formattedDate = `${currentDate.getFullYear()}년 ${
    currentDate.getMonth() + 1
  }월 ${currentDate.getDate()}일`;

  const barDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;

  useEffect(() => {
    setCurrentDate(new Date(date));
  }, [date]);

  // const formattedCurrentDate = currentDate.toISOString();
  const formattedCurrentDate = moment(currentDate).format();

  console.log(formattedCurrentDate);
  console.log(currentDate);

  const { data: roomPray, refetch } = useQuery(
    ["getDatePrayList", formattedCurrentDate],
    () =>
      getDatePrayList(roomId, userId, formattedCurrentDate).then(
        (response) => response.data
      )
  );

  console.log(roomPray);

  useEffect(() => {
    if (isPrayUpdated) {
      refetch().then(() => {
        setIsPrayUpdated(false);
      });
    }
  }, [isPrayUpdated, refetch, setIsPrayUpdated, currentDate]);

  return (
    <>
      <Header />
      <HeaderBlank />
      <Container>
        <RoomInfo roomInfo={roomInfo} />
        <Counts>
          <Rows>
            <PrayNum>
              {roomPray?.totalPrayers}개의 기도제목이 올라왔어요{" "}
            </PrayNum>
            <Rows>
              <Link
                to={{
                  pathname: `/room/${roomId}`,
                  state: { roomInfo: roomInfo },
                }}
              >
                <Icon src={homeIcon} alt="home" />
              </Link>
              <MemberListDialog
                roomId={roomId}
                title={roomInfo?.title}
                code={roomInfo?.code}
              />
              <CalendarDialog roomId={roomId} roomInfo={roomInfo} />
            </Rows>
          </Rows>
          <Rows>
            <div />
            <HiOutlineChevronLeft onClick={prevDay} />
            {formattedDate}
            <HiOutlineChevronRight onClick={nextDay} />
            <div />
          </Rows>
        </Counts>
        <Pray>
          <DateDivider> {barDate} </DateDivider>
          {Object.entries(roomPray || {}).map(([pray, dayPrayers]) => (
            <Day key={pray}>
              {Array.isArray(dayPrayers) &&
                dayPrayers.map((pray: Iprayer) => (
                  <PraiseCard key={pray?.pid} pray={pray} />
                ))}
            </Day>
          ))}
        </Pray>
      </Container>
    </>
  );
}
