import styled from "styled-components";

interface Count {
  day: number;
  count: number;
}

interface Month {
  month: string;
  counts: Count[];
}

interface StarCountProps {
  month: Month;
}

interface StarProps {
  count: number;
}

const getColor = (count: number) => {
  if (count < 5) {
    return "#C6BB31";
  } else if (count < 10) {
    return "#FFFABC";
  } else if (count < 15) {
    return "#FCF061";
  } else if (count < 20) {
    return "#FBE906";
  } else {
    return "#FFD700";
  }
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MonthCalender = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const Map = styled.div`
  display: flex;
  flex-direction: row;
`;

const Week = styled.div`
  display: flex;
  flex-direction: column;
`;

const Star = styled.div<StarProps>`
  margin: 2px 2px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ count }) =>
    `radial-gradient(circle at center, ${getColor(
      count
    )} 40%, transparent 60%)`};
`;

const Blank = styled.div`
  width: 15px;
  height: 10px;
`;

export default function StarCount({ month }: StarCountProps) {
  return (
    <Container>
      <MonthCalender> {month.month}</MonthCalender>
      <Map>
        <Week>
          {month.counts
            .slice(0, 7)
            .map((count) =>
              count.count > 0 ? <Star count={count.count} /> : <Blank />
            )}
        </Week>
        <Week>
          {month.counts
            .slice(7, 14)
            .map((count) =>
              count.count > 0 ? <Star count={count.count} /> : <Blank />
            )}
        </Week>
        <Week>
          {month.counts
            .slice(14, 21)
            .map((count) =>
              count.count > 0 ? <Star count={count.count} /> : <Blank />
            )}
        </Week>
        <Week>
          {month.counts
            .slice(21, 28)
            .map((count) =>
              count.count > 0 ? <Star count={count.count} /> : <Blank />
            )}
        </Week>
        <Week>
          {month.counts
            .slice(28, -1)
            .map((count) =>
              count.count > 0 ? <Star count={count.count} /> : <Blank />
            )}
        </Week>
      </Map>
    </Container>
  );
}
