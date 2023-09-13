import React from "react";
import ShieldTick from "../assets/images/ui-svgicons/ShieldTick";
import ShieldCross from "../assets/images/ui-svgicons/ShieldCross";
import Meter from "../assets/images/meterchart.png";
import Cross from "../assets/images/cross.png";

const ThreatScanPoints = [
  {
    title: "PRESENCE OF MINTING FUNCTION",
    description: `The contract can mint new tokens. The _mint functions was detected in the contracts.
        Mint functions are used to create new tokens and transfer them to the user's/owner's wallet to whom the tokens are minted.
        This increases the overall circulation of the tokens.`,
    image: <ShieldCross />,
  },
  {
    title: "PRESENCE OF BURN FUNCTION",
    description: `The tokens can not be burned in this contract.
    Burn functions are used to increase the total value of the tokens by decreasing the total supply.`,
    image: <ShieldTick />,
  },
  {
    title: "SOLIDITY PRAGMA VERSION",
    description: `The contract can be compiled with an older Solidity version.
    Pragma versions decide the compiler version with which the contract can be compiled. 
    Having older pragma versions means that the code may be compiled with outdated and vulnerable compiler versions,
     potentially introducing vulnerabilities and CVES.`,
    image: <ShieldCross />,
  },
  // Add more data objects as needed
];

const ThreatScanSummary = () => {
  return (
    <section className="pb-[3rem] px-4">
      <div
        class="container bg-[#fafbfc] rounded-[10px] pb-12
    shadow-[rgba(50,50,105,0.15)_0px_2px_5px_0px,rgba(0,0,0,0.05)_0px_1px_1px_0px]"
      >
        <h2 className="font-semibold text-[#272624] text-[1.2rem] uppercase py-5 text-center md:text-start">
          THREAT SCAN SUMMARY
        </h2>
        <div
          className="bg-white py-4 rounded-[10px]
        shadow-[rgba(50,50,105,0.15)_0px_2px_5px_0px,rgba(0,0,0,0.05)_0px_1px_1px_0px]"
        >
          <div
            className="flex items-center justify-between flex-col lg:flex-row 
            border-b-[1px] border-b-[#ededf5] pt-4 pb-8 mx-4 lg:mx-12 gap-8"
          >
            <div className="flex-[0_0_auto]">
              <div className="flex-[0_0_auto]">
                <img
                  src={Meter}
                  w="202"
                  h="107"
                  className="w-[202px] h-[107px]"
                  alt="meter chart"
                />
              </div>
              <span className="block text-center text-[#6b7890]">
                Threat Score
              </span>
            </div>
            <div className="leading-[1.6]">
              <p>
                ThreatScan, a smart contract analysis tool, is built by the
                SolidityScan team. It is designed to assist users in identifying
                potential rug pull scams by providing an in-depth analysis of a
                smart contract's code and highlighting any potential red flags
                that may indicate a scam.
              </p>
            </div>
          </div>
          {ThreatScanPoints.map((threatscanpoints, index) => (
            <div
              key={index}
              className="flex items-center justify-between flex-col lg:flex-row 
            border-b-[1px] border-b-[#ededf5] py-6 mx-4 lg:mx-12 gap-8 last-of-type:border-b-[transparent]"
            >
              <div className="w-[44px] h-[44px]  flex-[0_0_auto]">
                {threatscanpoints.image}
              </div>
              <div className="leading-[1.6]">
                <h2 className="font-semibold text-[#272624] text-[1.2rem] uppercase mb-1 text-center md:text-start">
                  {threatscanpoints.title}
                </h2>
                <p className="text-[#67758d]">{threatscanpoints.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreatScanSummary;
