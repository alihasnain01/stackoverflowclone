import { Outlet } from "react-router";
import Header from "./components/commons/header/Header";
import { effect, signal } from "@preact/signals-react";

const user = JSON.parse(localStorage.getItem('user'));
export const isLogin = signal(user);


function App() {

  effect(() => {
    if (!isLogin.value) {
      localStorage.setItem('user', JSON.stringify(isLogin.value));
    }
  })
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto mt-8 mb-8 px-5">
        <Outlet />
      </div>
    </>
  );
}

export default App;
