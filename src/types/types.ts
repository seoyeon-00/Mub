export interface UserType {
  id: string | null;
  email: string | null;
  nickname: string | null;
  likes: string[] | null;
  admin?: boolean | null;
  profile: {
    id: string | null;
    image_url: string | null;
  };
}

export interface Category {
  id?: string;
  name: string;
  movie: string[];
  imageUrl: string;
  create_at?: string;
}

export interface Profile {
  id: string;
  image_url: string;
}
