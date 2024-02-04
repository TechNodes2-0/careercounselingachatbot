import React from 'react';

const CardDisplayer = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cards.length>0 && cards.map((card, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <h1>hgccgch</h1>
          <img src={card.imageUri} alt={card.title} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-700 mb-4">{card.subtitlet}</p>
            <p className="text-gray-700 mb-4">{card.content}</p>
            {/* <a href={card.buttons[0].link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">{card.buttons[0].text}</a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardDisplayer;
