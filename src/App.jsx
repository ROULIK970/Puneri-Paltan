import Home from "./components/Home/Home";
import Header from "./components/global/Header/Header";
import Footer from "./components/global/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Players from "./components/Players/Players";
import PaltanWorld from "./components/PaltanWorld/PaltanWorld";
import SinglePlayer from "./components/SinglePlayer/SinglePlayer";
import PuneriTV from "./components/PuneriTV/PuneriTV";
import Gallery from "./components/Gallery/Gallery";
import SingleGallery from "./components/SingleGallery/SingleGallery";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation()
  useEffect(() => {
     window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: false,
      easing:'ease-in-out',
    });
  }, [location.pathname]);

  return (
    <>
      <Header />

      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/players/:playerid" element={<SinglePlayer />} />
        <Route path="/paltan-world" element={<PaltanWorld />} />
        <Route path="/puneri-tv" element={<PuneriTV />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:galleryid" element={<SingleGallery />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
