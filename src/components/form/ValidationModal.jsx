import React from 'react';

const ValidationModal = (props) => {
// todo: would be nice to have modal close if clicked outside of it
  return (
    <div className="validation-modal">
      <h4 className="validation-modal-title">Could not save location</h4>
      {props.errors.map((error, i) => <li tabIndex="0" key={i} className="error-message">{error}</li>)}
      <button onClick={() => props.toggleValidationModal([])}>Close</button>
    </div>
  );
}

export default React.memo(ValidationModal);
