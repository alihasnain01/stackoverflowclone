import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto mt-10 mb-8 px-5">
        <Outlet />
      </div>
    </>
  );
}

export default App;
