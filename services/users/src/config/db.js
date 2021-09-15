const {
  MONGODB_IP,
  MONGODB_USER,
  MONGODB_PASSWORD,
  MONGODB_DATABASE,
  MONGODB_DOCKER_PORT,
} = process.env;

module.exports = {
  url: `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_IP}:${MONGODB_DOCKER_PORT}/${MONGODB_DATABASE}?authSource=admin`,
};
