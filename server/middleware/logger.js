const logger = (req, res, next) => {
  console.log("Log", `${req.method}: ${req.url}: ${new Date().toISOString()}`);
  next();
};

module.exports = { logger };
