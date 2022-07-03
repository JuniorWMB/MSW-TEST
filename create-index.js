const elasticClient = require("./elastic-client");

const createProfil = async (indexName) => {
  await elasticClient.indices.create({ index: indexName });
  console.log("Index created");
};

createProfil("profile-scientifique");
