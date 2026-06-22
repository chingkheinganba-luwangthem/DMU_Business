"use client";

import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      {/* University Header - matching official DMU website */}
      <section className="university-header">
        <div className="university-header-inner">
          <div className="uni-logo-area">
            <img src="/dmu-logo.png" alt="Dhanamanjuri University Logo" className="uni-logo" />
          </div>
          <div className="uni-text-area">
            <img src="/dmu-meetei-text.png" alt="Dhanamanjuri University" className="uni-meetei-img" />
            <h1 className="uni-name">Dhanamanjuri University</h1>
            <p className="uni-location">Manipur</p>
          </div>
        </div>
      </section>

      {/* Journal Title Bar */}
      <section className="journal-title-bar">
        <div className="journal-title-inner">
          <h2 className="journal-title">JOURNAL
            OF
            BUSINESS AND ALLIED RESEARCH</h2>
          <p className="journal-subtitle">Volume I Issue I November 2025
            A peer-reviewed business and allied research Journal
            (Annual)
          </p>


        </div>
      </section>

      <Navbar />
    </>
  );
}
