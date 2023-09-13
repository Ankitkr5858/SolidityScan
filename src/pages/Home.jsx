import React from "react";

import SecurityandVulnerabilities from "../componenets/SecurityandVulnerabilities";
import ScanstatticsandDetailedresult from "../componenets/Scanstatticsanddetailedresult";
import ThreatScanSummary from "../componenets/ThreatScanSummary";

const Home = () => {
  return (
    <main className="py-[4rem] bg-[#f7fafd]">
      <SecurityandVulnerabilities />
      <ScanstatticsandDetailedresult />
      <ThreatScanSummary />
    </main>
  );
};

export default Home;
