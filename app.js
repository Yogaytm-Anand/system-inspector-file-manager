const fs = require("fs");

const getSystemInfo = require("./services/systemInfo");
const getEnvInfo = require("./services/envInfo");

const {
  createFile,
  readFile,
  updateFile,
  deleteFile,
  fileInfo
} = require("./services/fileManager");


const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

const report = {
  generatedAt: new Date().toISOString(),
  systemInfo: getSystemInfo(),
  environmentVariables: getEnvInfo()
};

if (!command) {
  console.log(JSON.stringify(report, null, 2));

  fs.writeFileSync(
    "./reports/system-report.json",
    JSON.stringify(report, null, 2)
  );

  console.log("System report saved successfully.");
}

try {
  switch (command) {
    case "create":
      createFile(fileName, content || "");
      break;

    case "read":
      readFile(fileName);
      break;

    case "update":
      updateFile(fileName, content || "");
      break;

    case "delete":
      deleteFile(fileName);
      break;

    case "info":
      fileInfo(fileName);
      break;

    default:
        if (command) {
            console.log("Invalid command.");
        }
  }
} catch (error) {
  console.error("Error:", error.message);
}