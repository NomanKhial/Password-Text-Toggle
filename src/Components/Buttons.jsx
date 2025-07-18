import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

function Buttons({ setVisible, visible }) {
  return (
    <button
      onClick={() =>
        setVisible((prev) => (prev === "visible" ? "hidden" : "visible"))
      }
    >
      {visible === "hidden" ? <FaEye size={30} /> : <FaEyeSlash size={30} />}
    </button>
  );
}

export default Buttons;
