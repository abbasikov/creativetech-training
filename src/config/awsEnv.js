const awsEnv = {
  AWS_REGION: process.env.REACT_APP_AWS_REGION,
  AWS_COGNITO_IDENTITY_POOL_ID:
    process.env.REACT_APP_AWS_COGNITO_IDENTITY_POOL_ID,
  AWS_COGNITO_USER_POOL_ID: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
  AWS_COGNITO_CLIENT_ID: process.env.REACT_APP_AWS_COGNITO_CLIENT_ID,
  AWS_COGNITO_CLIENT_DOMAIN_NAME:
    process.env.REACT_APP_AWS_COGNITO_CLIENT_DOMAIN_NAME,
  AWS_COGNITO_IDP_NAME: process.env.REACT_APP_AWS_COGNITO_IDP_NAME,
  AWS_COGNITO_IDP_SIGNIN_URL: process.env.REACT_APP_AWS_COGNITO_IDP_SIGNIN_URL, // must match cognito setting
  AWS_COGNITO_IDP_SIGNOUT_URL:
    process.env.REACT_APP_AWS_COGNITO_IDP_SIGNOUT_URL, // must match cognito setting
  AWS_COGNITO_IDP_OAUTH_CLAIMS: [
    'phone',
    'email',
    'profile',
    'openid',
    'aws.cognito.signin.user.admin'
  ],
  AWS_COGNITO_IDP_GRANT_FLOW: process.env.REACT_APP_AWS_COGNITO_IDP_GRANT_FLOW
};

export default awsEnv;
