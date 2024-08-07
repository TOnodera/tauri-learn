import { invoke } from "@tauri-apps/api";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export const getPosts = async (): Promise<Post[]> => {
  return await invoke<
    {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[]
  >("get_posts");
};
