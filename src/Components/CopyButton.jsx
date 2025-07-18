import { useState } from "react";
import { IoCopy } from "react-icons/io5";

async function copyPassword(inputref, setClipText) {
  if (inputref.current.value.trim() !== "") {
    const passwordText = inputref.current.value;
    await navigator.clipboard.writeText(passwordText);
    setClipText("Password Copied");
    return;
  }
  alert("enter password to copy!");
}

function CopyButton({ clipText, inputref, setClipText }) {
  return (
    <button onClick={() => copyPassword(inputref, setClipText)}>
      {clipText} <IoCopy />{" "}
    </button>
  );
}

export default CopyButton;
