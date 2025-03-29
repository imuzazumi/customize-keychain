import React from "react";
import "./BackKeychain.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faBackward,
  faForward,
  faPlay,
  faRandom,
  faRepeat
} from '@fortawesome/free-solid-svg-icons';

const BackKeychain = ({ qrCodeImg, shortUrl, size, song, message, showSpotifyUI }) => {

  return (
    <div
      className="back-keychain"
      style={{
        width: `${size.width}px`,
        minHeight: `${size.height}px`,
      }}
    >
      <div className="hole" />

      {qrCodeImg ? (
        <img src={qrCodeImg} alt="QR Code" className="qr-image" />
      ) : (
        <div className="qr-placeholder">No QR Code</div>
      )}

      {shortUrl && (
        <div className="short-url">
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}

        {!showSpotifyUI && (song || message) && (
        <div className="text-section">
          {song && <h3 className="name-text">{song}</h3>}
          {message && <p className="message-text">{message}</p>}
        </div>
      )}

        {showSpotifyUI && (
          <div className="spotify-style">
            <div className="song-info">
              <span className="song-title">{song || "Your Song Title"}</span>
              <span className="song-artist">{message || "Artist / Message"}</span>
              <FontAwesomeIcon icon={faHeart} className="heart" />


          </div>
      

          <div className="progress-bar">
            <span>0:07</span>
            <div className="bar">
              <div className="circle"></div>
            </div>
            <span>4:09</span>
          </div>

          <div className="controls">
          <FontAwesomeIcon icon={faRandom} />
          <FontAwesomeIcon icon={faBackward} />
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faForward} />
          <FontAwesomeIcon icon={faRepeat} />
        </div>


          <div className="spotify-barcode">[|||||||||‖|‖|||||]</div>
        </div>
      )}
    </div>
  );
};

export default BackKeychain;
