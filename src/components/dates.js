import { Link, Outlet } from "react-router-dom";
import { getDates } from "../database";

export default function Dates() {
  let dates = getDates();
  return (
    <div>
        {dates.map((date) => (
          <Link
            to={`/dates/${date.id}`}
            key={date.id}
          >
            <h4>{date.title}</h4>
          </Link>
        ))}
        <Outlet />
    </div>
  );
}