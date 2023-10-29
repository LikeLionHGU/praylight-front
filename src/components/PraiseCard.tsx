import styled from "styled-components";
import theme from "../theme";
import { AiTwotoneStar } from "react-icons/ai";

interface Pray {
  pid: number;
  name: string;
  praiseContent: string;
  Dday: number;
}

const Container = styled.div`
  background-color: ${theme.palette.mono.gray4};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Tops = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Top = styled.div`
  font-size: 12px;
`;

const Body = styled.div`
  padding: 10px 0px;
  line-height: 1.5;
`;

const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  font-size: 12px;
`;

export default function PraiseCard({ pray }: { pray: Pray }) {
  return (
    <>
      <Container>
        <Tops>
          <Top>{pray.name}</Top>
          <Top>D-{pray.Dday}</Top>
        </Tops>
        <Body>{pray.praiseContent}</Body>
        <Btn>
          <AiTwotoneStar /> 함께 기도해주세요
        </Btn>
      </Container>
    </>
  );
}
