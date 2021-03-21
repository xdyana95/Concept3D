import React, { useEffect } from 'react';
import LeafletMap from './LeafletMap';
import FormContainer from '../containers/FormContainer';
import ValidationModal from '../containers/ValidationModal';

const App = (props) => {

  useEffect(() => {
    props.fetchAllLocations();
  }, []);

  return (
      <div className="App">
        {props.openModal && <ValidationModal />}
        <FormContainer />
        <LeafletMap locations={props.locations} center={props.center}/>
      </div>
  );
}

export default App;
