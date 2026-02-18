import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import PopupForm from "./PopupForm"

const languages = [
  
  { name: "Arabic", path: "/arabic" },
  { name: "Balkan", path: "/BalkanLanguage" },
  { name: "Chinese", path: "/chinese" },
  { name: "French", path: "/french" },
  { name: "German", path: "/german" },
  { name: "Hindi", path: "/hindi" },
  { name: "Italian", path: "/italian" },
  { name: "Japanese", path: "/japanese" },
  { name: "Korean", path: "/korian" },
  { name: "Persian", path: "/persian" },
  { name: "Polish", path: "/polish" },
  { name: "Russian", path: "/russian" },
  { name: "Sanskrit", path: "/sanskrit" },
];

const Navbar = () => {
  
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(null);

  return (
    <>
     {showPopup && (
        <PopupForm onClose={() => setShowPopup(false)} />
      )}
    

    <header className="w-full bg-white  sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          <Link to="/" className="shrink-0">
            <img
              src="/langma/images/Logo.png"
              alt="Langma International"
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-[17px] font-medium text-[#4D5756]">
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-teal-700">
                <Link to="/" className="cursor-pointer">
               Home
               </Link>
               {/* <ChevronDown size={14} /> */}
              </button>

              <div
                className="absolute left-0 top-full mt-3 w-56 bg-white rounded-md shadow-xl
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200"
              >
                {/* <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">
                  Overseas Jobs
                </Link>
                <Link to="/globle-placement" className="block px-4 py-2 hover:bg-gray-100">
                  Global Placement
                </Link>
                <Link to="/investment" className="block px-4 py-2 hover:bg-gray-100">
                  Investment
                </Link>
                <Link to="/programs" className="block px-4 py-2 hover:bg-gray-100">
                  Programs
                </Link>
                <Link to="/holidays" className="block px-4 py-2 hover:bg-gray-100">
                  Holidays
                </Link>
                <Link to="/business_Programs" className="block px-4 py-2 hover:bg-gray-100">
                  Business Programs
                </Link>
                <Link
                  to="/business_delegation_programs"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Business Delegation Programs
                </Link>
                <Link to="/lagmabusinesshub" className="block px-4 py-2 hover:bg-gray-100">
                  Langma Business Hub
                </Link> */}
              </div>
            </div>
 <div className="relative group">
      
      <button className="flex items-center gap-0 hover:text-teal-700">
        <Link to="/languages">
        International Languages
        </Link>
        <ChevronDown size={14} />
      </button>

      <div
        className="absolute left-0 top-full mt-3 w-[420px] bg-white rounded-xl shadow-xl
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-50"
      >
        <ul className="grid grid-cols-3 gap-2 p-4">
          {languages.map((lang, index) => (
            <li key={index} className="">
              <Link
                to={lang.path}
                className="block px-3 py-2  text-gray-700
                hover:bg-gray-100 transition whitespace-nowrap"
              >
                {lang.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-teal-700">
               <Link
  to="/study-abroad"
  className="flex items-center gap-1 hover:text-teal-700"
>
  Study Abroad 
</Link>

              </button>

              {/* <div
                className="absolute left-0 top-full mt-3 w-64 bg-white rounded-md shadow-xl
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200"
              >
                <Link to="/pr-investment" className="block px-4 py-2 hover:bg-gray-100">
                 Country Programs
                </Link>
               <button
  onClick={() => setShowPopup(true)}
  className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
>
  Admissions
</button>

<button
  onClick={() => setShowPopup(true)}
  className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
>
  Apply
</button>

              </div> */}
            </div>

             <div className="relative group">
      <NavLink
        to="/work-abroad"
        className="hover:text-teal-700 flex items-center gap-1"
      >
        Work Abroad
        <ChevronDown size={14} />
      </NavLink>

      
      <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-200 z-50">
        <NavLink
          to="/work-abroad/dubai"
          className="block px-4 py-2  hover:bg-gray-100"
        >
          Language Jobs
        </NavLink>

        {/* <NavLink
          to="/work-abroad/qatar"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Skilled Worker     
             </NavLink>

        <NavLink
          to="/work-abroad/saudi"
          className="block px-4 py-2  hover:bg-gray-100"
        >
          Visa Support
        </NavLink> */}
      </div>
    </div>

            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-teal-700">
                <Link to="/globle-placement">
                 Global Assist
                 </Link>
                 <ChevronDown size={14} />
              </button>


              <div
                className="absolute left-0 top-full mt-3 w-64 bg-white rounded-md shadow-xl
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200"
              >
                <Link to="/investment" className="block px-4 py-2 hover:bg-gray-100">
                  PR by Investment
                </Link>
                <Link to="/programs" className="block px-4 py-2 hover:bg-gray-100">
                  Cultural Infusion Programs
                </Link>
                <Link to="/holidays" className="block px-4 py-2 hover:bg-gray-100">
                  Cultural Holidays
                </Link>
                <Link to="/business_Programs" className="block px-4 py-2 hover:bg-gray-100">
                  Business Exchange
                </Link>
                <Link
                  to="/business_delegation_programs"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Business Delegation 
                </Link>
                <Link to="/lagmabusinesshub" className="block px-4 py-2 hover:bg-gray-100">
                  Langma Business Hub
                </Link>
              </div>
            </div>
          </nav>

        
          <button onClick={() => setOpen(true)} className="lg:hidden">
            <Menu size={26} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="bg-white w-72 h-full p-5 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <Link to="/" onClick={() => setOpen(false)}>
                <img src="/langma/images/Logo.png" alt="logo" className="h-8" />
              </Link>
              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-sm text-[#4D5756]">
              <button
                onClick={() =>
                  setMobileDrop(mobileDrop === "global" ? null : "global")
                }
                className="flex justify-between items-center"
              >
                Home<ChevronDown size={16} />
              </button>

              {mobileDrop === "global" && (
                <div className="pl-4 flex flex-col gap-2 text-gray-600">
                  <Link to="/about" onClick={() => setOpen(false)}>
                    Overseas Jobs
                  </Link>
                  <Link to="/global-placement" onClick={() => setOpen(false)}>
                    Global Placement
                  </Link>
                  <Link to="/investment" onClick={() => setOpen(false)}>
                    Investment
                  </Link>
                  <Link to="/programs" onClick={() => setOpen(false)}>
                    Programs
                  </Link>
                  <Link to="/holidays" onClick={() => setOpen(false)}>
                    Holidays
                  </Link>
                </div>
              )}

              <button
  onClick={() =>
    setMobileDrop(mobileDrop === "languages" ? null : "languages")
  }
  className="flex justify-between items-center"
>
  International Languages
  <ChevronDown size={16} />
</button>

{mobileDrop === "languages" && (
  <div className="pl-4 grid grid-cols-2 gap-2 text-gray-600">
    {languages.map((lang, i) => (
      <Link
        key={i}
        to={lang.path}
        onClick={() => setOpen(false)}
        className="py-1"
      >
        {lang.name}
      </Link>
    ))}
  </div>
)}

<button
  onClick={() =>
    setMobileDrop(mobileDrop === "study" ? null : "study")
  }
  className="flex justify-between items-center"
>
  <Link to="/study-abroad">
  Study Abroad
  </Link>
  <ChevronDown size={16} />
</button>

{mobileDrop === "study" && (
  <div className="pl-4 flex flex-col gap-2 text-gray-600">
    <Link to="/country-programs" onClick={() => setOpen(false)}>
      Country Programs
    </Link>
    <button
  onClick={() => setShowPopup(true)}
  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
>
  Admissions
</button>

<button
  onClick={() => setShowPopup(true)}
  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
>
  Apply
</button>
  </div>
)}
<button
  onClick={() =>
    setMobileDrop(mobileDrop === "work" ? null : "work")
  }
  className="flex justify-between items-center"
>
  <Link to="/work-abroad">
  Work Abroad
  </Link>
  <ChevronDown size={16} />
</button>

{mobileDrop === "work" && (
  <div className="pl-4 flex flex-col gap-2 text-gray-600">
    <Link to="/work-abroad/language-jobs" onClick={() => setOpen(false)}>
      Language Jobs
    </Link>
    <Link to="/work-abroad/skilled-worker" onClick={() => setOpen(false)}>
      Skilled Worker
    </Link>
    <Link to="/work-abroad/visa-support" onClick={() => setOpen(false)}>
      Visa Support
    </Link>
  </div>
)}


              <button
                onClick={() =>
                  setMobileDrop(mobileDrop === "assist" ? null : "assist")
                }
                className="flex justify-between items-center"
              >
                <Link to="/globle-placement">
                 Global Assist
                 </Link> <ChevronDown size={16} />
              </button>

              {mobileDrop === "assist" && (
                <div className="pl-4 flex flex-col gap-2 text-gray-600">
                  <Link to="/pr-investment" onClick={() => setOpen(false)}>
                    PR by Investment
                  </Link>
                  <Link to="/cultural-infusion" onClick={() => setOpen(false)}>
                    Cultural Infusion Programs
                  </Link>
                  <Link to="/cultural-holidays" onClick={() => setOpen(false)}>
                    Cultural Holidays
                  </Link>
                  <Link to="/business-exchange" onClick={() => setOpen(false)}>
                    Business Exchange Programs
                  </Link>
                  <Link
                    to="/business-delegation-programs"
                    onClick={() => setOpen(false)}
                  >
                    Business Delegation Programs
                  </Link>
                  <Link to="/lagmabusinesshub" onClick={() => setOpen(false)}>
                    Langma Business Hub
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Navbar;
