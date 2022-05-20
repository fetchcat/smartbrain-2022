import { useState } from "react";

import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import ImageLinkForm from "./components/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition";
import Rank from "./components/Rank";

import NewParticles from "./components/NewParticles";

const App = () => {
  const [input, onInputChange] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onButtonSubmit = async () => {
    setImageUrl(input);
    console.log("clicky");
  };

  return (
    <div className="App">
      <NewParticles />
      <Navigation />

      <div className="center column card">
        <Logo />
        <Rank />
        <div className="m1">
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onButtonSubmit}
          />
        </div>
        <FaceRecognition imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default App;
