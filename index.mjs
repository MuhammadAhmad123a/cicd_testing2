import log4js from "log4js";
export const handler = async (event) => {
  try {
    const respone = "Hello from Lambda!";
    logger.info(`${respone}`);
    return respone;
  } catch (error) {
    logger.error(`An error occured! ${error}`);
    return error;
  }
};
