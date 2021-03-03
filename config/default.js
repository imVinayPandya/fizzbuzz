module.exports = {
  environment: process.env.NODE_ENV,
  port: process.env.PORT,
  includeErrorStackTrace: false,
  disableLogger: false,
  morganFormat:
    ':method :url HTTP/:http-version :status :res[content-length] :referrer :remote-addr - :remote-user :user-agent :ip'
};
