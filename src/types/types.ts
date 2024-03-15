export interface UserType {
  id: string | null;
  email: string | null;
  nickname: string | null;
  view?: string[] | null;
  admin?: boolean | null;
}

export interface Category {
  id?: string;
  name: string;
  movie: string[];
  imageUrl: string;
  create_at?: string;
}
