import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getDates } from "../database";

export default function Dates() {
  const dates = getDates();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div>
      <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
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
      </div>
      
        <Outlet />
      
        
      </>
  );
}