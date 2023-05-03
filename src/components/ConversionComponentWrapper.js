import React from "react";
import Tesseract from "tesseract.js";
import Speech from "react-speech";
function ConversionComponentWrapper() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [image, setImage] = React.useState("");
  const [text, setText] = React.useState("");
  const [progress, setProgress] = React.useState(0);
  const [imageSource, setImageSource] = React.useState("");
  const handleSubmit = () => {
    setIsLoading(true);
    Tesseract.recognize(image, "eng", {
      logger: (m) => {
        console.log(m);
        if (m.status === "recognizing text") {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        console.log(result.data);
        setText(result.data.text);
        setIsLoading(false);
      });
  };
  React.useEffect(() => {
    console.log(imageSource);
  }, [imageSource]);

  return (
    <div className="row h-100">
      <div className="col-md-8 mx-auto h-100 d-flex flex-column justify-content-center">
        {isLoading && (
          <div className="bg-white" style={{ padding: 10, borderRadius: 10 }}>
            <progress className="form-control" value={progress} max="100">
              {progress}%{" "}
            </progress>{" "}
            <p className="text-center py-0 my-0">Converting:- {progress} %</p>
          </div>
        )}
        {!isLoading && !text && (
          <>
            <h1
              className="text-center py-5 mc-5"
              style={{
                border: "2px dashed #bbb",
                color: "white",
                padding: "20px",
              }}
            >
              Image To Text
            </h1>
            <input
              type="file"
              accept="image"
              onChange={(e) => {
                setImageSource(e.target.value);
                setImage(URL.createObjectURL(e.target.files[0]));
              }}
              className="form-control mt-5 mb-2"
            />
            <button
              onClick={handleSubmit}
              className="btn btn-primary my-button my-5"
            >
              <p
                style={{ fontSize: "18px", margin: 0, fontFamily: "Righteous" }}
              >
                Convert
              </p>
            </button>
          </>
        )}
        {!isLoading && text && (
          <>
            <div className="row">
              <textarea
                className="col-sm-4 form-control w-100 mt-5"
                rows="8"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>

            <Speech text={text} id="speech" rate="0.8" aria-label="Text to Speech"/>

            <button
              onClick={() => setText("")}
              className="btn btn-primary my-button my-5"
            >
              <p
                style={{ fontSize: "18px", margin: 0, fontFamily: "Righteous" }}
              >
                Reset
              </p>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ConversionComponentWrapper;
