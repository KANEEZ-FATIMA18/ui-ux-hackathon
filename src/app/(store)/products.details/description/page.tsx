"use client"
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const DetailsSection = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "Additional Info", "Reviews", "Video"];
  const content = {
    Description: {
      title: "Varius tempor.",
      body: `Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed 
      et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit 
      consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. 
      Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis 
      justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverra.`,
      details: [
        "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverra.",
        "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverra.",
        "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverra.",
        "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverra.",
      ],
    },
  };

  return (
    <div className="bg-[#F9F8FE] mx-auto px-44 mt-28 w-full py-8">
      {/* Tabs */}
      <div className="flex space-x-8 border-b border-gray-200 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-xl font-medium ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-[#151875]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "Description" && (
        <div className="mt-6 text-gray-700">
          <h3 className="text-xl font-bold text-[#151875]">
            {content.Description.title}
          </h3>
          <p className="mt-4 leading-relaxed">{content.Description.body}</p>

          <h4 className="text-lg font-bold text-[#151875] mt-8">More details</h4>
          <ul className="mt-4 space-y-4">
            {content.Description.details.map((detail, index) => (
              <li
                key={index}
                className="flex items-center space-x-2 text-gray-600"
              >
                <FaArrowRight
                  className={`${
                    index === 1 ? "text-blue-600" : "text-gray-600"
                  }`}
                />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DetailsSection;
