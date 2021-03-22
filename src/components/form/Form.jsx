import React, { useCallback, useRef } from 'react';
import {validateLocation} from '../../utils/validationUtils';

const Form = (props) => {

  const nameRef = useRef("");
  const latRef = useRef("");
  const lngRef = useRef("");

  const submitForm = useCallback((e, data) => {
    e.preventDefault();
    const validationErrors = validateLocation(data);
    validationErrors.length > 0 ? props.toggleValidationModal(validationErrors) : saveLocation(data);
  }, [props.saveLocation]);

  const saveLocation = useCallback((data) => {
    nameRef.current.value = "";
    latRef.current.value = "";
    lngRef.current.value = "";
    props.saveLocation(data)
  })

  return (
    <form className="form">
      <label>
        Name
        <input
          ref={nameRef}
          type="text"
        />
      </label>
      <label>
        Lat
        <input
          ref={latRef}
          type="text"
        />
      </label>
      <label>
        Lon
        <input
          ref={lngRef}
          type="text"/>
      </label>
      <button
        disabled={false}
        type="submit"
        onClick={(e) => submitForm(e, {
          name: nameRef.current.value,
          lat: latRef.current.value,
          lng: lngRef.current.value
        })}
      >
          Save
      </button>
    </form>
  );
}

export default React.memo(Form);
