import styled from "styled-components";
import FindRoom from "./FindRoom";
import AddRoom from "./AddRoom";

const Container = styled.div`
  width: 100%;
  height: 25vh;
  background-color: #efefef;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  font-size: 16px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

// const Btn = styled.button`
//   padding: 10px 20px;
//   border: none;
//   background-color: #dddddd;
// `;

export default function Board() {
  return (
    <>
      <Container>
        <div>
          <Title>서로의 기도제목을 공유하세요.</Title>
          <SubTitle>기도방에서 서로의 기도제목을 나누며 기도해요.</SubTitle>
        </div>
        <Buttons>
          <FindRoom />
          <AddRoom />
          {/* <Btn>기도방 들어가기</Btn> */}
          {/* <Btn>새 기도방 짓기</Btn> */}
        </Buttons>
      </Container>
    </>
  );
}
