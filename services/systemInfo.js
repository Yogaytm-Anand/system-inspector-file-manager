const os = require("os");

function getSystemInfo() {
  return {
    hostname: os.hostname(),
    platform: os.platform(),
    architecture: os.arch(),

    nodeVersion: process.version,

    homeDirectory: os.homedir(),

    cpuCount: os.cpus().length,

    totalMemoryGB: (os.totalmem() / 1024 ** 3).toFixed(2),

    freeMemoryGB: (os.freemem() / 1024 ** 3).toFixed(2),

    uptimeMinutes: Math.floor(os.uptime() / 60)
  };
}

module.exports = getSystemInfo;