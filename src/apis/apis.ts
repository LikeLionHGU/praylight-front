import axios from "axios";

export const getMyRoomList = async (roomId: string) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/api/room/${roomId}`
  );
  return response;
};

export const getRoomInfo = async (roomId: string, memberId: number) => {
  memberId = 1;
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/room/${roomId}/${memberId}`
  );
  return response;
};

export const getMyPrayList = async (memberId: number) => {
  memberId = 1;
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/pray/${memberId}`
  );
  return response;
};
