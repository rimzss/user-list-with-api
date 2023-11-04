const fs = require("fs");
const path = require("path");

const p = path.join(__dirname, "../data/");

const readFile = (fileName) => {
  try {
    const { data } = JSON.parse(
      fs.readFileSync(p + fileName, {
        encoding: "utf-8",
      })
    );
    return data;
  } catch (error) {
    throw new Error("Aлдаа гарлаа"); // extends
  }
};

const writeFile = (fileName, data) => {
  fs.writeFileSync(p + fileName, JSON.stringify({ data }), {
    encoding: "utf-8",
  });
};

module.exports = { readFile, writeFile };
