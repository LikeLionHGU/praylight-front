import { useState } from "react";
import styled from "styled-components";
import lightOn from "../imgs/lightOn.png";
import lightOff from "../imgs/lightOff.png";
import theme from "../theme";

const Container = styled.div`
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0px;
`;
const LightImg = styled.img`
  width: 150px;
`;

// const Columns = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const PowerImg = styled.img`
//   width: 30px;
// `;

const Ppl = styled.div`
  font-size: 12px;
  color: ${theme.palette.color.gray3};
`;

export default function Light({ ppl }: { ppl: number }) {
  const [light, setLight] = useState(false);

  const toggleLight = () => {
    setLight(true);
  };

  return (
    <>
      <Container>
        {light ? (
          <LightImg src={lightOn} />
        ) : (
          <LightImg src={lightOff} onClick={toggleLight} />
        )}
        <Ppl>오늘 {ppl}명이 기도의 불을 켰습니다.</Ppl>
      </Container>
    </>
  );
}
