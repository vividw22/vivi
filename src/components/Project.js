import React, { useState } from 'react';
import './Project.css'; 
const initialItems = [
  { id: 1, title: 'SD', description: 'SDN SIDOREJO 02' },
  { id: 2, title: 'SMP', description: 'SMPN 1 SEMBORO' },
  { id: 3, title: 'SMK', description: 'SMKN 6 JEMBER' },
];

const ProjectDisplay = () => {
  const [items, setItems] = useState(initialItems);

  const renderItem = (item) => (
    <div key={item.id} className="item">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );

  return (
    <div className="project-display">
      <h1></h1>
      <div className="item-list">
        {items.map((item) => renderItem(item))}
      </div>
    </div>
  );
};

export default ProjectDisplay;
