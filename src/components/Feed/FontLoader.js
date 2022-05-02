import React from "react";
import GoogleFontLoader from "react-google-font-loader";

const FontLoader = () => {
  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: "Raleway",
            weights: [
              400,
              500,
              600,
              700,
              800,
              900,
              "400i",
              "500i",
              "600i",
              "700i",
              "800i",
              "900i",
            ],
          },
          {
            font: "'Waiting for the Sunrise', cursive",
            weights: [400, 100],
          },
          {
            font: "'Playfair Display', serif",
            weights: [
              400,
              500,
              600,
              700,
              800,
              900,
              "400i",
              "500i",
              "600i",
              "700i",
              "800i",
              "900i",
            ],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
    </>
  );
};

export default FontLoader;
