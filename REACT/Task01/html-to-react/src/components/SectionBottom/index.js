import React from "react";
import img1 from "../../static/Lingua web 1.png";
import img2 from "../../static/Lingua web 2.png";
import img3 from "../../static/Lingua web 3.png";
import img4 from "../../static/Lingua web 4.png";
import img5 from "../../static/Lingua web 5.png";
import img6 from "../../static/Lingua web 6.png";
import img7 from "../../static/Lingua web 7.png";

export default function () {
  const row1 = [img1, img2, img3];
  const row2 = [img4, img5, img6, img7];
  return (
    <div
      style={{
        background: "darkgreen",
        height: "1000px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ height: "80%" }}>
        <div
          style={{
            height: "50%",
            width: "99vw",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {row1.map((im) => (
            <img style={{ margin: "0", padding: "0" }} src={im} />
          ))}
        </div>
        <div
          style={{
            height: "50%",
            width: "99.4vw",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {row2.map((im) => (
            <img style={{ margin: "0", padding: "0" }} src={im} />
          ))}
        </div>
      </div>
    </div>
  );
}
