import styled from "styled-components";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getMyRoomList } from "../apis/apis";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserIdState, isAddedState } from "../store/atom";
import { Iroom } from "../types/type";
import { useEffect } from "react";

const Rooms = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0px;
`;

export default function RoomList() {
  const userId = useRecoilValue(UserIdState);
  const [isAdded, setIsAddedState] = useRecoilState(isAddedState);

  const { data: rooms, refetch } = useQuery(
    ["getMyRoomList"],
    () => getMyRoomList(userId).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log("getMyRoomList", data);
      },
    }
  );

  useEffect(() => {
    if (isAdded) {
      refetch().then(() => {
        setIsAddedState(false);
      });
    }
  }, [isAdded, refetch, setIsAddedState]);

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
