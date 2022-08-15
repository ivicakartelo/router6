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
      <Route
        index
        element={
          <>
          <h1>Home</h1>
            <p>Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam.</p>
          </>
        }
      />
        <Route path="dates" element={<Dates />}>
          
        <Route
        index
        element={
          <>
          <h1>Date</h1>
            <p>Vivamus accumsan dui in facilisis aliquet.`,
            `Etiam nec lectus urna. Sed sodales ultrices dapibus. 
            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan 
            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus 
            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor 
            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id 
            consequat quam.</p>
          </>
            

        }
      />
        <Route path=":dateId" element={<Date />} />
      </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);