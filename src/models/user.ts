export interface Autn {
  name: string;
  key: string;
  router: string;
}

export interface UserModel {
  token: string;
  userName: string;
  avatar: string;
  Authority: Autn[];
}
