import React from 'react';

const ValidationModal = (props) => {
  console.log('here');

  return (
    <div className="validation-modal">
      <div>Could not save location</div>
      {props.errors.map(error => <li className="error-message">{error}</li>)}
      <button onClick={() => props.toggleValidationModal([])}>Close</button>
    </div>
  );
}

export default ValidationModal;
