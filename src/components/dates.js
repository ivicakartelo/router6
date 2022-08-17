import { useLocation, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getDates } from "../database";

function QueryNavLink({ to, ...props }) {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

export default function Dates() {
  const dates = getDates();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            const filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />

      {dates  
          .filter((date) => {
            const filter = searchParams.get("filter");
            if (!filter) return true;
            
            const title = date.title.toLowerCase();
            return title.startsWith(filter.toLowerCase());

          })
        .map((date) => (
          <QueryNavLink
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
          </QueryNavLink>
        ))}      
        <Outlet />
      </>
  );
}