import React, { useState } from "react";
import FrontKeychain from "./components/FrontKeychain";
import BackKeychain from "./components/BackKeychain";
import "./App.css";

const App = () => {
  // Front
  const [frontImage, setFrontImage] = useState(null);
  const [frontName, setFrontName] = useState("");
  const [frontMessage, setFrontMessage] = useState("");
  const [showSpotifyUI, setShowSpotifyUI] = useState(false);
  const [frontSizePreset, setFrontSizePreset] = useState("medium");

  // Back
  const [qrCodeImg, setQrCodeImg] = useState(null);
  const [qrShortUrl, setQrShortUrl] = useState("");
  const [backSongTitle, setBackSongTitle] = useState("");
  const [backMessage, setBackMessage] = useState("");
  const [showSpotifyUIBack, setShowSpotifyUIBack] = useState(false);
  const [backSizePreset, setBackSizePreset] = useState("medium");

  const handleFrontUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFrontImage(URL.createObjectURL(file));
    }
  };

  const handleBackUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const res = await fetch("https://customize-keychain-251651397550.asia-southeast1.run.app/upload-media", {
        method: "POST",
        body: formData,
      });
  
      const data = await res.json();
      if (data.success) {
        setQrCodeImg(data.qrCodeDataUrl);
        setQrShortUrl(data.shortUrl);
      } else {
        alert("QR generation failed");
      }
    } catch (err) {
      alert("Upload error");
      console.error(err);
    }
  };
  

  const sizeOptions = {
    small: { width: 180, height: 240 },
    medium: { width: 224, height: 280 },
    large: { width: 260, height: 320 },
  };

  return (
    <div className="app">
      <h1>🎨 Keychain Designer</h1>

      <div className="editor">
        <div className="front-controls">
          <h3>Front Keychain</h3>
          <input type="file" accept="image/*" onChange={handleFrontUpload} />
          <input
            type="text"
            placeholder="Name or Song Title"
            value={frontName}
            onChange={(e) => setFrontName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Artist / Optional Message"
            value={frontMessage}
            onChange={(e) => setFrontMessage(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={showSpotifyUI}
              onChange={() => setShowSpotifyUI(!showSpotifyUI)}
            /> Show Spotify-style design
          </label>
          <label>
            Front Keychain Size:
            <select
              value={frontSizePreset}
              onChange={(e) => setFrontSizePreset(e.target.value)}
              style={{ marginLeft: "8px" }}
            >
              <option value="small">Small (180×240)</option>
              <option value="medium">Medium (224×280)</option>
              <option value="large">Large (260×320)</option>
            </select>
          </label>
        </div>

        <div className="back-controls">
          <h3>Back Keychain</h3>
          <input type="file" accept="audio/*,video/*" onChange={handleBackUpload} />
          <label>
            Back Song Title:
            <input
              type="text"
              placeholder="Back Keychain Song Title"
              value={backSongTitle}
              onChange={(e) => setBackSongTitle(e.target.value)}
            />
          </label>
          <label>
            Back Message:
            <input
              type="text"
              placeholder="Back Keychain Message"
              value={backMessage}
              onChange={(e) => setBackMessage(e.target.value)}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={showSpotifyUIBack}
              onChange={() => setShowSpotifyUIBack(!showSpotifyUIBack)}
            /> Show Spotify-style design (Back)
          </label>
          <label>
            Back Keychain Size:
            <select
              value={backSizePreset}
              onChange={(e) => setBackSizePreset(e.target.value)}
              style={{ marginLeft: "8px" }}
            >
              <option value="small">Small (180×240)</option>
              <option value="medium">Medium (224×280)</option>
              <option value="large">Large (260×320)</option>
            </select>
          </label>
        </div>

        <div className="previews">
          <FrontKeychain
            image={frontImage}
            name={frontName}
            message={frontMessage}
            showSpotifyUI={showSpotifyUI}
            size={sizeOptions[frontSizePreset]}
          />
          <BackKeychain
            qrCodeImg={qrCodeImg}
            shortUrl={qrShortUrl}
            song={backSongTitle}
            message={backMessage}
            showSpotifyUI={showSpotifyUIBack}
            size={sizeOptions[backSizePreset]}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
