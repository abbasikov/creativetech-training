const cloudNosticApi = {
  apiKey: process.env.CLOUDNOSTIC_SERVICE_API_KEY || 'test',
  baseURL:
    process.env.REACT_APP_CLOUDNOSTIC_SERVICE_API_URI || 'http://localhost:8080'
};

export default cloudNosticApi;
