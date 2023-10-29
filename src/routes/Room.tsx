import styled from 'styled-components';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
// import { useQuery } from 'react-query';
// import { getRoomInfo } from '../apis/apis';

const roomInfo = {
    roomName: '한동대학교 전체 기도방',
    roomPpl: 3,
    createDate: '2021-09-01',
    praise : [
        {
            pId: 1,
            praiseName: '기도제목1',
            praiseContent: '기도내용1',
            createDate: '2021-09-01',
        },
        {
            pId: 2,
            praiseName: '기도제목2',
            praiseContent: '기도내용2',
            createDate: '2021-09-01',
        },
        {
            pId: 3,
            praiseName: '기도제목3',
            praiseContent: '기도내용3',
            createDate: '2021-09-01',
        }
    ]
};

interface RouteParams {
    roomId: string;
}

const Container = styled.div`
  width: 100%;
  height: 90vh;
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const AddPraise = styled.div``;

export default function Room() {
  const { roomId } = useParams<RouteParams>();

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
        <Title> {roomInfo.roomName} </Title>
        <AddPraise > + 기도제목 추가 </AddPraise>
      </Container>
    </>
  );
}
