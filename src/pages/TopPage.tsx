import { Link } from "react-router-dom";

export default function TopPage() {
  return (
    <>
      <Link to="/">Top</Link>
      <Link to="/post">Post</Link>
    </>
  );
}
