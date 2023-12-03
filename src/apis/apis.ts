import axios from "axios";
import axiosInstance from "../axios";

export const getMyRoomList = async (userId: string) => {
  const response = await axiosInstance.get(`/rooms/user/${userId}`);
  return response;
};

export const getOneRoomInfo = async (roomId: string, userId: number) => {
  // const response = await axiosInstance.get(`/room/${roomId}/${userId}`);
  const response = await axiosInstance.get(`/room/${roomId}/prayers`);
  return response;
};

export const getMyPrayList = async (userId: number) => {
  userId = 1;
  const response = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/pray/${userId}`
  );
  return response;
};
