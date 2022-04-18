function loadEnvVariable(keyname) {
  const envVar = process.env[keyname];

  if (!envVar) {
    throw new Error(`Environment variable ${keyname} is not set`);
  }

  return envVar;
}

module.exports = {
  postgresUri: loadEnvVariable('POSTGRES_URI'),
};
