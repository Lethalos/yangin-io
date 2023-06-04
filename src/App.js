import React from 'react';
import YardimAl from './components/YardimAl';
import YardimSagla from './components/YardimSagla';
import YardimListeleri from './components/YardimListeleri';
import LogoComp from './components/LogoComp';

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "0 auto",
        backgroundColor: "#f7f7f7",
      }}
    >
      <LogoComp />
      <YardimAl />
      <YardimSagla />
      <YardimListeleri />
    </div>
  );
}

export default App;
