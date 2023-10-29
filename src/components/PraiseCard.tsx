import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.div``;

const PraisedPpl = styled.div``;

const LeftDate = styled.div``;

export default function PraiseCard() {
  return (
    <>
      <Container>
        <Title>기도제목</Title>
        <PraisedPpl>3명이 기도합니다.</PraisedPpl>
        <LeftDate>D-30</LeftDate>
      </Container>
    </>
  );
}
