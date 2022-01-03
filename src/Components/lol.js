const fs = require("fs");

const folders = fs
  .readdirSync("./")
  .filter((folder) => !["index.js", "lol.js"].includes(folder));
console.log(folders);

folders.forEach((folder) => {
  fs.writeFileSync(
    `./${folder}/index.js`,
    `export {default as ${folder}} from './${folder}.jsx'`
  );
});
