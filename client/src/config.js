const dev = {
    apiGateway: {
      REGION: "us-west-2",
      URL: ""
    }
  }
  
const prod = {
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://15m6o50hbe.execute-api.us-west-2.amazonaws.com/Prod/"
    }
};
  
const config = process.env.NODE_ENV === 'production' ? prod : dev;
  
export default {
    // common config values here
    // MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};