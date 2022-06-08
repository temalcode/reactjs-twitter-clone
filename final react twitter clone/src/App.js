import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";
import Trends from "./components/Trends/Trends";
import "./app.css";

export default function App() {
  return (
    <div className="wrapper">
      <div className="sticky__wrapper">
        <Sidebar />
      </div>
      <HomePage />
      <div className="sticky__wrapper">
        <Trends />
      </div>
    </div>
  );
}
