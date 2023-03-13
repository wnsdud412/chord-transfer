import React from 'react';

const CommonTableRow = ({ children }) => {
  const score = "https://drive.google.com/uc?export=view&id=" + "1H_1NXExfMJAYBziqr4ovP7fZMPQTsMlP ";
  return (
    <div>
        <img src={score} />
    </div>
  )
}

export default CommonTableRow;