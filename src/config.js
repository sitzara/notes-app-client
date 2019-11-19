export default {
  s3: {
    REGION: "eu-central-1",
    BUCKET: "notes-test-app-gonna-break-your-neck"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://7se794u7a3.execute-api.eu-central-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_4KnoLrXaf",
    APP_CLIENT_ID: "3kkbkp76ub6vl90sa6u1vhk1sb",
    IDENTITY_POOL_ID: "eu-central-1:1ecce1d9-7d87-4e75-b917-b6125dabaf43"
  },
  MAX_ATTACHMENT_SIZE: 5000000,
};
