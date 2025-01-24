import React from "react";
import { useNavigate } from "react-router-dom";
import "./StateMenu.css"; // Import the CSS file for styling

// List of states in India (including Jammu & Kashmir and Ladakh)
const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "Puducherry",
  "Jammu and Kashmir",
  "Ladakh",
];

const StateMenu: React.FC = () => {
  const navigate = useNavigate();

  // Handle state click to navigate to the state's page
  const handleStateClick = (state: string) => {
    const stateSlug = state.toLowerCase().replace(/\s+/g, "-"); // Convert spaces to hyphens and lowercase
    navigate(`/state/${stateSlug}`);
  };

  return (
    <div className="states-list-container">
      <div className="states-grid">
        {states.map((state) => (
          <div
            key={state}
            className="state-item"
            onClick={() => handleStateClick(state)}
          >
            {state}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateMenu;
