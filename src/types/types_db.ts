export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          id: number;
          name: string;
          movie: string[];
          imgUrl: string;
          created_at: string;
        };
        Insert: {
          id: number;
          name: string;
          movie: string[];
          imgUrl: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          name: string;
          movie: string[];
          imgUrl: string;
          created_at?: string;
        };
      };
    };
  };
}
