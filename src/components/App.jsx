import React, { useEffect } from 'react';
import LeafletMap from '../containers/LeafletMap';
import FormContainer from '../containers/FormContainer';
import ValidationModal from '../containers/ValidationModal';

const App = (props) => {

  useEffect(() => {
    props.fetchAllLocations();
  }, []);
  console.log('is modal open? ', props.openModal)

  return (
      <div className="App">
        {props.openModal && <ValidationModal />}
        <FormContainer />
        <LeafletMap locations={props.locations} />
      </div>
  );
}

export default App;
