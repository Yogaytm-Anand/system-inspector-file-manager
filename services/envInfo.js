function getEnvInfo() {
  return {
    PATH: process.env.PATH || "Not Available",

    USERNAME: process.env.USERNAME || "Not Available",

    TEMP: process.env.TEMP || "Not Available",

    HOME: process.env.HOME || "Not Available",

    NODE_ENV: process.env.NODE_ENV || "Not Available"
  };
}

module.exports = getEnvInfo;