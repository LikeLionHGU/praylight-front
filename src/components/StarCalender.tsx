import styled from "styled-components";
import StarCount from "./StarCount";
import { useEffect, useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

const star = [
  {
    month: "JAN",
    counts: [
      {
        day: 1,
        count: 3,
      },
      {
        day: 2,
        count: 15,
      },
      {
        day: 3,
        count: 1,
      },
      {
        day: 4,
        count: 21,
      },
      {
        day: 5,
        count: 19,
      },
      {
        day: 6,
        count: 50,
      },
      {
        day: 7,
        count: 1,
      },
      {
        day: 8,
        count: 0,
      },
      {
        day: 9,
        count: 1,
      },
      {
        day: 10,
        count: 0,
      },
      {
        day: 11,
        count: 10,
      },
      {
        day: 12,
        count: 0,
      },
      {
        day: 13,
        count: 0,
      },
      {
        day: 14,
        count: 0,
      },
      {
        day: 15,
        count: 0,
      },
      {
        day: 16,
        count: 0,
      },
      {
        day: 17,
        count: 0,
      },
      {
        day: 18,
        count: 4,
      },
      {
        day: 19,
        count: 0,
      },
      {
        day: 20,
        count: 0,
      },
      {
        day: 21,
        count: 7,
      },
      {
        day: 22,
        count: 0,
      },
      {
        day: 23,
        count: 0,
      },
      {
        day: 24,
        count: 16,
      },
      {
        day: 25,
        count: 0,
      },
      {
        day: 26,
        count: 4,
      },
      {
        day: 27,
        count: 0,
      },
      {
        day: 28,
        count: 0,
      },
      {
        day: 29,
        count: 9,
      },
      {
        day: 30,
        count: 0,
      },
      {
        day: 31,
        count: 2,
      },
    ],
  },
  {
    month: "FEB",
    counts: [
      {
        day: 1,
        count: 0,
      },
      {
        day: 2,
        count: 15,
      },
      {
        day: 3,
        count: 1,
      },
      {
        day: 4,
        count: 0,
      },
      {
        day: 5,
        count: 19,
      },
      {
        day: 6,
        count: 50,
      },
      {
        day: 7,
        count: 0,
      },
      {
        day: 8,
        count: 0,
      },
      {
        day: 9,
        count: 1,
      },
      {
        day: 10,
        count: 0,
      },
      {
        day: 11,
        count: 10,
      },
      {
        day: 12,
        count: 0,
      },
      {
        day: 13,
        count: 0,
      },
      {
        day: 14,
        count: 0,
      },
      {
        day: 15,
        count: 1,
      },
      {
        day: 16,
        count: 0,
      },
      {
        day: 17,
        count: 0,
      },
      {
        day: 18,
        count: 4,
      },
      {
        day: 19,
        count: 0,
      },
      {
        day: 20,
        count: 3,
      },
      {
        day: 21,
        count: 7,
      },
      {
        day: 22,
        count: 0,
      },
      {
        day: 23,
        count: 0,
      },
      {
        day: 24,
        count: 16,
      },
      {
        day: 25,
        count: 0,
      },
      {
        day: 26,
        count: 4,
      },
      {
        day: 27,
        count: 0,
      },
      {
        day: 28,
        count: 0,
      },
      {
        day: 29,
        count: 9,
      },
      {
        day: 30,
        count: 0,
      },
      {
        day: 31,
        count: 2,
      },
    ],
  },
  {
    month: "MAR",
    counts: [
      {
        day: 1,
        count: 0,
      },
      {
        day: 2,
        count: 15,
      },
      {
        day: 3,
        count: 1,
      },
      {
        day: 4,
        count: 21,
      },
      {
        day: 5,
        count: 19,
      },
      {
        day: 6,
        count: 0,
      },
      {
        day: 7,
        count: 0,
      },
      {
        day: 8,
        count: 5,
      },
      {
        day: 9,
        count: 1,
      },
      {
        day: 10,
        count: 0,
      },
      {
        day: 11,
        count: 10,
      },
      {
        day: 12,
        count: 0,
      },
      {
        day: 13,
        count: 0,
      },
      {
        day: 14,
        count: 34,
      },
      {
        day: 15,
        count: 0,
      },
      {
        day: 16,
        count: 0,
      },
      {
        day: 17,
        count: 11,
      },
      {
        day: 18,
        count: 0,
      },
      {
        day: 19,
        count: 0,
      },
      {
        day: 20,
        count: 0,
      },
      {
        day: 21,
        count: 7,
      },
      {
        day: 22,
        count: 0,
      },
      {
        day: 23,
        count: 0,
      },
      {
        day: 24,
        count: 16,
      },
      {
        day: 25,
        count: 0,
      },
      {
        day: 26,
        count: 4,
      },
      {
        day: 27,
        count: 4,
      },
      {
        day: 28,
        count: 0,
      },
      {
        day: 29,
        count: 9,
      },
      {
        day: 30,
        count: 0,
      },
      {
        day: 31,
        count: 2,
      },
    ],
  },
  {
    month: "APR",
    counts: [
      {
        day: 1,
        count: 3,
      },
      {
        day: 2,
        count: 0,
      },
      {
        day: 3,
        count: 1,
      },
      {
        day: 4,
        count: 21,
      },
      {
        day: 5,
        count: 19,
      },
      {
        day: 6,
        count: 0,
      },
      {
        day: 7,
        count: 1,
      },
      {
        day: 8,
        count: 4,
      },
      {
        day: 9,
        count: 1,
      },
      {
        day: 10,
        count: 0,
      },
      {
        day: 11,
        count: 10,
      },
      {
        day: 12,
        count: 30,
      },
      {
        day: 13,
        count: 0,
      },
      {
        day: 14,
        count: 0,
      },
      {
        day: 15,
        count: 0,
      },
      {
        day: 16,
        count: 0,
      },
      {
        day: 17,
        count: 0,
      },
      {
        day: 18,
        count: 4,
      },
      {
        day: 19,
        count: 0,
      },
      {
        day: 20,
        count: 0,
      },
      {
        day: 21,
        count: 0,
      },
      {
        day: 22,
        count: 0,
      },
      {
        day: 23,
        count: 0,
      },
      {
        day: 24,
        count: 1,
      },
      {
        day: 25,
        count: 0,
      },
      {
        day: 26,
        count: 4,
      },
      {
        day: 27,
        count: 10,
      },
      {
        day: 28,
        count: 0,
      },
      {
        day: 29,
        count: 9,
      },
      {
        day: 30,
        count: 0,
      },
      {
        day: 31,
        count: 2,
      },
    ],
  },
  {
    month: "MAY",
    counts: [
      {
        day: 1,
        count: 3,
      },
      {
        day: 2,
        count: 15,
      },
      {
        day: 3,
        count: 1,
      },
      {
        day: 4,
        count: 21,
      },
      {
        day: 5,
        count: 19,
      },
      {
        day: 6,
        count: 50,
      },
      {
        day: 7,
        count: 1,
      },
      {
        day: 8,
        count: 0,
      },
      {
        day: 9,
        count: 1,
      },
      {
        day: 10,
        count: 0,
      },
      {
        day: 11,
        count: 10,
      },
      {
        day: 12,
        count: 0,
      },
      {
        day: 13,
        count: 0,
      },
      {
        day: 14,
        count: 0,
      },
      {
        day: 15,
        count: 0,
      },
      {
        day: 16,
        count: 0,
      },
      {
        day: 17,
        count: 0,
      },
      {
        day: 18,
        count: 4,
      },
      {
        day: 19,
        count: 0,
      },
      {
        day: 20,
        count: 0,
      },
      {
        day: 21,
        count: 7,
      },
      {
        day: 22,
        count: 0,
      },
      {
        day: 23,
        count: 0,
      },
      {
        day: 24,
        count: 16,
      },
      {
        day: 25,
        count: 0,
      },
      {
        day: 26,
        count: 4,
      },
      {
        day: 27,
        count: 0,
      },
      {
        day: 28,
        count: 0,
      },
      {
        day: 29,
        count: 9,
      },
      {
        day: 30,
        count: 0,
      },
      {
        day: 31,
        count: 2,
      },
    ],
  },
  {
    month: "JUN",
    counts: [
      {
        day: 1,
        count: 3,
      },
      {
        day: 2,
        count: 15,
      },
      {
        day: 3,
        count: 1,
      },
      {
        day: 4,
        count: 21,
      },
      {
        day: 5,
        count: 19,
      },
      {
        day: 6,
        count: 50,
      },
      {
        day: 7,
        count: 1,
      },
      {
        day: 8,
        count: 0,
      },
      {
        day: 9,
        count: 1,
      },
      {
        day: 10,
        count: 0,
      },
      {
        day: 11,
        count: 10,
      },
      {
        day: 12,
        count: 0,
      },
      {
        day: 13,
        count: 0,
      },
      {
        day: 14,
        count: 0,
      },
      {
        day: 15,
        count: 0,
      },
      {
        day: 16,
        count: 0,
      },
      {
        day: 17,
        count: 0,
      },
      {
        day: 18,
        count: 4,
      },
      {
        day: 19,
        count: 0,
      },
      {
        day: 20,
        count: 0,
      },
      {
        day: 21,
        count: 7,
      },
      {
        day: 22,
        count: 0,
      },
      {
        day: 23,
        count: 0,
      },
      {
        day: 24,
        count: 16,
      },
      {
        day: 25,
        count: 0,
      },
      {
        day: 26,
        count: 4,
      },
      {
        day: 27,
        count: 0,
      },
      {
        day: 28,
        count: 0,
      },
      {
        day: 29,
        count: 9,
      },
      {
        day: 30,
        count: 0,
      },
      {
        day: 31,
        count: 2,
      },
    ],
  },
  {
    month: "JUL",
    counts: [
      {
        day: 1,
        count: 3,
      },
      {
        day: 2,
        count: 15,
      },
      {
        day: 3,
        count: 1,
      },
      {
        day: 4,
        count: 21,
      },
      {
        day: 5,
        count: 19,
      },
      {
        day: 6,
        count: 50,
      },
      {
        day: 7,
        count: 1,
      },
      {
        day: 8,
        count: 0,
      },
      {
        day: 9,
        count: 1,
      },
      {
        day: 10,
        count: 0,
      },
      {
        day: 11,
        count: 10,
      },
      {
        day: 12,
        count: 0,
      },
      {
        day: 13,
        count: 0,
      },
      {
        day: 14,
        count: 0,
      },
      {
        day: 15,
        count: 0,
      },
      {
        day: 16,
        count: 0,
      },
      {
        day: 17,
        count: 0,
      },
      {
        day: 18,
        count: 4,
      },
      {
        day: 19,
        count: 0,
      },
      {
        day: 20,
        count: 0,
      },
      {
        day: 21,
        count: 7,
      },
      {
        day: 22,
        count: 0,
      },
      {
        day: 23,
        count: 0,
      },
      {
        day: 24,
        count: 16,
      },
      {
        day: 25,
        count: 0,
      },
      {
        day: 26,
        count: 4,
      },
      {
        day: 27,
        count: 0,
      },
      {
        day: 28,
        count: 0,
      },
      {
        day: 29,
        count: 9,
      },
      {
        day: 30,
        count: 0,
      },
      {
        day: 31,
        count: 2,
      },
    ],
  },
  {
    month: "AUG",
    counts: [
      {
        day: 1,
        count: 0,
      },
      {
        day: 2,
        count: 15,
      },
      {
        day: 3,
        count: 1,
      },
      {
        day: 4,
        count: 0,
      },
      {
        day: 5,
        count: 19,
      },
      {
        day: 6,
        count: 50,
      },
      {
        day: 7,
        count: 0,
      },
      {
        day: 8,
        count: 0,
      },
      {
        day: 9,
        count: 1,
      },
      {
        day: 10,
        count: 0,
      },
      {
        day: 11,
        count: 10,
      },
      {
        day: 12,
        count: 0,
      },
      {
        day: 13,
        count: 0,
      },
      {
        day: 14,
        count: 0,
      },
      {
        day: 15,
        count: 1,
      },
      {
        day: 16,
        count: 0,
      },
      {
        day: 17,
        count: 0,
      },
      {
        day: 18,
        count: 4,
      },
      {
        day: 19,
        count: 0,
      },
      {
        day: 20,
        count: 3,
      },
      {
        day: 21,
        count: 7,
      },
      {
        day: 22,
        count: 0,
      },
      {
        day: 23,
        count: 0,
      },
      {
        day: 24,
        count: 16,
      },
      {
        day: 25,
        count: 0,
      },
      {
        day: 26,
        count: 4,
      },
      {
        day: 27,
        count: 0,
      },
      {
        day: 28,
        count: 0,
      },
      {
        day: 29,
        count: 9,
      },
      {
        day: 30,
        count: 0,
      },
      {
        day: 31,
        count: 2,
      },
    ],
  },
  {
    month: "SEP",
    counts: [
      {
        day: 1,
        count: 0,
      },
      {
        day: 2,
        count: 15,
      },
      {
        day: 3,
        count: 1,
      },
      {
        day: 4,
        count: 21,
      },
      {
        day: 5,
        count: 19,
      },
      {
        day: 6,
        count: 0,
      },
      {
        day: 7,
        count: 0,
      },
      {
        day: 8,
        count: 5,
      },
      {
        day: 9,
        count: 1,
      },
      {
        day: 10,
        count: 0,
      },
      {
        day: 11,
        count: 10,
      },
      {
        day: 12,
        count: 0,
      },
      {
        day: 13,
        count: 0,
      },
      {
        day: 14,
        count: 34,
      },
      {
        day: 15,
        count: 0,
      },
      {
        day: 16,
        count: 0,
      },
      {
        day: 17,
        count: 11,
      },
      {
        day: 18,
        count: 0,
      },
      {
        day: 19,
        count: 0,
      },
      {
        day: 20,
        count: 0,
      },
      {
        day: 21,
        count: 7,
      },
      {
        day: 22,
        count: 0,
      },
      {
        day: 23,
        count: 0,
      },
      {
        day: 24,
        count: 16,
      },
      {
        day: 25,
        count: 0,
      },
      {
        day: 26,
        count: 4,
      },
      {
        day: 27,
        count: 4,
      },
      {
        day: 28,
        count: 0,
      },
      {
        day: 29,
        count: 9,
      },
      {
        day: 30,
        count: 0,
      },
      {
        day: 31,
        count: 2,
      },
    ],
  },
  {
    month: "OCT",
    counts: [
      {
        day: 1,
        count: 3,
      },
      {
        day: 2,
        count: 0,
      },
      {
        day: 3,
        count: 1,
      },
      {
        day: 4,
        count: 21,
      },
      {
        day: 5,
        count: 19,
      },
      {
        day: 6,
        count: 0,
      },
      {
        day: 7,
        count: 1,
      },
      {
        day: 8,
        count: 4,
      },
      {
        day: 9,
        count: 1,
      },
      {
        day: 10,
        count: 0,
      },
      {
        day: 11,
        count: 10,
      },
      {
        day: 12,
        count: 30,
      },
      {
        day: 13,
        count: 0,
      },
      {
        day: 14,
        count: 0,
      },
      {
        day: 15,
        count: 0,
      },
      {
        day: 16,
        count: 0,
      },
      {
        day: 17,
        count: 0,
      },
      {
        day: 18,
        count: 4,
      },
      {
        day: 19,
        count: 0,
      },
      {
        day: 20,
        count: 0,
      },
      {
        day: 21,
        count: 0,
      },
      {
        day: 22,
        count: 0,
      },
      {
        day: 23,
        count: 0,
      },
      {
        day: 24,
        count: 1,
      },
      {
        day: 25,
        count: 0,
      },
      {
        day: 26,
        count: 4,
      },
      {
        day: 27,
        count: 10,
      },
      {
        day: 28,
        count: 0,
      },
      {
        day: 29,
        count: 9,
      },
      {
        day: 30,
        count: 0,
      },
      {
        day: 31,
        count: 2,
      },
    ],
  },
];

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0px;
`;

const Months = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  overflow: hidden; // 컨테이너 밖의 월은 숨김
  transition: transform 0.3s ease; // 부드러운 애니메이션 효과
`;

export default function StarCalender({ roomId }: { roomId: string }) {
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth(); // 0(1월) ~ 11(12월)의 값을 반환합니다.
  const [currentSet, setCurrentSet] = useState(currentMonthIndex - 3); // 현재 표시되는 월의 시작 인덱스

  const handleNext = () => {
    if (currentSet + 4 < star.length) {
      setCurrentSet(currentSet + 1);
    }
  };

  const handlePrev = () => {
    if (currentSet > 0) {
      setCurrentSet(currentSet - 1);
    }
  };

  useEffect(() => {
    // 인덱스가 변경될 때마다 스크롤 위치를 상단으로 초기화하려면 아래 코드를 추가합니다.
    window.scrollTo(0, 0);
  }, [currentSet]);

  const displayedMonths = star.slice(currentSet, currentSet + 4);

  return (
    <Rows>
      <BiSolidLeftArrow onClick={handlePrev} />

      <Months>
        {displayedMonths.map((month) => (
          <StarCount month={month} />
        ))}
      </Months>
      <BiSolidRightArrow onClick={handleNext} />
    </Rows>
  );
}
