import React, { useEffect } from 'react';
import LeafletMap from '../containers/LeafletMap';
import FormContainer from '../containers/FormContainer';

const App = (props) => {

  useEffect(() => {
    props.fetchAllLocations();
  }, []);

  return (
      <div className="App">
        <FormContainer />
        <LeafletMap locations={props.locations} />
      </div>
  );
}

export default App;
