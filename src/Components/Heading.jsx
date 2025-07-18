import { RiLockPasswordFill } from "react-icons/ri";

function Heading() {
  return (
    <h1>
      React Password - Text Toggle App{" "}
      <RiLockPasswordFill
        size={30}
        color="crimson"
        style={{ verticalAlign: "middle" }}
      />
    </h1>
  );
}

export default Heading;
