const fs = require("fs");

const folders = fs
  .readdirSync("./")
  .filter((folder) => !["index.js", "lol.js"].includes(folder));
console.log(folders);

let text = "";

folders.forEach((folder) => {
  text += `export {${folder}} from './${folder}'\n`;
});

fs.writeFileSync("./index.js", text);
