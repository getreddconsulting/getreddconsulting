import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./utils/ScrollToHashElement";
import MediaPage from "./pages/MediaPage";
import MainLayout from "./components/header&footer/MainLayout";
import MainPage from "./components/Mainpage";



function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/media" element={<MediaPage />} />
        </Route>
       
      </Routes>
    </Router>
    
  );
}

export default App;
