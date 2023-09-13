import React from "react";
import PieChart from "../assets/images/piechart.png";


const SecurityStat = [
  {
    title: "Security Score",
    count: "55.56/100",
  },
  {
    title: "Duration",
    count: "0 seconds",
  },
  {
    title: "Lines of Code",
    count: "27",
  },
  // Add more data objects as needed
];

const ScanstatticsandDetailedresult = () => {
  return (
    <section className="pb-[3rem]">
      <div class="container">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-4">
          <div
            className="w-full lg:w-[48.55%] bg-[#fafbfc] rounded-[10px] px-3 py-4 mb-[2rem] lg:mb-0
          shadow-[rgba(50,50,105,0.15)_0px_2px_5px_0px,rgba(0,0,0,0.05)_0px_1px_1px_0px]"
          >
            <h2 className="font-semibold text-[#272624] text-[1.2rem] uppercase mb-3 text-center md:text-start">
              Scan Statistics
            </h2>
            <div
              className="bg-white rounded-[10px] py-4
              shadow-[rgba(50,50,105,0.15)_0px_0px_3px_0px,rgba(0,0,0,0.05)_0px_0px_0px_0px] "
            >
              {SecurityStat.map((securitystat, index) => (
                <div
                  key={index}
                  className="bg-white flex items-center justify-between mx-4 px-1 last-of-type:border-b-[transparent]
                  border-b-[1px] border-b-[#ededf5] py-[16px] text-[0.925rem] font-medium mb-2 last-of-type:mb-0
                "
                >
                  <span className="font-medium">{securitystat.title}</span>
                  <span className="font-medium text-[1.025rem] block">
                    {securitystat.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="w-full lg:w-[48.55%] bg-[#fafbfc] rounded-[10px] px-3 py-4
           shadow-[rgba(50,50,105,0.15)_0px_2px_5px_0px,rgba(0,0,0,0.05)_0px_1px_1px_0px]"
          >
            <h2 className="font-semibold text-[#272624] text-[1.2rem] uppercase mb-3 text-center md:text-start">
              Detailed Result
            </h2>

            <div
              className="bg-white rounded-[10px] py-4 flex flex-col items-center lg:flex-row gap-[2rem] px-[1.5rem]
              shadow-[rgba(50,50,105,0.15)_0px_0px_3px_0px,rgba(0,0,0,0.05)_0px_0px_0px_0px] min-h-[220px]"
            >
              <div className="h-[160px] w-[160px] rounded-full  flex-[0_0_auto]">
                <img src={PieChart}  h="160" w="160" className="w-[160px] h-[160px]" alt="pie chart"/>
              </div>
              <div className="font-medium lg:leading-[1.7]">
                <p>
                  This Contract has been by analyzed more than 130 proprietray
                  vulnerability patterns of SolidScan. Vulnerability details and
                  mechanisms specific to the contract are now available in the
                  link below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanstatticsandDetailedresult;
