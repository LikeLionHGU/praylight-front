import styled from "styled-components";
import Header from "../components/Header";
import theme from "../theme";
import PraiseCard from "../components/PraiseCard";

const myInfo = {
  praiseCount: 5,
  date: "2021/10/29",
  praise: [
    {
      pid: 6,
      name: "한예슬",
      praiseContent:
        "작은 일에도 감사할 줄 아는 마음을 가지길 바라요. 매일 감사하는 하루하루 되길.",
      Dday: 14,
    },
    {
      pid: 7,
      name: "김태현",
      praiseContent:
        "최근 힘들었던 일들이 있었어요. 그럼에도 불구하고 희망을 잃지 않길 기원합니다.",
      Dday: 13,
    },
    {
      pid: 8,
      name: "조은별",
      praiseContent:
        "신앙의 길에서 매번 새로운 가르침을 받게 되길 바랍니다. 하나님의 뜻을 찾아가는 여정이 되길.",
      Dday: 19,
    },
    {
      pid: 9,
      name: "박진호",
      praiseContent:
        "앞으로의 여정에서도 굳건한 믿음으로 지키며 살아가길 바란다.",
      Dday: 18,
    },
    {
      pid: 10,
      name: "이혜진",
      praiseContent:
        "새로운 시작을 앞두고 있어요. 두려움 없이 도전하고, 좋은 결과를 이루기를 바랍니다.",
      Dday: 12,
    },
  ],
};

const Container = styled.div`
  width: 100%;
  background-color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

const Top = styled.div`
  display: flex;
  /* grid-template-columns: 1fr 1fr; */
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
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

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    height: 1px;
    background-color: ${theme.palette.color.gray3};
  }

  &:before {
    left: 0;
    right: calc(90% + 5px);
  }

  &:after {
    left: calc(30% + 10px);
    right: 0;
  }
`;

const Day = styled.div`
  padding: 5px 0px;
`;

export default function MyPage() {
  //   const [currentDate, setCurrentDate] = useState(new Date(roomInfo.date));

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
      <Container>
        <Top>
          <div>
            <Title> 마이페이지 </Title>
          </div>
        </Top>
        <Counts>
          <Rows>
            <PrayNum>{myInfo.praiseCount}개의 기도제목을 공유했어요</PrayNum>
          </Rows>
        </Counts>
        <Pray>
          <Day>
            <DateDivider> {myInfo.date} </DateDivider>
            {myInfo.praise.map((pray) => (
              <PraiseCard pray={pray} />
            ))}
          </Day>
        </Pray>
      </Container>
    </>
  );
}
