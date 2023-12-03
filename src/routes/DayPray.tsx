import styled from "styled-components";
import Header from "../components/Header";
import { Link, useLocation, useParams } from "react-router-dom";
import theme from "../theme";
import PraiseCard from "../components/PraiseCard";
import AddPrayDialog from "../components/add-pray-dialog";
import MemberListDialog from "../components/member-list-dialog";
import CalendarDialog from "../components/calendar-dialog";
import homeIcon from "../imgs/homeIcon.png";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { useState } from "react";
import RoomInfo from "../components/RoomInfo";
import { Iroom } from "../types/type";

const roomInfo = {
  title: "한동대학교 기도방",
  roomPpl: 3,
  createDate: "2021-09-01",
  praiseCount: 5,
  todayCount: 2,
  date: "2021/10/29",
  praise: [
    {
      pid: 6,
      name: "한예슬",
      praiseContent:
        "작은 일에도 감사할 줄 아는 마음을 가지길 바라요. 매일 감사하는 하루하루 되길.",
      Dday: 14,
      isMine: false,
    },
    {
      pid: 7,
      name: "김태현",
      praiseContent:
        "최근 힘들었던 일들이 있었어요. 그럼에도 불구하고 희망을 잃지 않길 기원합니다.",
      Dday: 13,
      isMine: false,
    },
    {
      pid: 8,
      name: "조은별",
      praiseContent:
        "신앙의 길에서 매번 새로운 가르침을 받게 되길 바랍니다. 하나님의 뜻을 찾아가는 여정이 되길.",
      Dday: 19,
      isMine: false,
    },
    {
      pid: 9,
      name: "박진호",
      praiseContent:
        "앞으로의 여정에서도 굳건한 믿음으로 지키며 살아가길 바란다.",
      Dday: 18,
      isMine: false,
    },
    {
      pid: 10,
      name: "이혜진",
      praiseContent:
        "새로운 시작을 앞두고 있어요. 두려움 없이 도전하고, 좋은 결과를 이루기를 바랍니다.",
      Dday: 12,
      isMine: false,
    },
  ],
};

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
  padding: 10px 0px;
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

  const location = useLocation<LocationState>();
  const { roomInfo } = location.state;

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

  //   const { isLoading, data: roomInfo } = useQuery(
  //     ['OneQuestion', getRoomInfo],
  //     () => getRoomInfo(roomId).then(response => response.data),
  //     {
  //       onSuccess: data => {
  //         console.log('GetAllCategory', data);
  //       },
  //       refetchInterval: 500,
  //     },
  //   );

  return (
    <>
      <Header />
      <HeaderBlank />
      <Container>
        <RoomInfo roomInfo={roomInfo} />
        <Counts>
          <Rows>
            {/* <PrayNum>{roomInfo.praiseCount}개의 기도제목이 올라왔어요 </PrayNum> */}
            <Rows>
              <Link to="/home">
                <Icon src={homeIcon} alt="home" />
              </Link>
              <MemberListDialog roomId={roomId} title={roomInfo.title} />
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
        {/* <Pray>
          <Day>
            <DateDivider> {roomInfo.date} </DateDivider>
            {roomInfo.praise.map((pray) => (
              <PraiseCard pray={pray} />
            ))}
          </Day>
        </Pray> */}
      </Container>
    </>
  );
}
