import { useLocation, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getDates } from "../database";

function QueryNavLink({ ...props }) {
  return <NavLink {...props} />; 
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

      {dates.filter((date) => {
            const filter = searchParams.get("filter");
            if (!filter) return true;
            
            const title = date.title.toLowerCase();
            return title.startsWith(filter.toLowerCase());

          }).map((date) => (
          <QueryNavLink to={`/dates/${date.id}`} key={date.id}>
            <h3>{date.title}</h3> 
          </QueryNavLink>
        ))}      
        <Outlet />
      </>
  );
}