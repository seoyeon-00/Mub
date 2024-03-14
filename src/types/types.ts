export interface UserType {
  id: string | null;
  email: string | null;
  nickname: string | null;
  view?: string[] | null;
  admin?: boolean | null;
}
