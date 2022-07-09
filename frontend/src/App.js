import { useState, useContext, useEffect } from "react";

import Navigation from "./components/Nav";

import Landing from "./components/Landing";
import Detect from "./components/Detect";
import Profile from "./components/Profile";

import UserContext, { UserProvider } from "./context/User";

const App = () => {
  const [input, onInputChange] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});
  const onButtonSubmit = async () => {
    setImageUrl(input);
    calculateFaceLocation();
    console.log("clicky");
  };

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(height, width);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box) => {
    setBox({ box });
  };

  return (
    <div className="App">
      <UserProvider>
        <Navigation />
        <Landing />
        <Detect />
        <Profile box={box} />
      </UserProvider>
    </div>
  );
};

export default App;
