import styled from "styled-components";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import theme from "../theme";
import PraiseCard from "../components/PraiseCard";
import Light from "../components/Light";
import AddPrayDialog from "../components/add-pray-dialog";
import MemberListDialog from "../components/member-list-dialog";
import CalendarDialog from "../components/calendar-dialog";
import { useQuery } from "react-query";

const roomInfo = {
  roomName: "한동대학교 기도방",
  roomPpl: 3,
  createDate: "2021-09-01",
  praiseCount: 5,
  todayCount: 2,
  praises: [
    {
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
          name: "김한동",
          praiseContent:
            "신앙의 길에서 매번 새로운 가르침을 받게 되길 바랍니다. 하나님의 뜻을 찾아가는 여정이 되길.",
          Dday: 19,
          isMine: true,
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
    },
    {
      date: "2021/10/27",
      praise: [
        {
          pid: 3,
          name: "박현우",
          praiseContent:
            "프로젝트를 성공적으로 마치길 바랍니다. 팀원들과 원만한 관계를 유지하길.",
          Dday: 25,
          isMine: false,
        },
        {
          pid: 4,
          name: "이지은",
          praiseContent:
            "가족과 함께하는 시간이 늘어나길 바라요. 모두가 건강하고 행복하길.",
          Dday: 20,
          isMine: false,
        },
        {
          pid: 5,
          name: "최윤호",
          praiseContent:
            "다가오는 면접이 걱정되네요. 좋은 결과 있기를 기도합니다.",
          Dday: 15,
          isMine: false,
        },
      ],
    },
    {
      date: "2021/10/16",
      praise: [
        {
          pid: 1,
          name: "김민지",
          praiseContent: "시험 잘 보고 싶어요 ㅠㅠ 졸업할 수 있게 도와주세요",
          Dday: 30,
          isMine: false,
        },
        {
          pid: 1,
          name: "김한동",
          praiseContent:
            "졸업 준비하는 중에 예민한데, 그 핑계로 신앙을 잃 지 않고 말씀 읽고 친구들을 사랑의 눈으로 바라볼 수 있길",
          Dday: 25,
          isMine: true,
        },
      ],
    },
  ],
};

interface RouteParams {
  roomId: string;
}

const Container = styled.div`
  width: 100%;
  background-color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

const HeaderBlank = styled.div`
  height: 60px;
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
  padding: 5px 0px;
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

export default function Room() {
  const { roomId } = useParams<RouteParams>();

  // const { data: rooms } = useQuery(
  //   ["getMyRoomList"],
  //   () => getRoomInfo().then((response) => response.data),
  //   {
  //     onSuccess: (data) => {
  //       console.log("getMyRoomList", data);
  //     },
  //   }
  // );

  return (
    <>
      <Header />
      <HeaderBlank />
      <Container>
        <Top>
          <div>
            <Title> {roomInfo.roomName} </Title>
            <Ppl> {roomInfo.roomPpl}명 참여 </Ppl>
          </div>
          <AddPrayDialog currentRoom="AAA" />
        </Top>
        <Counts>
          <Rows>
            <PrayNum>{roomInfo.praiseCount}개의 기도제목이 올라왔어요 </PrayNum>
            <Rows>
              <MemberListDialog roomId={roomId} />
              <CalendarDialog roomId={roomId} />
            </Rows>
          </Rows>
          <Light ppl={roomInfo.todayCount} />
        </Counts>
        <Pray>
          {roomInfo.praises.map((day) => (
            <Day>
              <DateDivider> {day.date} </DateDivider>
              {day.praise.map((pray) => (
                <PraiseCard pray={pray} />
              ))}
            </Day>
          ))}
        </Pray>
      </Container>
    </>
  );
}
