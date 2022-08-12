import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Dates from "./components/dates";
import Date from "./components/date";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dates" element={<Dates />}>
        <Route path=":dateId" element={<Date />} />
      </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);