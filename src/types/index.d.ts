export type PostType = {
  id: number ;
  title: string;
  username: string;
  desc: string;
  photo: string | File;
  categories: string[];
};
export type SinglePostType = {
  id: number ;
  title: string;
  username: string;
  desc: string;
  photo: string | File;
  categories: string[];
};

export type UserType = {
  id: number;
  email: string;
  password: string;
  username: string;
//   avatar: string;
  profilePic: string | File;
};
// loginuser
export type LoginUserType = {
  username: string;
  password: string;
};

export type Categories = {
  id: number;
  name: string;
};
