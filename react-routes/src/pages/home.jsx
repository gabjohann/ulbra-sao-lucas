import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/about");
  }

  return (
    <>
      <h1>Home Page</h1>

      <button onClick={() => handleNavigate()}>About</button>
    </>
  );
}
