# SmartBrain 2022

const calculateFaceLocation = (data) => {
const clarifaiFace =
data.outputs[0].data.regions[0].region_info.bounding_box;
const image = document.getElementById("inputImage");
const width = Number(image.width);
const height = Number(image.height);
console.log(height, width);
return {
leftCol: clarifaiFace.left_col _ width,
topRow: clarifaiFace.top_row _ height,
rightCol: width - clarifaiFace.right_col _ width,
bottomRow: height - clarifaiFace.bottom_row _ height,
};
};

const displayFaceBox = (box) => {
setBox({ box });
};
