import React from "react";
import { useState } from "react";
// This is the old card type not in use

// import parse from "html-react-parser";

// import rd1 from "../assets/ResearchDomainImages/rd1.jpg";
// import rd2 from "../assets/ResearchDomainImages/rd2.jpg";
// import rd3 from "../assets/ResearchDomainImages/rd3.jpg";
// import rd4 from "../assets/ResearchDomainImages/rd4.jpg";

// import rd1 from "https://cps.iic.ac.in/wp-content/uploads/2021/08/think_white_icon-1.png";
// import rd2 from "https://cps.iic.ac.in/wp-content/uploads/2021/08/think_white_icon-1.png";
// import rd3 from "https://cps.iic.ac.in/wp-content/uploads/2021/08/think_white_icon-1.png";
// import rd4 from "https://cps.iic.ac.in/wp-content/uploads/2021/08/think_white_icon-1.png";

import SanjeevSingh from '../../assets/people-img/Sanjeev-Singh-400x441.jpg'

import "./Styles/domainsection.css";

const data_rd = [
  {
    id: 1,
    // img: rd1,
    img: SanjeevSingh.src,

    tabname: "Human Centered Systems",
    content: `<p>Cyberization is all pervasive today with technology-driven engineering systems having a significant presence in almost all spheres of life. In fact, with each passing year, they are evolving at a very fast pace in terms of AI, computational capacities and their scope of use. <br><br> While they offer numerous benefits to society on one hand, the current state of cyberization is creating an intellectual challenge to envision, design and research Human-Centered Systems for the future. Since human-centered systems integrate CPS with various social units - organizations, communities and distinctive social processes and practices; our lab envisions meeting the research challenges of making them more usable and sustainable.
      </p>`,
  },
  {
    id: 2,
    // img: rd2,
    img: SanjeevSingh.src,

    tabname: "Healthcare",
    content:
      " The demand for remote healthcare is getting more crucial than ever even as CPSs are making spectacular advancements in this sector. It is piloting technologies and software to address challenging healthcare issues and revolutionizing how myriad healthcare issues are tackled. The CPS healthcare ecosystem has evolved in telemedicine, connected-health, mobile-health and intelligent health in the last two decades. Healthcare-Cyber Physical Systems (H-CPS) networks are available anywhere, anytime and to anyone with the means to digital access. Yet, they are to be rigorously explored and are a matter of high research interest.",
  },
  {
    id: 3,
    // img: rd3,
    img: SanjeevSingh.src,

    tabname: "Cybersecurity",
    content:
      "CPSs are closely integrated physical processes for networking, computation, feedback loops and comprise several tiny devices with sensing, computing and wireless communication capabilities. These enhanced functionality, automation, and connectivity also bring significant cybersecurity challenges to the CPS. Moreover,  extensive connectivity makes CPS vulnerable to cyber threats and attacks, making safety, security and privacy essential research issues.",
  },
  {
    id: 4,
    // img: rd4,
    img: SanjeevSingh.src,

    tabname: "Wearables",
    content:
      "The recent spectacular progress in Sensor technologies and allied materials, internet of Things (IoT), Informations and Technology (ICT) and microelectronic fabrication techniques have created a significant stimulus towards the development of smart wearable devices. As a result, this sector is witnessing an explosive growth offering huge market and research opportunities. \nWearable devices are complex systems of sensors and cross-domain communication networks handling large amounts of data with real-time decision-making capabilities. In addition, they provide continuous autonomous service over a long period. Therefore, rigorous research in computing and design technologies is required to adequately overcome these challenges to satisfy the stringent demands of wearable devices.",
  },
];

function DomainSection() {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (id) => {
    setSelectedTab(id);
  };

  const selectedData = data_rd.find((item) => item.id === selectedTab);
  return (
    <div className="research-dashboard">
      <div className="image-section">
        <img src={selectedData.img} alt="Image" />
      </div>
      <div className="rd-inner-wrap">
        <div className="tab-section">
          {data_rd.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={item.id === selectedTab ? "active-tab" : ""}
            >
              {item.tabname}
            </button>
          ))}
        </div>
        {/* <div className="content-section">{parse(selectedData.content)}</div> */}
        <div className="content-section">{selectedData.content}</div>

      </div>
    </div>
  );
}
export default DomainSection;


