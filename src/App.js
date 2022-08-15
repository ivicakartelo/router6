import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1>Journal</h1>
      <Link to="/">Home</Link> | {" "}
      <Link to="/dates">Dates</Link>
      <Outlet />  
    </>
  );
}