// import { Outlet } from "react-router-dom";
import { Header as Headerbase, Footer } from "./Layout";
// import Home from "../../pages/Home"
// import MainPage from "../Mainpage";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Headerbase />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
