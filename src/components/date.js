import { useParams } from "react-router-dom";
import { getDate } from "../database";

export default function Date() {
  let params = useParams();
  let date = getDate(parseInt(params.dateId, 10));
  return (
    <main>
      <h2>{date.title}</h2>
      <p>{date.text}</p>
    </main>
  );
}