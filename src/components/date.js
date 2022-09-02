import { useParams } from "react-router-dom";
import { getDate } from "../database";

export default function Date() {
  const params = useParams();
  const date = getDate(parseInt(params.dateId, 10));
  return (
    <main>
      <h2>{date.title}</h2>
        {date.text.map((paragraph, key) => (
        <p key={key}>
        {paragraph}
        </p>))}
    </main>
  );
}