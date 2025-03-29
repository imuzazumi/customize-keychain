import React from "react";
import "./FrontKeychain.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faBackward,
  faForward,
  faPlay,
  faRandom,
  faRepeat
} from '@fortawesome/free-solid-svg-icons';

const FrontKeychain = ({ image, name, message, showSpotifyUI, size }) => {
  return (
    <div
      className="front-keychain"
      style={{
        width: `${size.width}px`,
        minHeight: `${size.height}px`,
      }}
    >
      {image ? (
        <img src={image} alt="Keychain Front" className="front-image" />
      ) : (
        <div className="front-placeholder">No Image</div>
      )}

      {!showSpotifyUI && (name || message) && (
        <div className="text-section">
          {name && <h3 className="name-text">{name}</h3>}
          {message && <p className="message-text">{message}</p>}
        </div>
      )}

      {showSpotifyUI && (
        <div className="spotify-style">
          <div className="song-info">
            <span className="song-title">{name || "Your Song Title"}</span>
            <span className="song-artist">{message || "Put Your Records On / Message"}</span>
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

export default FrontKeychain;
