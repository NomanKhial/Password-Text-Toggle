import Buttons from "./Buttons";
function InputBox({ inputref, visible, setVisible }) {
  return (
    <>
      <input
        ref={inputref}
        size={30}
        type={visible === "hidden" ? "password" : "text"}
        placeholder="enter password"
      />
      <Buttons setVisible={setVisible} visible={visible} />
    </>
  );
}

export default InputBox;
