export type Iroom = {
  id: number;
  title: string;
  numberOfMembers: number;
  code: string;
  lastActivityDate: string;
  lastClickedToday: boolean;
  anonymous: boolean;
};

export type Iprayer = {
  pid: number;
  name: string;
  praiseContent: string;
  likes: boolean;
  startDate: string;
  anonymous: boolean;
  dday: number;
  mine: true;
};

export type Iuser = {
  id: number;
  uid: string;
  name: string;
  email: string;
};
