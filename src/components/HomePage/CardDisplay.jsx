import React, { useState } from 'react';

const CardDisplay = ({ domains }) => {
  const [selectedDomain, setSelectedDomain] = useState(null);

  const handleCardClick = (domain) => {
    setSelectedDomain(domain);
  };

  return (
    <div className="flex">
      {/* Cards on the left */}
      <div className="cards-container grid grid-cols-2 gap-4">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="card bg-white p-4 rounded-lg shadow-md cursor-pointer"
            onClick={() => handleCardClick(domain)}
          >
            <img src={domain.data.iconImg} alt={domain.data.domainName} className="w-16 h-16 mx-auto" />
            <p className="text-center mt-2 font-bold">{domain.data.domainName}</p>
          </div>
        ))}
      </div>

      {/* Details on the right */}
      <div className="details-container p-4 ml-8 bg-gray-100 rounded-lg">
        {selectedDomain ? (
          <>
            <h2 className="text-2xl font-bold">{selectedDomain.data.domainName}</h2>
            <p className="mt-2">{selectedDomain.data.shortDescription}</p>
          </>
        ) : (
          <p className="text-gray-500">Select a card to see details</p>
        )}
      </div>
    </div>
  );
};

export default CardDisplay;
