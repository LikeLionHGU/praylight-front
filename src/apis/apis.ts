import axiosInstance from "../axios";

export const getMyRoomList = async (userId: string) => {
  const response = await axiosInstance.get(`/rooms/user/${userId}`);
  return response;
};

export const getMyPray = async (userId: string) => {
  const response = await axiosInstance.get(`/prayer/user/${userId}`);
  return response;
};

export const getPrayTogether = async (userId: string) => {
  const response = await axiosInstance.get(
    `/prayers/user/${userId}/pray-together`
  );
  return response;
};
