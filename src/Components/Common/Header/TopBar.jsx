import Navbar from "./Navbar";
import "../../../../src/index.css";

export default function TopBar() {
  return (
    <>
      <div className="w-full bg-[#429198] text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2">
          
          <div className="
            flex flex-col gap-2
            sm:flex-row sm:justify-between sm:items-center
          ">
            
            <p className="text-center sm:text-left whitespace-nowrap">
              Welcome To Langma International
            </p>

            <div className="
              flex flex-col gap-2
              sm:flex-row sm:items-center sm:gap-4
              text-white
            ">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.45l1.05 3.63a2 2 0 01-.45 1.82L9.12 11.88a16 16 0 006.99 6.99l1.98-2.7a2 2 0 011.82-.45l3.63 1.05A2 2 0 0121 21h-3a18 18 0 01-15-15V5z"
                  />
                </svg>
                <span className="whitespace-nowrap">
                  +91-9810117094
                </span>
              </div>

              {/* Divider (Desktop only) */}
              <span className="hidden sm:inline text-white/60">|</span>

              {/* Email */}
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="break-all sm:whitespace-nowrap">
                  info@langmainternational.com
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

      <Navbar />
    </>
  );
}
