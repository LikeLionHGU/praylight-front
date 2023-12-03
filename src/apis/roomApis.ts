import axiosInstance from "../axios";

export const getRoomPray = async (roomId: string, userId: string) => {
  const response = await axiosInstance.get(
    `/room/${roomId}/prayers/user/${userId}`
  );
  return response;
};

export const turnLightOn = async (roomId: string, userId: number) => {
  const response = await axiosInstance.patch(
    `rooms/${roomId}/user/${userId}/click`
  );
  return response;
};

export const getLightStatus = async (roomId: string) => {
  const response = await axiosInstance.get(`rooms/${roomId}/clicks`);
  return response;
};

export const getMemberList = async (roomId: string) => {
  const response = await axiosInstance.get(`/rooms/${roomId}/users`);
  return response;
};

export const getDatePrayList = async (
  roomId: string,
  userId: number,
  date: string
) => {
  const response = await axiosInstance.get(
    `/room/${roomId}/user/${userId}/prayers/date/${date}`
  );
  return response;
};
