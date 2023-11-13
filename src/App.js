import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <div className="max-w-6xl :md:max-w-4xl mx-auto mt-10 mb-8 px-5">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
