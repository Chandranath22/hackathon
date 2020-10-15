import React from 'react';
import './popup.scss';

const Popup = ({error, handleError, message}) => {
  return (
    <div id="popup1" className={error ? "overlay overlay-show" : "overlay"}>
      <div className="popup">
        <h2>Something went wrong</h2>
        <div className="close" onClick={handleError}>&times;</div>
        <div className="content">{message}</div>
      </div>
    </div>
  );
};

export default Popup;