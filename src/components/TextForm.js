import react, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" converted to upper case!!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" converted to lower case!!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" text cleared!!", "success");
  };
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" text copied!!", "success");
  };
  const [text, setText] = useState("enter text here");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#1D80A3" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#1D80A3",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          convert to upper case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick}>
          convert to lower case
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick}>
          clear text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleCopyClick}>
          copy text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#1D80A3" }}
      >
        <h2>your text summary</h2>
        <p>
          {text.length === 0 ? "0" : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "enter something in textbox above to preview here."}
        </p>
      </div>
    </>
  );
}
