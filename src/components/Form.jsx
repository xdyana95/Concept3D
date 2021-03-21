import React, { useCallback, useRef } from 'react';

const isLatitude = num => isFinite(num) && Math.abs(num) <= 90;
const isLongitude = num => isFinite(num) && Math.abs(num) <= 180;

const Form = (props) => {

  const nameRef = useRef("");
  const latRef = useRef("");
  const lngRef = useRef("");

  const submitForm = useCallback((e, data) => {
    e.preventDefault();
    if (!data.name) {
      console.log(' you need a name ');
      return;
    }
    if(!isLatitude(Number(data.lat))) {
      console.log('invalid latitude');
      return;
    }

    if(!isLongitude(Number(data.lng))) {
      console.log('invalid longitude');
      return;
    }
    console.log(data, 'saving');
    props.saveLocation(data);
  }, [props.saveLocation]);

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

export default Form;
