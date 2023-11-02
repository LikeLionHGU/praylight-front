import HeaderLogin from "../components/Header-login";
import styled from "styled-components";
import theme from "../theme";
import startdesc from "../imgs/startdesc.png";
import { Link } from "react-router-dom";

const StartMain = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(/imgs/firstpagebackground.png);
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
`;
const SubTitle = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`;
const Btn = styled.div`
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 18px;
  color: ${theme.palette.color.black};
  background-color: ${theme.palette.color.gray2};
`;

const Desc = styled.img`
  width: 100%;
  height: auto;
`;

export default function Start() {
  return (
    <>
      <HeaderLogin />
      <StartMain>
        <Title>기도제목을 나누며 </Title>
        <Title>함께 기도하세요</Title>
        <SubTitle>기도방에서 서로의 기도제목을 나누며 기도해요.</SubTitle>
        {/* <Link to="/login"> */}
        <Link to="/home">
          <Btn>기도방으로 들어가기</Btn>
        </Link>
      </StartMain>
      <Desc src={startdesc} />
    </>
  );
}
