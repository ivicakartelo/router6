import { NavLink, Outlet } from "react-router-dom";
import { getDates } from "../database";

export default function Dates() {
  let dates = getDates();
  return (
    <div>
        {dates.map((date) => (
          <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "white" : "",
              backgroundColor: isActive ? "black" : "",
            };
          }}
            to={`/dates/${date.id}`}
            key={date.id}
          >
            <h3>{date.title}</h3>
          </NavLink>
        ))}
        <Outlet />
    </div>
  );
}