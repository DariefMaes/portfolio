import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Home/Index";
import IndianEcon from "./pages/Projects/IndianEcon";
import DebateAnalysis from "./pages/Projects/DebateAnalysis";
import Taskified from "./pages/Projects/Taskified";
import Dormit from "./pages/Projects/Dormit";
import CollegeSpillover from "./pages/Projects/CollegeSpillover";
import BloombergAPI from "./pages/Projects/BloombergAPI";
import Argumentor from "./pages/Projects/Argumentor";
import AutoScheduler from "./pages/Projects/AutoScheduler";
import CheckItOut from "./pages/Projects/CheckItOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects">
            <Route path="indian-econ" element={<IndianEcon />} />
            <Route path="debate-analysis" element={<DebateAnalysis />} />
            <Route path="taskified" element={<Taskified />} />
            <Route path="dormit" element={<Dormit />} />
            <Route path="college-spillover" element={<CollegeSpillover />} />
            <Route path="bloomberg-api" element={<BloombergAPI />} />
            <Route path="argumentor" element={<Argumentor />} />
            <Route path="syllabus-scheduler" element={<AutoScheduler />} />
            <Route path="check-it-out" element={<CheckItOut />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
