import { useNavigate } from "react-router";

export function About() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  return (
    <>
      <h1>About</h1>
      <button onClick={() => handleNavigate()}>Home</button>
    </>
  );
}
