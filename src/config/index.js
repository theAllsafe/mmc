import defaultConfig from "./default";
import prodConfig from "./production";

let config = defaultConfig;
console.log(
  "🚀 ~ file: index.js ~ line 6 ~ process.env.NODE_ENV",
  process.env.NODE_ENV
);
if (process.env.NODE_ENV === "production") {
  config = prodConfig;
}

export default config;
