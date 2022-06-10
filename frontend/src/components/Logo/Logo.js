import Tilt from "react-tilt";
import brain from "../../assets/brain.png";

const Logo = () => {
  return (
    <div className="m1">
      <Tilt
        className="logo"
        options={{ max: 55 }}
        style={{ height: 120, width: 120 }}
      >
        <div className="Tilt-inner">
          <img src={brain} alt="brain" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
