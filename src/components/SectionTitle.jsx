import React from 'react';
import './SectionTitle.css';

function SectionTitle({ title, description, aosType }) {
  // description이 배열인지 확인하여 줄바꿈 처리를 합니다.
  const renderDescription = () => {
    if (!description) return null;

    const descriptionContent = Array.isArray(description)
      ? description.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < description.length - 1 && <br />}
          </React.Fragment>
        ))
      : description;

    return <p className="section-title-description">{descriptionContent}</p>;
  };

  return (
    <div className="section-title-wrapper" data-aos={aosType || "fade-up"}>
      <h2 className="section-title-main">{title}</h2>
      {renderDescription()}
    </div>
  );
}

export default SectionTitle;