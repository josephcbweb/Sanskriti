import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { stateData } from "../../utils/data.ts";
import "./StatePage.css";
import Modal from "../Modal/Modal.tsx";
import { LuMessageSquareMore } from "react-icons/lu";

const StatePage: React.FC = () => {
  const { stateName } = useParams<{ stateName: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const stateInfo = stateData.find(
    (state) => state.name.toLowerCase().replace(/\s+/g, "-") === stateName
  );

  if (!stateInfo) {
    return <div>State not found</div>;
  }

  const openModal = (key: string) => {
    const moreInfoKey = getMoreInfoKey(key);
    setModalContent(stateInfo[moreInfoKey]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  const formatKey = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^\w/, (c) => c.toUpperCase());
  };

  const getMoreInfoKey = (key: string) => {
    switch (key) {
      case "festival":
        return "festMoreInfo";
      case "touristSpot":
        return "touristSpotDesc";
      case "language":
        return "langMoreInfo";
      case "historicalSites":
        return "historicalSitesDesc";
      case "dishes":
        return "dishesDesc";
      default:
        return "";
    }
  };

  return (
    <div className="body">
      <Modal show={isModalOpen} onClose={closeModal} content={modalContent} />
      <div className="title-container-state">
        <p className="sanskriti-state">Sanskriti</p>
      </div>
      <div className="state-pic">
        <img src={stateInfo.image} alt={stateInfo.name} />
      </div>

      <div className="state-details">
        <h1 className="league-spartan slide-in-left animate">
          {stateInfo.name}
        </h1>
        <p>
          <span className="quote">"</span>
          {stateInfo.insights}
        </p>
      </div>

      <div className="state-insights animate">
        <h2 className="league-spartan">State Insights</h2>
      </div>

      {["festival", "touristSpot", "language", "historicalSites", "dishes"].map(
        (key) => (
          <section className="item" key={key}>
            <h3 className="league-spartan animate">{formatKey(key)}</h3>
            <div className="item-text animate">
              <p>{stateInfo[key]}</p>
              <button
                className="state-button"
                onClick={() => openModal(key)} // Pass the key directly
              >
                Learn more ::
              </button>
            </div>
          </section>
        )
      )}

      <footer>
        <p>
          Official Site:
          <a
            href={stateInfo.officialSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            {stateInfo.name}
          </a>
        </p>
      </footer>
    </div>
  );
};

export default StatePage;
