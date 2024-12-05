import Head from "./BodyParts/Head";
import Body from "./BodyParts/Body";
import LeftArm from "./BodyParts/LeftArm";
import RightArm from "./BodyParts/RightArm";
import RightLeg from "./BodyParts/RightLeg";
import LeftLeg from "./BodyParts/LeftLeg";

interface props {
  numberOfGuesses: number;
}

const Body_Parts = [
  <Head key={0} />,
  <Body key={1} />,
  <LeftArm key={2} />,
  <RightArm key={3} />,
  <RightLeg key={4} />,
  <LeftLeg key={5} />,
];

const HangmanDrawing = ({ numberOfGuesses }: props) => {
  return (
    <div style={{ position: "relative" }}>
      {Body_Parts.slice(0, numberOfGuesses)}

      {/* // NooseBar // */}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      {/* // TopBar // */}
      <div
        style={{
          height: "10px",
          width: "200px",
          marginLeft: "120px",
          background: "black",
        }}
      />
      {/* // Trunk // */}
      <div
        style={{
          height: "400px",
          width: "10px",
          marginLeft: "120px",
          background: "black",
        }}
      />
      {/* // BaseLine // */}
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;
