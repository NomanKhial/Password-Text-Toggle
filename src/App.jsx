import { useEffect, useRef, useState } from "react";
import Heading from "./Components/Heading";
import CopyButton from "./Components/CopyButton";
import InputBox from "./Components/Input";

function App() {
  const [visible, setVisible] = useState("hidden");
  const inputref = useRef();
  const [clipText, setClipText] = useState("Copy Password");

  useEffect(() => {
    const id = setTimeout(() => {
      setClipText("Copy Password");
      inputref.current.value = "";
      setVisible("hidden");
    }, 3000);
    return () => clearTimeout(id);
  }, [clipText]);

  return (
    <>
      <Heading />
      <div className="container">
        <CopyButton
          clipText={clipText}
          inputref={inputref}
          setClipText={setClipText}
        />
        <InputBox
          inputref={inputref}
          visible={visible}
          setVisible={setVisible}
        />
      </div>
    </>
  );
}

export default App;
