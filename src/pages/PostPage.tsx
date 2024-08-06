import { Card, Table } from "@mui/joy";
import axios, { Axios, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { http } from "../utils";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default function PostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    http
      .get<any, AxiosResponse<Post[]>, {}>("/posts")
      .then((response) => setPosts(response.data));
  }, []);
  return (
    <>
      <Card>
        <Table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
