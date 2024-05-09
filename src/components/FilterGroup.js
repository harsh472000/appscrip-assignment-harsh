import { convertToUpperCase } from "@/utils/convertUppercase";
import React, { useState } from "react";

const FilterGroup = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="filter-group">
      <div className="filter-header" onClick={toggle}>
        <div className="filter-title-subtitle">
          <span className="filter-title">{convertToUpperCase(title)}</span>
          <span className="filter-subtitle">All</span>{" "}
        </div>
        <div>
          <span className="filter-toggle-icon">{isOpen ? "▼" : "▲"}</span>
        </div>
      </div>
      {isOpen && (
        <ul className="filter-options">
          <label className="filter-option__unselect">Unselect all</label>

          {options.map((option, index) => (
            <li key={index}>
              <label>
                <input type="checkbox" />
                <span className="filter-option__label">{option}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterGroup;
