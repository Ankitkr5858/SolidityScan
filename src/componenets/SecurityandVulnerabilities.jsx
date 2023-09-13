import React from "react";
import chart from "../assets/images/chart.png";


const data = [
  {
    title: "Critical",
    count: 0,
    color: "#960c01",
  },
  {
    title: "High",
    count: 0,
    color: "#ff5c02",
  },
  {
    title: "Medium",
    count: 0,
    color: "#ffe600",
  },
  {
    title: "Low",
    count: 0,
    color: "#38cb89",
  },
  {
    title: "Informational",
    count: 0,
    color: "#9fadc0",
  },

  {
    title: "Gas",
    count: 0,
    color: "#f596b4",
  },
  // Add more data objects as needed
];

const SecurityandVulnerabilities = () => {
  return (
    <section className="pb-[3rem]">
      <div class="container">
        <div className="flex gap-[1rem] flex-col lg:flex-row justify-between lg:mx-4">
          <div className="w-full lg:w-[25%] ">
            <div className="bg-[#fff6e4] flex flex-col items-center rounded-[10px] px-3 py-4 xl:max-w-[280px] shadow-[rgba(50,50,105,0.15)_0px_2px_5px_0px,rgba(0,0,0,0.05)_0px_1px_1px_0px]">
              <h3 className="mb-4 font-medium text-[#272624] text-[1.1rem]">
                Security Score
              </h3>
              <div className="w-[140px] h-[140px] rounded-full mb-4">
                 <img src={chart} h="140" w="140" className="w-[140px] h-[140px]" alt="pie chart with number"/>
              </div>
              <span className="text-center">
                Your Security score is Average
              </span>
            </div>
          </div>
          <div className="w-full lg:w-[72.44%]">
            <div className="bg-[#fafbfc] px-[1rem] rounded-[10px] h-full py-4  shadow-[rgba(50,50,105,0.15)_0px_2px_5px_0px,rgba(0,0,0,0.05)_0px_1px_1px_0px]">
              <h2 className="font-semibold text-[#272624] text-[1.2rem] uppercase mb-3">
                Vulnerabilities detected
              </h2>
              <div className="flex flex-row justify-center lg:justify-start gap-3 h-full flex-wrap">
                {data.map((Vulnerabilities, index) => (
                  <div
                    key={index}
                    className="bg-white wFull rounded-[10px] h-[80%] min-h-[200px] lg:min-h-[160px] flex flex-col 
   justify-center w-[48%] md:w-[23.44%] lg:w-[15%] gap-4 py-4 px-[10px] truncate text-center
    shadow-[rgba(50,50,105,0.15)_0px_0px_3px_0px,rgba(0,0,0,0.05)_0px_0px_0px_0px]"
                  >
                    <h3 className="font-medium">{Vulnerabilities.title}</h3>
                    <span className="font-medium text-[1.025rem] block">
                      {Vulnerabilities.count}
                    </span>
                    <span
                      className={`w-[16px] h-[16px] mx-auto rounded-full block`}
                      style={{ backgroundColor: Vulnerabilities.color }}
                    ></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityandVulnerabilities;
