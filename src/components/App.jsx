import React, { useEffect } from 'react';
import LeafletMap from './map/LeafletMap';
import FormContainer from '../containers/form/FormContainer';
import ValidationModal from '../containers/form/ValidationModal';

const App = (props) => {

  useEffect(() => {
    props.fetchAllLocations();
  }, []);

  return (
      <div className="App">
        {props.openModal && <ValidationModal />}
        <FormContainer />
        <LeafletMap/>
      </div>
  );
}

export default React.memo(App);
