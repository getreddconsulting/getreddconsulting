import { Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./utils/ScrollToHashElement";
import MediaPage from "./pages/MediaPage";
import MainLayout from "./components/header&footer/MainLayout";
import MainPage from "./components/Mainpage";

function App() {
  return (
    <>
      <ScrollToHashElement />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />              {/* ✅ relative */}
          <Route path="/media" element={<MediaPage />} />        {/* ✅ relative */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
