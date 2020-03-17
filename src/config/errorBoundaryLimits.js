const errorBoundaryLimit = {
  logLevel: 'error',
  errorBatchLimit: 10, // max count of error batch limit before sending to server
  errorInterval: 5 // Time limit in seconds when to send next batch to server
};

export default errorBoundaryLimit;
