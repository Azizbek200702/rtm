require("dotenv").config();
const { env } = process;

module.exports = {
    PORT: env.PORT,
    DATABASE_URL:env.MONGODB_URL,
  
};