import { Card, Table } from "@mui/joy";
import { useEffect, useState } from "react";
import { getPosts } from "../commands";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default function PostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    getPosts()
      .then((posts) => setPosts(posts ?? []))
      .catch(console.error);
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
