import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import TopBar from "./Components/Common/Header/TopBar";
import HeroSection from "./Pages/HomePages/HeroSection";
import AboutHeroSection from "./Pages/HomePages/Aboutpage/AboutHeroSection";
import Footer from "./Pages/HomePages/Footer";
import AbrotHeroSection from "./Components/Common/WorkAbrot/AbrotHeroSection";
import StudyAbrotHeroSection from "./Components/Common/StudyAbortSection/StudyAbrotHeroSection";
import InternationalHeroSection from "./Components/InternationlHeroSection/InternationalHeroSection";
import GlobleHeroSection from "./Components/GlobleHeroSection/GlobleHeroSection";
import ScrollToTop from "./Pages/HomePages/Loader/ScrollToTop";
import Loader from "./Pages/HomePages/Loader/Loader";
import Investment from "./Components/InvestmentPage/Investment";
import Cultural_Programs from "./Components/Cultural_Infusion_Programs/Cultural_Programs";
import CulturalHolidays from "./Components/Cultural Holidays/CulturalHolidays";
import BusinessPrograms from "./Components/Business Exchange Programs/BusinessPrograms";
import Business_Delegation_Programs from "./Components/Business Delegation Programs/Business_Delegation_Programs";
import Lagmabusinesshub from "./Components/LagmabusinessHub/Lagmabusinesshub";
import Greece from "./Components/Common/GracePages/Greece";
import Cyprus from "./Components/Common/Cyprus/Cyprus";
import Latvia from "./Components/Common/Latvia/Latvia";
import Canada from "./Components/Common/Canadapage/Canada";
import UnitedStates from "./Components/Common/UnitedStates Page/UnitedStates";
import CostaRica from "./Components/Common/CostaRica Page/CostaRica";
import HongKong from "./Components/Common/HongKong/HongKong";
import Malaysia from "./Components/Common/Malaysiapage/Malaysia";
import Singapore from "./Components/Common/SingaporePage/Singapore";
import Thailand from "./Components/Common/ThailandPage/Thailand";
// import Australia from "./Components/Common/AustraliaPage/Australia";
import UnitedArabEmirates from "./Components/Common/UnitedArabEmirates Page/UnitedArabEmirates";
import Mauritius from "./Components/Common/Mauritius Page/Mauritius";
import Arabic from "./Components/Common/ArabicPages/Arabic";
import BalkanLanguage from "./Components/Common/BalkanLanguage page/BalkanLanguage";
import Chinese from "./Components/Common/ChinesePage/Chinese";
import Frame from "./Components/Common/FramePage/Frame";
import French from "./Components/Common/FrenchPage/French";
import German from "./Components/Common/GermanPage/German";
import Hindi from "./Components/Common/HindiPage/Hindi";
import ItalianLanguage from "./Components/Common/ItalianLanguage Page/ItalianLanguage";
import Japanese from "./Components/Common/JapanesePage/Japanese";
import Korean from "./Components/Common/KoreanPage/Korean";
import Russian from "./Components/Common/RussianPage/Russian";
import Persian from "./Components/Common/PersianPage/Persian";
import Polish from "./Components/Common/PolishPage/Polish";
import Sanskrit from "./Components/Common/SanskritPage/Sanskrit";
import Asia from "./Components/Common/Asia/Asia";
import Europe from "./Components/Common/Europe/Europe";
import Australia from "./Components/Common/Aust/Australia";
import America from "./Components/Common/America/America";

function App() {``
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, [location.pathname]); 

  return (
    <>
      <TopBar />
      <ScrollToTop />

      {loading && <Loader />}

      {!loading && (
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutHeroSection />} />
          <Route path="/work-abroad" element={<AbrotHeroSection />} />
          <Route path="/study-abroad" element={<StudyAbrotHeroSection />} />
          <Route path="/languages" element={<InternationalHeroSection />} />
          <Route path="/globle-placement" element={<GlobleHeroSection />} />
          <Route path="/investment" element={<Investment />} />
          <Route path="/programs" element={<Cultural_Programs />} />
          <Route path="/holidays" element={<CulturalHolidays />} />
          <Route path="/business_Programs" element={<BusinessPrograms />} />
          <Route path="/business_delegation_programs" element={<Business_Delegation_Programs />} />
          <Route path="/lagmabusinesshub" element={<Lagmabusinesshub />} />
          <Route path="/greece" element={<Greece />} />
          <Route path="/cyprus" element={<Cyprus />} />
          <Route path="/latvia" element={<Latvia />} />
          <Route path="/canada" element={<Canada />} />
          <Route path="/unitedstate" element={<UnitedStates />} />
          <Route path="/costaRica" element={<CostaRica />} />
          <Route path="/hongkong" element={<HongKong />} />
          <Route path="/malasiya" element={<Malaysia/>} />
          <Route path="/singapore" element={<Singapore/>} />
          <Route path="/thailand" element={<Thailand/>} />
          <Route path="/australia" element={<Australia/>} />
          <Route path="/unitedarab" element={<UnitedArabEmirates/>} />
          <Route path="/mauritius" element={<Mauritius/>} />
          <Route path="/arabic" element={<Arabic/>} />
          <Route path="/balkanLanguage" element={<BalkanLanguage/>} />
          <Route path="/chinese" element={<Chinese/>} />
          <Route path="/frame" element={<Frame/>} />
          <Route path="/french" element={<French/>} />
          <Route path="/german" element={<German/>} />
          <Route path="/hindi" element={<Hindi/>} />
          <Route path="/italian" element={<ItalianLanguage/>} />
          <Route path="/japanese" element={<Japanese/>} />
          <Route path="/korian" element={<Korean/>} />
          <Route path="/russian" element={<Russian/>} />
          <Route path="/persian" element={<Persian/>} />
          <Route path="/polish" element={<Polish/>} />
          <Route path="/sanskrit" element={<Sanskrit/>} />
          <Route path="/asia" element={<Asia/>} />
          <Route path="/europe" element ={<Europe/>} />
          <Route path="/aust" element={<Australia/>} />
          <Route path="/america" element={<America/>} />
        </Routes>
      )}

      <Footer />
    </>
  );
}

export default App;
