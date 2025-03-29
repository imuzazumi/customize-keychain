import React from "react";
import KeychainOutline from "./KeychainOutline";
import { QRCodeSVG } from "qrcode.react";

const KeychainCard = ({
  imageFront,
  nameFront,
  qrCode,
  shortUrl,
  keychainSize,
  showOutline,
  showHole,
  bgColor,
  material,
  shape
}) => {
  const height = keychainSize * 0.6;

  const textureOverlay = {
    wood: "url('/textures/wood.png')",
    metal: "url('/textures/metal.png')",
    acrylic: "url('/textures/acrylic.png')",
  };

  return (
    <div style={{ position: "relative", width: `${keychainSize * 2 + 20}px` }}>
      {showOutline && (
        <KeychainOutline
          width={keychainSize * 2 + 20}
          height={height}
          showHole={showHole}
          shape={shape}
        />
      )}
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: "30px",
          left: "0",
          width: `${keychainSize * 2 + 20}px`,
          height: `${height}px`,
        }}
      >
        {/* Front Side */}
        <div
          style={{
            width: `${keychainSize}px`,
            height: "100%",
            backgroundColor: bgColor,
            backgroundImage: material !== "none" ? textureOverlay[material] : "none",
            backgroundSize: "cover",
            borderRadius: "10px",
            marginRight: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {imageFront && (
            <img
              src={imageFront}
              alt="Front"
              style={{
                width: "100%",
                height: "70%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          )}
          <div
            style={{
              fontWeight: "bold",
              fontSize: `${Math.max(keychainSize * 0.12, 14)}px`,
              marginTop: "5px",
              textAlign: "center",
              background: "#fff",
              padding: "4px",
              borderRadius: "4px",
              width: "100%",
            }}
          >
            {nameFront}
          </div>
        </div>

        {/* Back Side */}
        <div
          style={{
            width: `${keychainSize}px`,
            height: "100%",
            backgroundColor: bgColor,
            backgroundImage: material !== "none" ? textureOverlay[material] : "none",
            backgroundSize: "cover",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {qrCode ? (
            <img
              src={qrCode}
              alt="QR"
              style={{
                width: "100%",
                height: "70%",
                objectFit: "contain",
                borderRadius: "8px",
              }}
            />
          ) : shortUrl ? (
            <QRCodeSVG
              value={shortUrl}
              size={Math.max(keychainSize * 0.6, 150)}
              level="H"
            />
          ) : (
            <p>Upload file to generate QR</p>
          )}
          <div
            style={{
              fontSize: `${keychainSize * 0.08}px`,
              textAlign: "center",
              background: "#fff",
              padding: "4px",
              borderRadius: "4px",
              width: "100%",
              overflowWrap: "break-word",
            }}
          >
            <a href={shortUrl} style={{ textDecoration: "none", color: "#007bff" }}>
              {shortUrl}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeychainCard;
