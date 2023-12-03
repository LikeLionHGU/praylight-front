export type Iroom = {
  id: number;
  title: string;
  roomPpl: number;
  lastActivityDate: string;
  lastClickedToday: boolean;
};

export type Iprayer = {
  id: number;
  name: string;
  pray: string;
  prayDate: string;
  prayCount: number;
  roomId: number;
};

export type Iuser = {
  id: number;
  uid: string;
  name: string;
  email: string;
};
