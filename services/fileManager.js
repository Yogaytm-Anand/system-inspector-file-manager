const fs = require("fs");

function createFile(fileName, content) {
  fs.writeFileSync(fileName, content);
  console.log("File created successfully");
}

function readFile(fileName) {
  const data = fs.readFileSync(fileName, "utf8");
  console.log(data);
}

function updateFile(fileName, content) {
  fs.appendFileSync(fileName, "\n" + content);
  console.log("File updated successfully");
}

function deleteFile(fileName) {
  fs.unlinkSync(fileName);
  console.log("File deleted successfully");
}

function fileInfo(fileName){
    const stats = fs.statSync(fileName);

    console.log({
        size: stats.size + " bytes",
        created: stats.birthtime,
        modified: stats.mtime
    });
}

module.exports = {
  createFile,
  readFile,
  updateFile,
  deleteFile,
  fileInfo
};