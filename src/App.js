import React, { useEffect } from 'react';
import './App.css';
import MainComp from './Components/MainComp';
import { BrowserRouter, useHistory } from 'react-router-dom';
import firebase from './Firebase/firebase';

const logCurrentPage = () => {
  firebase.analytics().setCurrentScreen(window.location.pathname)
  firebase.analytics().logEvent('screen_view')
};

const AnalyticsComponent = () => {
  const history = useHistory();
  useEffect(() => {
    logCurrentPage();
    history.listen(() => {
      logCurrentPage();
    });
  }, [history]);
  return (<React.Fragment></React.Fragment>);
};

function App() {
  return (
    <BrowserRouter>
      <AnalyticsComponent/>
      <div className="App">
        <MainComp/>
      </div>
    </BrowserRouter>
  );
}

export default App;
