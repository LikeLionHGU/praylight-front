import axios from 'axios';

export const getRoomInfo = async (roomId: string) => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/room/${roomId}`);
  return response;
};
