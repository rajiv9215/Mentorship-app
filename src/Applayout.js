import Header from "./components/Header";
import Home from "./pages/homepage/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router";
import Pricing from "./pages/pricing/Pricing";
import { useState } from "react";
import About from "./pages/about-us/About";
import Blog from "./pages/blogs/Blog";
import MentorSuggestionForm from "./pages/findMentor/MentorSuggestionForm";
import ContactPage from "./components/Contact";
import MentorDetail from "./pages/mentor/MentorDetail";
import { Provider } from "react-redux";
import appStore from "./store/appStore";


const Applayout = () => {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const PrivateRoute = ({ children }) => {
    if (isAuthenticated) {
      return children;
    }
    return <Navigate to="/auth" />
  };

  return (
    <Provider store={appStore}>
    <BrowserRouter>
      <Header isAuthenticated={isAuthenticated} setisAuthenticated={setisAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route
          path="/find-mentor"
          element={
            <PrivateRoute>
              <MentorSuggestionForm />
            </PrivateRoute>
          }
        />

        <Route path="/blogs" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/mentor" element={<MentorDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
};

export default Applayout;
