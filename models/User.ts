export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userName: string;
  password: string;
  firstName: string | null;
  lastName: string | null;
};
