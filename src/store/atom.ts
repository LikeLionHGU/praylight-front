import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "localStorage", //원하는 key 값 입력
  storage: localStorage,
});

export const IsLoginState = atom({
  key: "IsLoginState",
  // default: false,
  default: true,
  effects_UNSTABLE: [persistAtom],
});

export const UserIdState = atom({
  key: "UserIdState",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const RoomList = atom({
  key: "RoomList",
  default: [
    {
      id: 1,
      name: "한동대 전체 기도방",
    },
  ],
});
