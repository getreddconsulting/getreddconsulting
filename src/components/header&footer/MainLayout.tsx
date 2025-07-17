import { Outlet } from "react-router-dom";
import { Header as Headerbase, Footer } from "./Layout";

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
