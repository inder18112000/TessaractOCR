import React from "react";
import Title from "./components/Title";
import Button from "./components/Button";
import ConversionComponentWrapper from "./components/ConversionComponentWrapper";

import "./style.css";

const App = () => {
 
  const [showButton, setShowButton] = React.useState(true);



  return (
    <div className="parent">
      <div className="container">
        <Title isActive={showButton} />
        {
          showButton?<Button setShowButton={setShowButton}/>:<ConversionComponentWrapper/>
        }
      </div>
    </div>
  );
};

export default App;
