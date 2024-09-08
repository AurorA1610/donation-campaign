import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Header/Header";
const Root = () => {
  return (
    <div className="max-w-6xl	mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default Root;
