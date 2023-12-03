import styled from "styled-components";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getMyRoomList } from "../apis/apis";
import { useRecoilValue } from "recoil";
import { UserIdState } from "../store/atom";
import { Iroom } from "../types/type";

const Rooms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0px;
`;

export default function RoomList() {
  const userId = useRecoilValue(UserIdState);
  const { data: rooms } = useQuery(
    ["getMyRoomList"],
    () => getMyRoomList(userId).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log("getMyRoomList", data);
      },
    }
  );

  return (
    <>
      <Rooms>
        {rooms?.map((room: Iroom) => (
          <Link
            to={{
              pathname: `/room/${room?.id}`,
              state: { roomInfo: room },
            }}
          >
            <RoomCard key={room?.id} room={room} />
          </Link>
        ))}
      </Rooms>
    </>
  );
}
