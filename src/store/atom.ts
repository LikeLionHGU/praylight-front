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

export const isPrayUpdatedState = atom({
  key: "isPrayUpdatedState",
  default: false,
});
