import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./utils/ScrollToHashElement";

// import AboutUs from "./pages/AboutUs";
// import Home from "./pages/Home";
// import Services from "./components/ServiceCards";
// import Contact from "./components/CallToAction";
// import CompetitiveAdvantage from "./components/CompetitiveAdvantage";
// import OurApproach from "./pages/OurApproach";
// import BlogOrLeadership from "./components/Leadership/BlogOrLeadership";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
// import ConsultingHighlights from "./components/Get/consultingHighlight";
import MediaPage from "./pages/MediaPage";
import MainLayout from "./components/header&footer/MainLayout";
// import GetReddAcronyms from "./components/Acronym/GetReddAcronyms";
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
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
